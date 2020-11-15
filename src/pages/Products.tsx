import React, { useContext } from 'react';
import Page from '../components/molecues/page';
import { ProductFilters } from '../contexts/productFilters';
import EBreakpoints from '../__types__/EBreakpoints';
import H1 from '../components/atoms/h1/h1';
import H2 from '../components/atoms/h2/h2';
import Div from '../components/atoms/div/div';
import { Products as Data } from '../data/products';
import Product from '../components/molecues/product';
import styled from 'styled-components';
import SearchInput from '../components/molecues/searchInput';
import { toSearchFormat } from '../universal/stringToSearchFormat';

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
  
  const { filter, searchFilter } = useContext(ProductFilters);
  console.log(Data.length);
  return (
    <Page>
      <Wrapper>
        <H1>Produkty w naszym sklepie</H1>
        <H2>Bazarek Radzikowskiego</H2>
        <SearchInput />
        <ProductsContainer>
        {
          Data.map((product, i) =>  
            ((!filter || filter === product.category) && 
            toSearchFormat(product.name).includes(toSearchFormat(searchFilter))) &&
              <Product { ...product } key={ i } />)
        }
        </ProductsContainer>
      </Wrapper>
    </Page>
  )
}
