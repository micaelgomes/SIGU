import styled, { keyframes } from 'styled-components';
import urlBgLogin from '../../assets/theme/bg-login.png';
import urlLogoWhite from '../../assets/brand/logo-white-top.png';

export const SingInWrapper = styled.div`
  background: url(${urlBgLogin});
  min-height: 100vh;
  position: relative;
  display: flex;
  background-size: cover;
  position: relative;

  &::after {
    content: '';
    position: fixed;
    background: url(${urlLogoWhite});
    background-repeat: no-repeat;
    background-size: contain;
    width: 150px;
    height: 100px;
    right: 1rem;
    bottom: 1rem;
    z-index: 99;
  }
`;

export const SectionLogin = styled.div`
  display: flex;
  background: var(--color-background);
  max-width: 500px;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SectionLoginForm = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  animation: ${appearFromLeft} 1s ease-in-out;

  header {
    text-align: center;

    b {
      color: var(--color-gray);
      margin-left: 2rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        background: #b6b6b6;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: -20px;
        top: 20px;
      }
    }
  }

  form {
    margin: 2.5rem 0;

    section {
      div {
        min-width: 400px;
      }

      margin-bottom: 3rem;
    }
  }
`;
