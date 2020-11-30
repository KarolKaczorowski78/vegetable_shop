import React, { useState, useEffect } from 'react';
import Navigation from './components/organisms/navigation';
import ECategories from './__types__/ECategories';
import IProductFilters from './__types__/IProductFilters';
import ICartProduct from './__types__/ICartProduct';
import { CartProducts } from './contexts/cartProducts';
import { ProductFilters } from './contexts/productFilters';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './theme/GlobalStyle';
import ICartProducts from './__types__/ICartProducts';
import Footer from './components/molecues/footer';

export default function App() {

  const defaultCartProductsValue = JSON.parse(localStorage.cartProducts) as ICartProduct[];

  const [currentCategory, setCurrentCategory] = useState<ECategories | false>(false);
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>(defaultCartProductsValue);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const providerValue: IProductFilters = {
    filter: currentCategory,
    setFilters: setCurrentCategory,
    searchFilter: searchFilter,
    setSearchFilter: setSearchFilter,
  }

  const providerValue2: ICartProducts = {
    products: cartProducts,
    setCartProducts: setCartProducts,
  }

  useEffect(() => {
    localStorage.setItem(
        'cartProducts', 
        JSON.stringify(cartProducts.map(product => product)));
  }, [cartProducts]);
  
  useEffect(() => { window.scrollTo(0, 0) }, [currentCategory]);

  return (
    <>
      <GlobalStyle />
      <Router basename={ __dirname }>
        <ProductFilters.Provider value={ providerValue }>
          <CartProducts.Provider value={ providerValue2 }>
            <Navigation />
            <Switch>
              {
                Routes.map((route, i) => 
                  <Route { ...route } key={ i } />
                )
              }
            </Switch>
            <Footer />
          </CartProducts.Provider>
        </ProductFilters.Provider>
      </Router>
    </>
  )
}