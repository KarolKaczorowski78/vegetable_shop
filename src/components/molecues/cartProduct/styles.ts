import styled from 'styled-components';
import DivProto from '../../atoms/div/div';
import ImgProto from '../../atoms/img/img';
import EBrakPoints from '../../../__types__/EBreakpoints';

export const Div = styled(DivProto)`
  width: 300px;
  height: auto;
  position: relative;
  text-align: center;
  padding: 6px 10px 0;
  border: 1px solid white;
  background: rgba(0, 0, 0, .8);
  margin: 10px 0;
  transform: translateY(15px);
  visibility: hidden;
  @media (max-width: ${EBrakPoints.TABLET_SMALL}) {
    width: 240px;
  }
`;

export const Img = styled(ImgProto)`
  width: 100%;
  display: block;
  margin: auto;
  height: 220px;
  object-fit: cover;
  @media (max-width: ${EBrakPoints.MOBILE_BIG}) {
    height: 160px;
  }
`;

