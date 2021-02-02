import { createGlobalStyle } from 'styled-components';
import 'typeface-rubik';
import 'typeface-open-sans';

export default createGlobalStyle`
  html {
    --color-background: #F5F6F8;
    --color-sidebar: #FAFDFF;
    --color-card: #FAFDFF;
    --color-text: #0D0D0D;
    --color-blue: #049DD9;
    --color-gray: #B6B6B6;
    --color-danger: #E14141;
    --font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
    font-family: 'Open sans', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.488rem;
  }

  h2 {font-size: 2.074rem;}

  h3 {font-size: 1.728rem;}

  h4 {font-size: 1.44rem;}

  h5 {font-size: 1.2rem;}

  small {
    font-size: 0.833rem;
    text-transform: uppercase;
    color: var(--color-gray);
    font-weight: bold;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }

  a {
    color: #049DD9;
    font-weight: bold;
  }
`;
