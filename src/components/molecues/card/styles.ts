import styled from 'styled-components';
import DivProto from '../../atoms/div/div';
import H2Proto from '../../atoms/h2/h2';
import ImgProto from '../../atoms/img/img';
import EBreakpoints from '../../../__types__/EBreakpoints';

export const Div = styled(DivProto)`
  width: 400px;
  height: auto;
  padding: 10px; 
  background: #D0A97A;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: lightgrey;
  transition: .2s ease-in;
  border: 2px solid black;
  margin: 30px 50px;
  ::before, ::after {
    z-index: -1;
    box-shadow: 0 0 10px black;
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transition: .2s ease-in;
  }
  ::before {
    transform: rotate(10deg);
  }
  ::after {
    transform: rotate(-10deg);
  }
  &:hover {
    ::before {
      transform: rotate(13deg);
    }
    ::after {
      transform: rotate(-13deg);
    }
  }
  @media (max-width: ${EBreakpoints.TABLET}) {
    width: 300px;
  } 
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    width: 250px;
  }
`;

export const Img = styled(ImgProto)`
  width: 90%;
  height: auto;
`;

export const H2 = styled(H2Proto)`

`;