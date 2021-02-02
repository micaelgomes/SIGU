import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ label, icon: Icon, ...rest }) => {
  return (
    <S.ButtonWrapper>
      <span {...rest}>{label}</span>
      {Icon && <Icon size={18} />}
    </S.ButtonWrapper>
  );
};

export default Button;
