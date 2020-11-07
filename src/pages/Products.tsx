import React, { useContext } from 'react';
import { ProductFilters } from '../contexts/productFilters';
import EBreakpoints from '../__types__/EBreakpoints';
import H1 from '../components/atoms/h1/h1';
import H2 from '../components/atoms/h2/h2';
import Div from '../components/atoms/div/div';
import { Products as Data } from '../data/products';
import Product from '../components/molecues/product';
import styled from 'styled-components';

const Wrapper = styled(Div)`
  text-align: center;
  width: 100%;
  position: relative;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    padding-top: 60px;
  }
`;

const ProductsContainer = styled(Div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Products() {
  
  const { filter } = useContext(ProductFilters);

  return (
    <Wrapper>
      <H1>Produkty w naszym sklepie</H1>
      <H2>Bazarek Radzikowskiego</H2>
      <ProductsContainer>
      {
        Data.map((product, i) =>  
          (!filter || filter === product.category) &&
            <Product { ...product } key={ i } />)
      }
      </ProductsContainer>
    </Wrapper>
  )
}
