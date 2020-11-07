import styled, { css } from 'styled-components';
import SpanProto from '../../atoms/span/span';

export const ButtonStyle = css`
  width: 95%;
  height: 50px;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

export const Span = styled(SpanProto)`
  position: relative;
  & > svg {
    position: absolute;
    left: calc(100% + 5px); 
  }
`;