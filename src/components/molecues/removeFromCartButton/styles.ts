import styled from 'styled-components';
import ButtonProto from '../../atoms/button/button';

export const Button = styled(ButtonProto)`
  width: 25px;
  height: 25px;
  background: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
  border: 1px solid white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;