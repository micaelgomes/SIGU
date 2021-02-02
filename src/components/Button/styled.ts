import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: #049dd9;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 400px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }

  span {
    color: var(--color-sidebar);
    text-transform: uppercase;
    flex: 1;
  }

  svg {
    color: var(--color-sidebar);
    margin-left: 8px;
  }
`;
