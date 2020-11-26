import styled from 'styled-components';
import DivProto from '../../atoms/div/div';

export const Div = styled(DivProto)`
  width: 100%;
  height: 100%;
  background: rgba(70, 70, 70, .7);
  background: linear-gradient(30deg, #c59459, #fffdd0);
  background: rgb(30,270,50);
  background: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3.5rem;
`;