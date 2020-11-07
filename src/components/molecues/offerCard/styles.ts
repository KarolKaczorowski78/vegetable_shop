import styled, { css } from 'styled-components';
import Div from '../../atoms/div/div';
import H2Proto from '../../atoms/h2/h2';
import ImgProto from '../../atoms/img/img';

export const Container = styled(Div)`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  background: #D0A97A;
  box-shadow: 0 0 10px black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative;
  & > h2 {
    text-transform: capitalize;
  }
  @media (max-width: 1300px) {
    width: 250px;
    height: 350px;
  }
`;

export const H2 = styled(H2Proto)`
  text-align: center;
  text-shadow: 0 0 17px white;
`;

export const Img = styled(ImgProto)`
  width: 90%;
  height: auto;
  box-shadow: 0 0 8px black;
`;

export const ButtonStyle = css`
  height: 40px;
  width: 85%;
  background: #d29c5b;
  border: 2px solid black;
  text-transform: uppercase;
  color: black;
  padding-top: 7px;
  text-decoration: none;
  text-align: center;
  font-size: 17px;
  & > span {
    position: relative;
    margin-left: -15px;
    & > span {
      transition: .2s;
    }
    & > svg {
      transition: .5s;
      position: absolute;
      left: calc(100% + 5px);
    }
  }
  &:hover {
    & > span {
      & > span {
        opacity: 0;
      }
      & > svg {
        left: calc(50% - 5px);
      }
    }
  }
`;