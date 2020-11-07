import React, { useState } from 'react';
import Navigation from './components/organisms/navigation';
import ECategories from './__types__/ECategories';
import IProductFilters from './__types__/IProductFilters';
import { ProductFilters } from './contexts/productFilters';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './theme/GlobalStyle';

export default function App() {

  const [currentCategory, setCurrentCategory] = useState<ECategories | false>(false);

  const providerValue: IProductFilters = {
    filter: currentCategory,
    setFilters: setCurrentCategory,
  }

  return (
    <>
      <GlobalStyle />
      <Router basename={ __dirname }>
        <ProductFilters.Provider value={ providerValue }>
          <Navigation />
          <Switch>
            {
              Routes.map(route => 
                <Route { ...route } />
              )
            }
          </Switch>
        </ProductFilters.Provider>
      </Router>
    </>
  )
}
