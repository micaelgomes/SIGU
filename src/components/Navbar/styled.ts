import styled from 'styled-components';
import urlLogo from '../../assets/brand/logo-white.png';

export const NavbarWrapper = styled.nav`
  display: flex;
  background-color: var(--color-blue);
  padding: 0 1rem;
  width: 100%;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  height: 75px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  #logo {
    background: url(${urlLogo});
    width: 150px;
    height: 50px;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: auto 0;
  }
`;
