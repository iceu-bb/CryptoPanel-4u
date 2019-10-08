import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './GlobalStyle';
import MainContanier from './components/containers/MainContainer';
import CoinContanier from './components/containers/CoinContainer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Router>
          <MainContanier path='/' />
          <CoinContanier path='/coin/:name' />
        </Router>
      </main>
    </>
  );
};

export default App;
