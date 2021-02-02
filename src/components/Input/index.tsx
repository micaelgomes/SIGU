import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  ComponentType,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import * as S from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleChangeFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleChangeBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {error && (
        <S.Error>
          <p>{error}</p>
          <FiAlertCircle color="#c53030" size={14} />
        </S.Error>
      )}
      <S.InputWrapper
        isErrored={!!error}
        isFilled={isFilled}
        onFocus={handleChangeFocus}
        onBlur={handleChangeBlur}
        isFocused={isFocused}
      >
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          type="text"
          name={name}
          {...rest}
        />
        {Icon && <Icon size={18} />}
      </S.InputWrapper>
    </>
  );
};

export default Input;
