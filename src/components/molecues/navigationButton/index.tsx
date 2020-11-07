import React, { FC } from 'react';
import INavigationButton from '../../../__types__/INavigationButton';
import RedirectToProducts from '../redirectToProducts';
import { ButtonStyle } from './styles';

const NavigationButton:FC<INavigationButton> = ({ category }) => {
  return (
    <RedirectToProducts category={ category } additionalStyle={ ButtonStyle }>
      { category }
    </RedirectToProducts>
  )
}

export default NavigationButton;