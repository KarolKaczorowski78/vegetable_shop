import styled from 'styled-components';
import Div from '../../atoms/div/div';

export const Header = styled.header`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Intro = styled(Div)`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1, p {
    text-shadow: 0 0 17px white;
  }
  * {
    font-weight: bold;
    text-align: center;
  }
`;
