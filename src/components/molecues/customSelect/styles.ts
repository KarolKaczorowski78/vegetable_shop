import styled from 'styled-components';
import DivProto from '../../atoms/div/div';

export const Container = styled(DivProto)`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Marker = styled(DivProto)`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  display: inline-block;
  background: rgba(0,0,0, .4);
  color: lime;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;