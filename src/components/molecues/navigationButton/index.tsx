import React, { FC, useContext } from 'react';
import INavigationButton from '../../../__types__/INavigationButton';
import RedirectToProducts from '../redirectToProducts';
import { ProductFilters } from '../../../contexts/productFilters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ButtonStyle, Span } from './styles';

const NavigationButton:FC<INavigationButton> = ({ category }) => {

  const { filter } = useContext(ProductFilters);

  return (
    <RedirectToProducts category={ category } additionalstyle={ ButtonStyle }>
      <Span>
      { category }
      { filter === category && <FontAwesomeIcon icon={ faCheck } /> }
      </Span>
    </RedirectToProducts>
  )
}

export default NavigationButton;