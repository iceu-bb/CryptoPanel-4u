import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './GlobalStyle';
import MainContainer from './components/containers/MainContainer';
import CoinContanier from './components/containers/CoinContainer';
import ErrorBoundary from './components/ErrorBoundary.js';
import NotFound from './components/NotFound.js';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <ErrorBoundary>
          <Router>
            <MainContainer path='/' />
            <CoinContanier path='/coin/:name' />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </main>
    </>
  );
};

export default App;
