import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Toast from '../components/Toast';

interface ToastDataContext {
  addToast(data: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
  messages: ToastMessage[];
}

export interface ToastMessage {
  id: string;
  type: 'info' | 'error' | 'success';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastDataContext>({} as ToastDataContext);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, description, type }: Omit<ToastMessage, 'id'>) => {
      const newMessage = {
        id: uuid(),
        type,
        title,
        description,
      };

      setMessages(oldMessages => [...oldMessages, newMessage]);
    },
    [],
  );

  const removeToast = useCallback(id => {
    setMessages(oldMessages =>
      oldMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, messages }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastDataContext => {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used in your context');

  return context;
};

export { ToastProvider, useToast };
