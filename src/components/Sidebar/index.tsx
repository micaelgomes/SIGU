import React from 'react';
import { FiUsers, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import * as S from './styled';

interface SidebarProps {
  opened: boolean;
  toogleSidebar(): void;
}

const Sidebar: React.FC<SidebarProps> = ({ opened, toogleSidebar }) => {
  return (
    <S.SidebarWrapper opened={opened}>
      <button onClick={toogleSidebar}>
        {opened ? (
          <>
            <FiChevronsLeft size={16} />
            <small>minimizar</small>
          </>
        ) : (
          <FiChevronsRight size={18} />
        )}
      </button>

      <ul>
        <li>
          <S.LinkMenu currentPath to="/">
            <FiUsers size={18} />
            <span>usuários</span>
          </S.LinkMenu>
        </li>
      </ul>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
