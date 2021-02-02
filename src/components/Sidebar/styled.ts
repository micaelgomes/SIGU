import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface SidebarWrapperProps {
  opened: boolean;
}

interface LinkMenuProps {
  currentPath: boolean;
}

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
  display: block;
  background: var(--color-sidebar);
  height: calc(100vh - 75px);
  width: 250px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  transition: all 0.2s ease-in-out;

  button {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--color-gray);
      margin-right: 8px;
    }

    small {
      font-weight: 500;
      width: 75px;
    }
  }

  ul {
    margin-top: 1rem;
    list-style: none;

    li {
      overflow: hidden;
    }
  }

  ${props =>
    !props.opened &&
    css`
      width: 50px;

      button {
        svg {
          position: absolute;
        }

        span {
          width: 0;
        }
      }
    `}
`;

export const LinkMenu = styled(Link)<LinkMenuProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.3rem;
  text-decoration: none;
  background: inherit;
  color: var(--color-text);

  position: relative;

  svg {
    position: absolute;
  }

  span {
    margin-left: 28px;
    font-size: 18px;
  }

  &::before {
    content: '';
    position: absolute;
    height: 30px;
    width: 5px;
    left: 0;
    border-radius: 0px 5px 5px 0px;
    background: #049dd9;
  }

  ${props =>
    props.currentPath &&
    css`
      background: #f5f6f8;
      color: var(--color-blue);
    `}
`;
