import styled from 'styled-components';
import EBreakpoints from '../../../__types__/EBreakpoints';
import Div from '../../atoms/div/div';
import SectionProto from '../../atoms/section/section';
import Img from '../../atoms/img/img';
import H2Proto from '../../atoms/h2/h2';
import PProto from '../../atoms/p/p';
import UlProto from '../../atoms/ul/ul';

export const SectionWrapper = styled(Div)`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 5%;
  position: relative;
`;

export const Section = styled(SectionProto)`
  background: #D0A97A;
  min-height: calc(100vh - 100px);
  background: rgba(0, 0, 0, .6);
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 10px 15px;
  min-width: 300px;
  margin: 0 auto;
`;

export const AssetWrapper = styled(Div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;
`;

export const H2 = styled(H2Proto)`
  font-size: 2.2rem;
  width: 100%;
`;

export const P = styled(PProto)`
width: 100%;
`;

export const Ul = styled(UlProto)`
  text-align: left;
  width: 400px;
  @media (max-width: ${EBreakpoints.TABLET}) {
    text-align: center;
  }
`;

export const Map = styled(Img)`
  width: 400px;
  box-shadow: 0 0 10px white;
  height: auto;
  @media (max-width: ${EBreakpoints.TABLET}) {
    width: 90%;
  }
`;