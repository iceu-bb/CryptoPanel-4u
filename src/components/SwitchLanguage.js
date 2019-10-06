import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const SwitchLangs = () => {
  const { switchLang } = useContext(LanguageContext);

  return (
    <div className='LangSwitch'>
      <button onClick={() => switchLang('en')}>English</button>
      <button onClick={() => switchLang('pl')}>Polish</button>
      <button onClick={() => switchLang('is')}>Icelandic</button>
    </div>
  );
};

export default SwitchLangs;
