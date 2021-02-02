import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { useUser } from '../../context/users';
import { useAuth } from '../../context/auth';
import { useBottomView } from '../../context/bottomView';

import urlDefaultImage from '../../assets/theme/default-user-image.png';

import * as S from './styled';

interface CardProps {
  id: string;
  avatar?: string;
  name: string;
  email: string;
}

const Card: React.FC<CardProps> = ({ id, avatar, name, email }) => {
  const { deleteUser } = useUser();
  const { user } = useAuth();
  const { toogleBottomView, setUser } = useBottomView();

  const confirmDeleteUser = (userId: string, nameUser: string) => {
    if (userId !== user.id) {
      // eslint-disable-next-line no-alert
      const answer = window.confirm(`Deseja deletar ${nameUser}?`);

      if (answer) {
        deleteUser(userId);
      }
    } else {
      // eslint-disable-next-line no-alert
      window.alert('Você não pode deletar sua conta por aqui');
    }
  };

  const editUser = () => {
    setUser({
      id,
      name,
      avatar,
      email,
    });

    toogleBottomView();
  };

  return (
    <S.CardWrapper>
      <img
        src={avatar ? `http://localhost:3333/files/${avatar}` : urlDefaultImage}
        alt={name}
      />
      <h5>{name}</h5>
      <p>{email}</p>
      <div>
        <button onClick={() => editUser()}>
          <FiEdit size={16} />
        </button>
        <button onClick={() => confirmDeleteUser(id, name)}>
          <FiTrash2 size={16} />
        </button>
      </div>
    </S.CardWrapper>
  );
};

export default Card;
