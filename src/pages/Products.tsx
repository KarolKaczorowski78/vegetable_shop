import React, { useContext, useEffect, useState } from 'react';
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
import ShoppingCart from '../components/organisms/shoppingCart';
import { toSearchFormat } from '../universal/stringToSearchFormat';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import IProduct from '../__types__/IProduct';

const Wrapper = styled(Div)`
  text-align: center;
  width: 100%;
  position: relative;
  height: 100vh;
  overflow-y: auto;
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

  const productsFittingFilter = () => { 
    return Data.filter((product) =>  
      ((!filter || filter === product.category || product.category.includes(filter)) && 
          toSearchFormat(product.name).includes(toSearchFormat(searchFilter))));
  }
  
  const { filter, searchFilter } = useContext(ProductFilters);

  const [index, setIndex] = useState<number>(15);
  const [productsFittingCondition, setProductsFittingCondition] = useState<IProduct[]>(productsFittingFilter());
  
  const handleScrollToTheBottom = () => {
    index < productsFittingFilter().length && setIndex(state => state + 12);
  }

  const ref = useBottomScrollListener<HTMLDivElement>(handleScrollToTheBottom);

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
    setProductsFittingCondition(() => productsFittingFilter()) 
  }, [filter])

  return (
    <Page>
      <ShoppingCart />
      <Wrapper ref={ ref }>
        <H1>Produkty w naszym sklepie</H1>
        <H2>Bazarek Radzikowskiego</H2>
        <SearchInput />
        <ProductsContainer>
        {
          productsFittingCondition.map((product, i) => <Product { ...product } key={ i } />)
        }
        </ProductsContainer>
      </Wrapper>
    </Page>
  )
}
