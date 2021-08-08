import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    border: 0;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background: #D1B3B1;
  }
`;

export default GlobalStyles;