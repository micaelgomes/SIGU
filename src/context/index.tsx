import React from 'react';
import { AuthProvider } from './auth';
import { UserProvider } from './users';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

export default AppProvider;
