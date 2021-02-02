import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../context/toast';
import ToastItem from './ToastItem';

import * as S from './styled';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <S.Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <ToastItem key={key} message={item} style={props} />
      ))}
    </S.Container>
  );
};

export default Toast;
