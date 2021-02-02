import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Card from '../../../components/Card';
import * as S from './styled';
import { useUser } from '../../../context/users';

import { useBottomView } from '../../../context/bottomView';

const Users: React.FC = () => {
  const { listUser } = useUser();
  const users = listUser();

  const { toogleBottomView, clearUser } = useBottomView();

  const createUser = () => {
    clearUser();
    toogleBottomView();
  };

  return (
    <S.UsersWrapper>
      <S.UserContainer>
        <S.UserHeader>
          <div>
            <small>painel de gestão</small>
            <h1>Usuários</h1>
          </div>

          <button onClick={createUser}>
            <FiPlus size={18} />
            <span>adicionar</span>
          </button>
        </S.UserHeader>

        <S.TableHead>
          <h5>avatar</h5>
          <h5>nome</h5>
          <h5>email</h5>
        </S.TableHead>

        <S.TableBody>
          {users.length ? (
            users.map(user => (
              <Card
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                name={user.name}
                email={user.email}
              />
            ))
          ) : (
            <p>carregando...</p>
          )}
        </S.TableBody>
      </S.UserContainer>
    </S.UsersWrapper>
  );
};

export default Users;
