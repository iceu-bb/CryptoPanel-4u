import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Header = () => {
  const { app } = useContext(LanguageContext).currentLangData;
  return (
    <div>
      <h1>{app.h1}</h1>
    </div>
  );
};

export default Header;
