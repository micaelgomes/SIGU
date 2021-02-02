import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: var(--color-card);
  border-radius: 5px;
  width: 100%;
  height: 75px;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: transform 0.2s ease-in-out;

  & {
    & + div {
      margin-top: 0.5rem;
    }
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #b6b6b6;
  }

  h5 {
    margin: 0 5%;
    width: 250px;
  }

  p {
    flex: 1;
  }

  div {
    button {
      & + button {
        margin-left: 8px;
        color: var(--color-danger);
      }
    }
  }

  &:hover {
    transform: translateX(5px);
  }
`;
