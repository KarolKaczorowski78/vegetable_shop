import React, { FC } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import LinkProto from '../../atoms/link/link';
import IRedirectToProductsButton from '../../../__types__/IRedirectToProductsButton';

const Link = styled(LinkProto)<{ additionalStyle: FlattenSimpleInterpolation }>`
  text-decoration: none;
  color: black;
  width: auto;
  height: auto;
  position: static;
  ${({ additionalStyle }) => additionalStyle};
`;

const RedirectToProductsButton:FC<IRedirectToProductsButton> = ({ children, additionalStyle }) => {

  const handleClick = () => {
    // handle switchng filter
  }

  return (
    <Link 
      to="/products" 
      onClick={ handleClick } 
      additionalStyle={ additionalStyle }
    >
      { children }
    </Link>
  )
}

export default RedirectToProductsButton;
