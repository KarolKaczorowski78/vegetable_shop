import styled from 'styled-components';
import EBreakpoints from '../../../__types__/EBreakpoints';
import DivProto from '../../atoms/div/div';

export const Div = styled(DivProto)<{ isCorrect: boolean }>`
  position: relative;
  font-size: 13px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  padding: 3px;
  border-radius: 50%;
  color: white;
  background: ${({ isCorrect }) => isCorrect ? 'green' : 'red'};
  & > div {
    display: ${({ isCorrect }) => isCorrect ? 'none' : 'block'};
  }
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    font-size: 9px;
    width: 18px;
    height: 18px;
  }
`;

export const Message = styled(DivProto)`
  visibility: hidden;
  padding: 5px 7px;
  position: absolute;
  top: 0;
  width: 100px;
  left: calc(100% + 5px);
  text-align: center;
  background: red;
  color: white;
`;
