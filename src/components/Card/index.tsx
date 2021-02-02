import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { useUser } from '../../context/users';
import { useAuth } from '../../context/auth';
import { useBottomView } from '../../context/bottomView';

import * as S from './styled';

interface CardProps {
  id: string;
  pathImage?: string;
  name: string;
  email: string;
}

const Card: React.FC<CardProps> = ({ id, pathImage, name, email }) => {
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
      window.alert('Você não pode deletar por aqui');
    }
  };

  const editUser = () => {
    setUser({
      id,
      name,
      filename: pathImage,
      email,
    });

    toogleBottomView();
  };

  return (
    <S.CardWrapper>
      <img src={pathImage} alt="user talz" />
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
