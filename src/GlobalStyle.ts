import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS RESET */

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: Roboto;
    font-weight: 400;
    font-size: 1rem;
    position: relative;

    h1, h2, h3, h4, p {
      margin-bottom: 0;
      line-height: fit-content;
      line-height: 1;
    }
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
