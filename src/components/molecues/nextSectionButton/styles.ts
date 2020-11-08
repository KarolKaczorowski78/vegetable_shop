import styled, { FlattenSimpleInterpolation } from 'styled-components';
import ButtonProto from '../../atoms/button/button';

export const Button = styled(ButtonProto)<{ additionalStyle: FlattenSimpleInterpolation | undefined }>`
  padding: 15px 40px;
  display: block;
  margin: 15px 0;
  border: none;
  box-shadow: 0 0 5px white;
  font-weight: bold;
  background: rgba(255,255,255, .2);
  ${({ additionalStyle }) => additionalStyle && additionalStyle};
`;