import styled, { css } from 'styled-components';

interface BottomViewProps {
  statusBottomView: boolean;
}

export const BottomViewWrapper = styled.div<BottomViewProps>`
  position: fixed;
  background: var(--color-background);
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;

  bottom: -100%;
  height: 450px;
  left: 0;
  right: 0;

  transition: all 0.4s ease-in-out;

  ${props =>
    props.statusBottomView &&
    css`
      bottom: 0;
    `}
`;

export const BottomViewHeader = styled.header`
  display: flex;
  padding: 1rem;
  height: 75px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.25);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    h5 {
      font-size: 25px;
    }

    svg {
      color: var(--color-danger);
    }
  }
`;

export const BottomViewBody = styled.div`
  display: flex;
  padding: 1rem;

  form {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      margin: 1rem;
    }
  }
`;

export const Overlay = styled.a<BottomViewProps>`
  position: fixed;
  visibility: hidden;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: all 0.4s ease-in-out;

  ${props =>
    props.statusBottomView &&
    css`
      visibility: visible;
      background: rgba(0, 0, 0, 0.5);
    `}
`;
