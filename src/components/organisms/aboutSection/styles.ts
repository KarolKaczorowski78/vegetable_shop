import styled, { css } from 'styled-components';
import SectionProto from '../../atoms/section/section';
import H2Proto from '../../atoms/h2/h2';
import PProto from '../../atoms/p/p';
import DivProto from '../../atoms/div/div';
import ImgProto from '../../atoms/img/img';
import EBreakpoints from '../../../__types__/EBreakpoints';

export const Section = styled(SectionProto)`
  padding-top: 60px;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const H2 = styled(H2Proto)`
  font-size: 2.2rem;
`;

export const P = styled(PProto)`

`;

export const Div = styled(DivProto)`
  background: #D0A97A;
  text-shadow: 0 0 7px white;
  width: 550px;
  position: relative;
  padding: 20px 25px;
  box-shadow: 0 0 10px black;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    width: 300px;
  }
`;  

export const Img = styled(ImgProto)`
  width: 80%;
  min-width: 250px;
  height: auto;
  margin-top: 10px;
  box-shadow: 0 0 8px black;
`;

export const ButtonStyle = css`
  background: #cda370;
  text-shadow: 0 0 8px white;
  box-shadow: 0 0 5px black;
  border-radius: 5%;
`;