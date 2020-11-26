import styled, { css } from 'styled-components';
import SpanProto from '../../atoms/span/span';

export const ButtonStyle = css`
  width: 95%;
  height: 40px;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  flex-grow: 1;
  min-height: 40px;
  margin: 5px 0;
`;

export const Span = styled(SpanProto)`
  position: relative;
  & > svg {
    position: absolute;
    left: calc(100% + 5px); 
  }
`;