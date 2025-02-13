import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  ${normalize}

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.background.light.color};
  }

  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export { GlobalStyle as default };
