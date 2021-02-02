import React, { createContext, useCallback, useContext, useState } from 'react';
import Sidebar from '../components/Sidebar';

interface SidebarData {
  stateDrawer: boolean;
  toogleSidebar(): void;
}

const SidebarContext = createContext<SidebarData>({} as SidebarData);

const SidebarProvider: React.FC = ({ children }) => {
  const [opened, setOpened] = useState<boolean>(() => {
    const state = localStorage.getItem('@sigu:sidebar');

    return state === 'true';
  });

  const toogleSidebar = useCallback(() => {
    const newState = !opened;
    setOpened(newState);

    localStorage.setItem('@sigu:sidebar', JSON.stringify(newState));
  }, [opened]);

  return (
    <SidebarContext.Provider value={{ stateDrawer: opened, toogleSidebar }}>
      <Sidebar opened={opened} toogleSidebar={toogleSidebar} />
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = (): SidebarData => {
  const context = useContext(SidebarContext);

  if (!context) throw new Error('useSidebar must be used in sidebar context');

  return context;
};

export { SidebarProvider, useSidebar };
