import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(to left, #c59459, #fffdd0);
    margin: 0;
    padding: 0;
  }
  h1, h2, h3 {
    font-family: 'Berkshire Swash', cursive;
  }
`;