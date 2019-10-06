import React, { useState, useLayoutEffect, createContext } from 'react';

import langData from '../data/languageData';

export const LanguageContext = createContext({
  lang: '', // for currently used language
  currentLangData: '', // lang data (names, titles)
  switchLang: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(
    window.localStorage.getItem('CryptoLang') || window.navigator.language // read-only user browser's language
  );

  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('CryptoLang');
    if (selectedLang) {
      setLang(selectedLang);
    }
  }, [lang]);

  const switchLang = language => {
    setLang(language);
    window.localStorage.setItem('CryptoLang', language);
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
