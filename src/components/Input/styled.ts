import styled, { css } from 'styled-components';

interface InputStyleProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputWrapper = styled.div<InputStyleProps>`
  display: flex;

  border: 2px solid #b6b6b6;
  box-sizing: border-box;
  border-radius: 5px;

  width: 100%;
  max-width: 400px;
  padding: 0.8rem 1rem;

  & {
    & + div {
      margin-top: 1rem;
    }
  }

  svg {
    margin-left: 8px;
    color: #b6b6b6;
  }

  input {
    width: 100%;
    border: none;
    background: transparent;

    &::placeholder {
      color: #b6b6b6;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--color-danger);
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--color-blue);

      svg {
        color: var(--color-blue);
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: var(--color-blue);
      }
    `}
`;

export const Error = styled.span`
  display: flex;
  flex-direction: row-reverse;

  align-items: center;
  width: 100%;
  justify-content: flex-end;

  max-width: 400px;
  width: 100%;

  p {
    font-size: 14px;
    color: var(--color-danger);
  }

  svg {
    margin: 0 8px;
  }
`;
