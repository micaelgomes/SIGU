import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../service/api';

import { useToast } from './toast';

interface UserModel {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createAt?: string;
  updateAt?: string;
}

interface CreateUser extends UserModel {
  password: string;
}

interface UserContextData {
  addUser(user: Omit<CreateUser, 'id'>): Promise<void>;
  updateUser(user: CreateUser): Promise<void>;
  updateAvatarUser(image: File, userId: string): Promise<void>;
  deleteUser(userId: string): void;
  listUser(): UserModel[];
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const [users, setUsers] = useState<UserModel[]>([]);

  const token = localStorage.getItem('@sigu:t0k3n');

  useEffect(() => {
    api
      .get<UserModel[]>('/users', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => setUsers(response.data));
  }, [token]);

  const addUser = useCallback(async (user: Omit<CreateUser, 'id'>) => {
    const { data } = await api.post<UserModel>('/users', {
      name: user.name,
      email: user.email,
      password: user.password,
    });

    setUsers(oldUsers => [data, ...oldUsers]);
  }, []);

  const updateUser = useCallback(
    async (user: CreateUser) => {
      const { data } = await api.post<UserModel>('/users', user);

      const usersUpdateds = users.filter(userCurr => userCurr.id !== user.id);

      setUsers([data, ...usersUpdateds]);
    },
    [users],
  );

  const updateAvatarUser = useCallback(
    async (imageItem: File, userId: string) => {
      const image = new FormData();
      image.append('avatar', imageItem, imageItem.name);

      const { data } = await api.patch(`/users/avatar/${userId}`, image, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      const usersUpdateds = users.filter(userCurr => userCurr.id !== userId);
      setUsers([data, ...usersUpdateds]);
    },
    [token, users],
  );

  const deleteUser = useCallback(
    async (userId: string) => {
      await api.delete<string>(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const usersUpdated = users.filter(user => user.id !== userId);

      setUsers(usersUpdated);

      addToast({
        type: 'info',
        title: 'Usuário excluído com sucesso',
      });
    },
    [addToast, token, users],
  );

  const listUser = useCallback(() => users, [users]);

  return (
    <UserContext.Provider
      value={{ addUser, updateUser, updateAvatarUser, listUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): UserContextData => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used in auth context.');

  return context;
};

export { UserProvider, useUser };
