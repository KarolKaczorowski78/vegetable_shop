import { createGlobalStyle } from 'styled-components';
import EBreakPoints from '../__types__/EBreakpoints';

const { DESKTOP, LAPTOP, TABLET, MOBILE_BIG, MOBILE_SMALL } = EBreakPoints;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(to left, #c59459, #fffdd0);
    margin: 0;
    padding: 0;
  }
  html {
    @media (max-width: ${DESKTOP}) {
      font-size: 20px;
    }
    @media (max-width: ${LAPTOP}) {
      font-size: 18px;
    }
    @media (max-width: ${TABLET}) {
      font-size: 16px;
    }
    @media (max-width: ${MOBILE_BIG}) {
      font-size: 14px;
    }
    @media (max-width: ${MOBILE_SMALL}) {
      font-size: 12px;
    }
  }
  h1, h2, h3 {
    font-family: 'Berkshire Swash', cursive;
  }
`;