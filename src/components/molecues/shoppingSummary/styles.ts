import styled from 'styled-components';
import LiProto from '../../atoms/li/li';
import UlProto from '../../atoms/ul/ul';
import DivProto from '../../atoms/div/div';

export const Div = styled(DivProto)`
  padding-top: 10px;
`;

export const Ul = styled(UlProto)`
  display: inline-block;
  height: 250px;
  width: 350px;
  overflow-y: auto;
`;

export const Li = styled(LiProto)`
  margin: 8px 0;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: .8rem;
`;

export const H4 = styled.h4`
  margin: 2px 0;
  padding: 0;
`;

export const H3 = styled.h3`
  margin: 8px 0;
  padding: 0;
`;