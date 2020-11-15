import styled from 'styled-components';
import ButtonProto from '../../atoms/button/button';

export const Button = styled(ButtonProto)`
  background: none;
  color: lime;
  font-size: 16px;
  border: none;
  transition: .3s;
  &:hover {
    transform: rotate(180deg);
  }
`;