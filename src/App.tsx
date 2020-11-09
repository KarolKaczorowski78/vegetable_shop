import React, { useState, useEffect } from 'react';
import Navigation from './components/organisms/navigation';
import ECategories from './__types__/ECategories';
import IProductFilters from './__types__/IProductFilters';
import { ProductFilters } from './contexts/productFilters';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './theme/GlobalStyle';

export default function App() {

  const [currentCategory, setCurrentCategory] = useState<ECategories | false>(false);

  const providerValue: IProductFilters = {
    filter: currentCategory,
    setFilters: setCurrentCategory,
  }

  useEffect(() => { window.scrollTo(0, 0) }, [currentCategory]);

  return (
    <>
      <GlobalStyle />
      <Router basename={ __dirname }>
        <ProductFilters.Provider value={ providerValue }>
          <Navigation />
          <Switch>
            {
              Routes.map((route, i) => 
                <Route { ...route } key={ i } />
              )
            }
          </Switch>
        </ProductFilters.Provider>
      </Router>
    </>
  )
}
