import styled from 'styled-components';
import DivProto from '../../atoms/div/div';
import ButtonProto from '../../atoms/button/button';
import EBreakpoints from '../../../__types__/EBreakpoints';
import LinkProto from '../../atoms/link/link';

export const Div = styled(DivProto)`
  width: 800px;
  height: 600px;
  position: fixed;
  top: 30px;
  right: 50%;
  margin-right: -400px;
  z-index: 2;
  background: rgba(0, 0, 0, .8);
  color: white;
  border-radius: 5%;
  text-align: center;
  padding: 0 10px 10px;
  transform: translateY(15px);
  visible: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${EBreakpoints.LAPTOP}) {
    width: 355px;
    margin-right: -177.5px;
  }
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    width: 300px;
    margin-right: -150px;
  }
`;

export const ProductsContainer = styled(DivProto)`
  width: 100%;
  flex: 1;
  border-bottom: 1px solid white;
  overflow-y: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const ToggleVisibilityButton = styled(ButtonProto)<{ text: number }>`
  position: fixed;
  top: 70px;
  border: 2px solid black;
  background: #D0A97A;
  right: 4px;
  width: 50px;
  height: 50px;
  z-index: 3;
  font-size: 25px;
  & > div {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    ::before {
      position: absolute;
      content: '${({ text }) => text}';
      padding: 2px 8px;
      left: -10px;
      bottom: -10px;
      background: white;
      border-radius: 50%;
      text-align: center;
      font-size: .6rem;
    }
  }
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {

  }
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    top: 5px;
    right: 60px;
    width: 40px;
    height: 40px;
  }
`;

export const Link = styled(LinkProto)`
  color: white;
  background: rgba(0, 0, 0, .8);
  border: 2px solid white;
  text-decoration: none;
  padding: 6px 12px;
`;