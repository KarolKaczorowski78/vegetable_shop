import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyle } from '../../molecues/navigationButton/styles';
import BackgroundImageProto from '../../molecues/BackgroundImage';
import EBreakpoints from '../../../__types__/EBreakpoints';

export const Nav = styled.nav<{ visible: boolean }>`
  top: 15px;
  width: 300px;
  height: 400px;
  height: 0;
  position: fixed;
  right: -300px;
  z-index: 4;
  transition: .3s ease-out;
  ${({ visible }) => visible && `transform: translateX(-300px)`};
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    width: 250px;
    right: -250px;
    ${({ visible }) => visible && `transform: translateX(-250px)`};
  }
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    top: 5px;
  }
`;

export const NavRelative = styled.div`
  position: relative;
  width: 300px;
  height: 420px;
  width: 100%;
  max-height: 100vh;
  padding: 8px 10px;
  background: rgba(0, 0, 0, .5);
`;

export const NavButtonsContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const BackgroundImage = styled(BackgroundImageProto)`
  display: block!important;
`;

export const NonProductsNavigationButton = styled(Link)`
  ${ButtonStyle};
`;