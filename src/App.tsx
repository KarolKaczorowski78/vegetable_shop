import React from 'react';
import Navigation from './components/organisms/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './theme/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename={ __dirname }>
        <Navigation />
        <Switch>
          {
            Routes.map(route => 
              <Route { ...route } />
            )
          }
        </Switch>
      </Router>
    </>
  )
}

export default App;
