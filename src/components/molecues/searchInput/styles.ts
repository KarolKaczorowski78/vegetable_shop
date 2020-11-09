import styled from 'styled-components';
import InputProto from '../../atoms/input/input';
import EBreakpoints from '../../../__types__/EBreakpoints';

export const Input = styled(InputProto)`
  width: 400px;
  height: 50px;
  background: none;
  box-shadow: 0 0 8px black;
  font-size: 1rem;
  font-family: 'Berkshire Swash', cursive;
  padding: 2px 6px;
  border: none;
  @media (max-width: ${EBreakpoints.TABLET}) {
    width: 280px;
  }
`;