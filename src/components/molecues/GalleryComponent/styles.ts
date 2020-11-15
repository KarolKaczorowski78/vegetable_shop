import styled from 'styled-components';
import DivProto from '../../atoms/div/div';
import ImgProto from '../../atoms/img/img';
import PProto from '../../atoms/p/p';
import EBreakpoints from '../../../__types__/EBreakpoints';

export const Div = styled(DivProto)`
  width: 700px;
  height: auto;
  min-width: 280px;
  position: relative;
  min-width: 280px;
  margin: 40px auto;
  border-radius: 10%;
  @media (max-width: ${EBreakpoints.TABLET}) {
    width: 95vw;
  }
`;

export const Img = styled(ImgProto)`
  width: 100%;
  height: auto;
  box-shadow: 0 0 12px black;
  border-radius: 5%;
`;

export const ContentContainer = styled(DivProto)`
  position: absolute;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
  top: 0;
  right: 0;
  width: 200px;
  background: rgba(0, 0, 0, .4);
  height: calc(100% - 5px);
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  @media (max-width: ${EBreakpoints.TABLET}) {
    display: none;
  }
`;

export const P = styled(PProto)`
  font-size: .75rem;
`