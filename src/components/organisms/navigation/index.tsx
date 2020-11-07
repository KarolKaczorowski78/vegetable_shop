import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav, NavRelative, BackgroundImage, NonProductsNavigationButton } from './styles';
import NavigationButton from '../../molecues/navigationButton';
import ECategories from '../../../__types__/ECategories';
import NavigationImg from '../../../img/navigationImg.jpg';
import { Button as ShowNavigationButton }  from '../../molecues/showNavigationButton';

export default function Navigation() {

  const [visible, setVisible] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => { setVisible(() => false) }, [location.pathname])

  return (
    <Nav visible={ visible }>
      <NavRelative>
        <ShowNavigationButton 
          visible={ visible } 
          onClick={ () => { setVisible(state => !state) } }
        >
          <span></span>
        </ShowNavigationButton>
        <NonProductsNavigationButton to="/">Strona główna</NonProductsNavigationButton>
        {
          Object.values(ECategories).map(category =>
            <NavigationButton category={ category } />)
        }
        <BackgroundImage src={ NavigationImg } alt="" />
        <NonProductsNavigationButton to="/gallery">Galeria</NonProductsNavigationButton>
      </NavRelative>
    </Nav>
  )
}
