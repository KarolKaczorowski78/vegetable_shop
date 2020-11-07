import React from 'react';
import H1 from '../components/atoms/h1/h1';
import { Products as Data } from '../data/products';
import Product from '../components/molecues/product';
import styled from 'styled-components';
import Div from '../components/atoms/div/div';

const ProductsContainer = styled(Div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Products() {
  

  return (
    <>
    <H1>Products</H1>
    <ProductsContainer>
    {
      Data.map(product => <Product { ...product } />)
    }
    </ProductsContainer>
    </>
  )
}
