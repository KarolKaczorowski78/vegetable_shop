import styled from 'styled-components';
import EBreakPoints from '../../../__types__/EBreakpoints';

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 6px 8px;
  border: 1px solid black;
  margin-top: 5px;
  background: ghostwhite;
  @media(max-width: ${EBreakPoints.MOBILE_SMALL}) {
    width: 250px;
  }
`;

export const Label = styled.label`
  margin-top: 12px;
`;