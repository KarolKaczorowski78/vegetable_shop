import styled from 'styled-components';
import ButtonProto from '../../atoms/button/button';
import DivProto from '../../atoms/div/div';
import EBreakPoints from '../../../__types__/EBreakpoints';

export const Form = styled.form`
  max-width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 30px 20px;
  flex-wrap: wrap;
`;

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

export const Button = styled(ButtonProto)`
  background: none;
  padding: 10px 14px;
  font-size: .9rem;
  margin-top: 25px;
  border: none;
  box-shadow: 0 0 8px black;
`;

export const Div = styled(DivProto)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 30px 20px;
  flex-direction: column;
`;