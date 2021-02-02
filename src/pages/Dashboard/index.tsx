import React from 'react';
import Navbar from '../../components/Navbar';
import { SidebarProvider } from '../../context/sidebar';
import { BottomViewProvider } from '../../context/bottomView';
import { UserProvider } from '../../context/users';

import Users from './Users';
import * as S from './styled';

const Dashboard: React.FC = () => {
  return (
    <S.DashboardWrapper>
      <Navbar />

      <S.DashboardMain>
        <UserProvider>
          <SidebarProvider>
            <BottomViewProvider>
              <Users />
            </BottomViewProvider>
          </SidebarProvider>
        </UserProvider>
      </S.DashboardMain>
    </S.DashboardWrapper>
  );
};

export default Dashboard;
