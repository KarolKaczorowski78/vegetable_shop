import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyle } from '../../molecues/navigationButton/styles';
import BackgroundImageProto from '../../molecues/BackgroundImage';
import EBreakpoints from '../../../__types__/EBreakpoints';

export const Nav = styled.nav<{ visible: boolean }>`
  top: 15px;
  width: 300px;
  height: 400px;
  position: fixed;
  right: -300px;
  z-index: 2;
  transition: .3s ease-out;
  ${({ visible }) => visible && `transform: translateX(-300px)`};
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    width: 250px;
    right: -250px;
    ${({ visible }) => visible && `transform: translateX(-250px)`};
  }
`

export const NavRelative = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 5px 10px;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, .5);
`;

export const BackgroundImage = styled(BackgroundImageProto)`
  display: block!important;
`;

export const NonProductsNavigationButton = styled(Link)`
  ${ButtonStyle};
`;