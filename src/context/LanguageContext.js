import React, { useState, createContext } from 'react';

import langData from '../data/languageData';

export const LanguageContext = createContext({
  lang: '', // for currently used language
  currentLangData: '', // lang data (names, titles)
  switchLang: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(window.localStorage.getItem('lang') || 'en');

  const switchLang = language => {
    setLang(language);
    window.localStorage.setItem('lang', language);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: langData[lang]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
