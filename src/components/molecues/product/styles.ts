import styled from 'styled-components';
import Div from '../../atoms/div/div';
import ImgProto from '../../atoms/img/img';
import H2Proto from '../../atoms/h2/h2';
import PProto from '../../atoms/p/p';
import EBreakpoints from '../../../__types__/EBreakpoints';

export const Container = styled(Div)`
  width: 400px;
  height: auto;
  position: relative;
  text-align: center;
  margin: 30px 15px;
  padding: 20px 10px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(10px);
  border-radius: 5%;
  box-shadow: 0 0 5px black;
  background: linear-gradient(to bottom, #c59459, #fffdd0);
  @media (max-width: ${EBreakpoints.TABLET}) {
    width: 300px;
  }
`;

export const ImgContainer = styled(Div)`
  width: 90%;
  height: 260px;
  box-shadow: 0 0 10px black;
  object-fit: cover;
  position: relative;
  margin: 0 auto;
  @media (max-width: ${EBreakpoints.TABLET}) {
    height: 150px;
  }
`;

export const Img = styled(ImgProto)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const H2 = styled(H2Proto)`

`;

export const P = styled(PProto)`

`;