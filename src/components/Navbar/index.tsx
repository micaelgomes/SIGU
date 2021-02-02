import React from 'react';
import UserMenu from '../UserMenu';

import * as S from './styled';

const Navbar: React.FC = () => {
  return (
    <S.NavbarWrapper>
      <S.NavbarContainer>
        <span id="logo" />

        <UserMenu />
      </S.NavbarContainer>
    </S.NavbarWrapper>
  );
};

export default Navbar;
