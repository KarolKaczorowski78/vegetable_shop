import styled from 'styled-components';
import ButtonProto from '../../atoms/button/button';

export const Form = styled.form`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 30px 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 6px 8px;
  border: 1px solid black;
  margin-top: 5px;
  background: ghostwhite;
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