import React, { useState } from 'react';
import { FiChevronDown, FiLogOut } from 'react-icons/fi';
import urlDefaultImage from '../../assets/theme/default-user-image.png';
import { useAuth } from '../../context/auth';

import * as S from './styled';

const UserMenu: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { signOut, user } = useAuth();

  const toogleDropdown = () => setOpened(!opened);

  return (
    <S.UserMenuWrapper>
      <img src={urlDefaultImage} alt="user talz e talz" />
      <h5>{user.name}</h5>
      <button onClick={toogleDropdown}>
        <FiChevronDown size={18} />
      </button>

      <S.Overlay opened={opened} onClick={toogleDropdown} />

      <S.UserMenuOptions opened={opened}>
        <button onClick={signOut}>
          <FiLogOut size={18} color="#E14141" />
          <span>Sair</span>
        </button>
      </S.UserMenuOptions>
    </S.UserMenuWrapper>
  );
};

export default UserMenu;
