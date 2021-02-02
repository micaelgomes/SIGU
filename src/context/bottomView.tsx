import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';
import BottomView from '../components/BottomView';

interface UserModel {
  id: string;
  email: string;
  name: string;
  filename?: string;
  createAt?: string;
  updateAt?: string;
}

interface BottomViewData {
  stateBottomView: boolean;
  toogleBottomView(): void;
  setUser: Dispatch<SetStateAction<UserModel>>;
}

const BottomViewContext = createContext<BottomViewData>({} as BottomViewData);

const BottomViewProvider: React.FC = ({ children }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [user, setUser] = useState<UserModel>({} as UserModel);

  console.log(user);

  const toogleBottomView = useCallback(() => setOpened(!opened), [opened]);

  return (
    <BottomViewContext.Provider
      value={{ stateBottomView: opened, toogleBottomView, setUser }}
    >
      {children}
      <BottomView
        statusBottomView={opened}
        toogleBottomView={toogleBottomView}
        user={user}
      />
    </BottomViewContext.Provider>
  );
};

const useBottomView = (): BottomViewData => {
  const context = useContext(BottomViewContext);

  if (!context)
    throw new Error('useBottomView must be used in sidebar context');

  return context;
};

export { BottomViewProvider, useBottomView };
