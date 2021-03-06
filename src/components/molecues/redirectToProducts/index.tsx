import React, { FC, useContext, MouseEvent } from 'react';
import { ProductFilters } from '../../../contexts/productFilters';
import ERoutes from '../../../__types__/ERoutes';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import LinkProto from '../../atoms/link/link';
import IRedirectToProductsButton from '../../../__types__/IRedirectToProductsButton';

const Link = styled(LinkProto)<{ additionalstyle: FlattenSimpleInterpolation }>`
  text-decoration: none;
  color: black;
  width: auto;
  height: auto;
  position: static;
  ${({ additionalstyle }) => additionalstyle};
`;

const RedirectToProductsButton:FC<IRedirectToProductsButton> = ({ children, additionalstyle, category }) => {

  const { filter ,setFilters } = useContext(ProductFilters);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const { hash } = window.location;

    if (hash === `#${ERoutes.PRODUCTS}`) {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
    !(hash !== `#${ERoutes.PRODUCTS}` && filter === category) &&
       setFilters(state => state === category ? false : category);
  }

  return (
    <Link 
      to="/products" 
      onClick={ handleClick } 
      additionalstyle={ additionalstyle }
    >
      { children }
    </Link>
  )
}

export default RedirectToProductsButton;
