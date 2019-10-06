import React from 'react';
import GlobalStyle from './GlobalStyle';
import LangSwitch from './components/SwitchLanguage';
import TogglePanel from './components/TogglePanel';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <LangSwitch />
      <TogglePanel />
      <Header />
    </div>
  );
};

export default App;
