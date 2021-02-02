import React from 'react';
import Navbar from '../../components/Navbar';
import { SidebarProvider } from '../../context/sidebar';
import { BottomViewProvider } from '../../context/bottomView';

import Users from './Users';
import * as S from './styled';

const Dashboard: React.FC = () => {
  return (
    <S.DashboardWrapper>
      <Navbar />

      <S.DashboardMain>
        <SidebarProvider>
          <BottomViewProvider>
            <Users />
          </BottomViewProvider>
        </SidebarProvider>
      </S.DashboardMain>
    </S.DashboardWrapper>
  );
};

export default Dashboard;
