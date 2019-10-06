import React, { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';

import LangSwitch from './components/SwitchLanguage';

const App = () => {
  const {
    currentLangData: { app }
  } = useContext(LanguageContext);

  return (
    <div>
      <LangSwitch />
      <h1>{app.h1}</h1>
    </div>
  );
};

export default App;
