import styled, { css } from 'styled-components';

interface UserMenuProps {
  opened: boolean;
}

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--color-card);

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #b6b6b6;
  }

  h5 {
    margin: 0.5rem;
    font-weight: 500;
  }

  svg {
    color: var(--color-card);
    /* margin-top: 5px; */
  }
`;

export const UserMenuOptions = styled.div<UserMenuProps>`
  position: absolute;
  background: var(--color-sidebar);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  right: 0;
  top: 34px;
  width: 150px;
  height: auto;
  display: none;
  padding: 0.5rem;

  button {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    span {
      color: var(--color-danger);
    }
  }

  ${props =>
    props.opened &&
    css`
      display: block;
    `}
`;

export const Overlay = styled.a<UserMenuProps>`
  position: fixed;
  display: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 0.4s ease-in-out;

  ${props =>
    props.opened &&
    css`
      display: block;
    `}
`;
