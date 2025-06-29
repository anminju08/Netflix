import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    font-family: sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyle;