import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap&subset=latin-ext');

  *, *::before, *::after {
    box-sizing: border-box; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
    background-color: #F7F7F7;
  }
`;

export default GlobalStyle;
