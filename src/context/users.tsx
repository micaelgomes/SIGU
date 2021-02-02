import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../service/api';

interface UserModel {
  id: string;
  email: string;
  name: string;
  filename?: string;
  createAt?: string;
  updateAt?: string;
}

interface CreateUser extends UserModel {
  password: string;
}

interface UserContextData {
  addUser(user: Omit<CreateUser, 'id'>): Promise<void>;
  deleteUser(userId: string): void;
  listUser(): UserModel[];
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    api.get<UserModel[]>('/users').then(response => setUsers(response.data));
  }, []);

  const addUser = useCallback(async (user: Omit<CreateUser, 'id'>) => {
    const { data } = await api.post<UserModel>('/users', {
      name: user.name,
      email: user.email,
      password: user.password,
    });

    setUsers(oldUsers => [data, ...oldUsers]);
  }, []);

  const deleteUser = useCallback(
    async (userId: string) => {
      await api.delete<string>(`/users/${userId}`);

      const usersUpdated = users.filter(user => user.id !== userId);

      setUsers(usersUpdated);
    },
    [users],
  );

  const listUser = useCallback(() => users, [users]);

  return (
    <UserContext.Provider value={{ addUser, listUser, deleteUser }}>
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
