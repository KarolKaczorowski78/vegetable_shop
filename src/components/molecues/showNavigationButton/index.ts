import styled from 'styled-components';
import ButtonProto from '../../atoms/button/button';
import EBreakpoints from '../../../__types__/EBreakpoints';
// left: -54px;
export const Button = styled(ButtonProto)<{ visible: boolean }>`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: calc(100% + 4px);
  transition: background .3s;
  background: ${({ visible }) => visible ? 'rgba(0, 0, 0, .6)' : '#D0A97A'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  & > span {
    display: block;
    position: relative;
    width: 40px;
    height: 4px;
    transition: .3s;
    background: ${({ visible }) => visible ? 'transparent' : 'black' };  
    ::before, ::after {
      background: ${({ visible }) => visible ? 'white' : 'black' }; 
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      left: 0;
      transition: .3s;
    }
    ::before {
      bottom: ${({ visible }) => visible ? '0' : '7px'};
      transform: ${({ visible }) => visible ? 'rotate(45deg)' : 'none'};
    }
    ::after {
      top: ${({ visible }) => visible ? '0' : '7px'};
      transform: ${({ visible }) => visible ? 'rotate(-45deg)' : 'none'};
    }
  }
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    width: 40px;
    height: 40px;
    & > span {
      width: 32px;
    }
  }
`;