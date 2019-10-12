import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { LanguageButton, ButtonContainer } from '../styles/SettingsPanelStyles';

const SwitchLangs = () => {
  const { switchLang } = useContext(LanguageContext);

  return (
    <ButtonContainer>
      <LanguageButton onClick={() => switchLang('en')}>English</LanguageButton>
      <LanguageButton onClick={() => switchLang('pl')}>Polish</LanguageButton>
      <LanguageButton onClick={() => switchLang('is')}>
        Icelandic
      </LanguageButton>
    </ButtonContainer>
  );
};

export default SwitchLangs;
