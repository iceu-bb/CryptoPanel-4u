import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { LanguageButton, ButtonContainer } from '../styles/SettingsPanelStyles';

const SwitchLangs = ({ setOpen }) => {
  const { switchLang } = useContext(LanguageContext);

  const handleClick = lang => {
    switchLang(lang);
    setOpen(false);
  };

  return (
    <ButtonContainer>
      <LanguageButton onClick={() => handleClick('en')}>English</LanguageButton>
      <LanguageButton onClick={() => handleClick('pl')}>Polish</LanguageButton>
      <LanguageButton onClick={() => handleClick('is')}>
        Icelandic
      </LanguageButton>
    </ButtonContainer>
  );
};

export default SwitchLangs;
