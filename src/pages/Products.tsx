import React, { useContext, useEffect, useState } from 'react';
import Page from '../components/molecues/page';
import { ProductFilters } from '../contexts/productFilters';
import EBreakpoints from '../__types__/EBreakpoints';
import H1 from '../components/atoms/h1/h1';
import H2 from '../components/atoms/h2/h2';
import Div from '../components/atoms/div/div';
import Product from '../components/molecues/product';
import styled from 'styled-components';
import SearchInput from '../components/molecues/searchInput';
import ShoppingCart from '../components/organisms/shoppingCart';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import INewProduct from '../__types__/INewProduct';
import { constructUrl } from '../universal/constructUrl';

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
  padding-bottom: 50px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;


export default function Products() {
  
  const { filter, searchFilter } = useContext(ProductFilters);

  const [index, setIndex] = useState<number>(15);
  const [shouldIncreaseIndex, setShouldIncreaseIndex] = useState<boolean>(true);

  const [testProducts, setTestProducts] = useState<INewProduct[]>([]);
  const handleScrollToTheBottom = () => {
    shouldIncreaseIndex && setIndex(state => state + 10);
  }

  const ref = useBottomScrollListener<HTMLDivElement>(handleScrollToTheBottom);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchFilter, filter])

  useEffect(() => {
    (async () => {
      const url = constructUrl(process.env.REACT_APP_BASE_PRODUCTS_URL as string, [
                                          filter ? `Category_contains=${filter}` : '',
                                          searchFilter ? `Name_contains=${searchFilter}` : '',
                                          `_limit=${index}`, '_sort=Name:ASC'
                                        ])
      
      try {
        const data = await fetch(url)
        const products: INewProduct[] = await data.json();

        setTestProducts((previous) => {
          products.length === previous.length && setShouldIncreaseIndex(() => false);
  
          return products;
        })
      }
      catch(err) {
        console.log(err);
        setTestProducts(() => []);
      }

    })()
  }, [filter, searchFilter, index])

  return (
    <Page>
      <ShoppingCart />
      <Wrapper ref={ ref }>
        <H1>Produkty w naszym sklepie</H1>
        <H2>Bazarek Radzikowskiego</H2>
        <SearchInput />
        <ProductsContainer>
          { 
            testProducts.length > 0 ?
            testProducts.map((product, i) => <Product { ...product } key={ i } />)
            : <H2>Nie znaleziono żadnych produktów</H2>
          }
        </ProductsContainer>
      </Wrapper>
    </Page>
  )
}