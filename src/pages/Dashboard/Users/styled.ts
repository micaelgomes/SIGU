import styled from 'styled-components';

export const UsersWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  overflow-y: auto;
  height: calc(100vh - 75px);
`;

export const UserContainer = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  button {
    display: flex;
    align-items: center;

    background: var(--color-blue);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: var(--color-card);
    transition: transform 0.2s ease-in-out;

    svg {
      margin-right: 4px;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const TableHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #b6b6b6;
  margin-bottom: 1rem;

  padding: 1rem;

  h5 {
    font-size: 16px;
    color: var(--color-gray);
    text-transform: uppercase;

    &:nth-child(2) {
      width: 300px;
      text-align: center;
      margin: 0 1rem;
    }

    &:last-child {
      flex: 1;
    }
  }
`;

export const TableBody = styled.div``;
