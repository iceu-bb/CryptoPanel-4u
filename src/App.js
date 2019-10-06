import React, { useContext } from 'react';

import { LanguageContext } from './context/LanguageContext';
import { ThemeToggleContext } from './context/ThemeContext';

import GlobalStyle from './GlobalStyle';
import LangSwitch from './components/SwitchLanguage';

const App = () => {
  const {
    currentLangData: { app }
  } = useContext(LanguageContext);

  const themeToggle = useContext(ThemeToggleContext);

  return (
    <div>
      <GlobalStyle />
      <LangSwitch />
      <button onClick={() => themeToggle.toggle()}> Switch Theme</button>
      <h1>{app.h1}</h1>
    </div>
  );
};

export default App;
