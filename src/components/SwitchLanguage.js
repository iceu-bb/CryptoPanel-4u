import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { LanguageButton, ButtonContainer } from '../styles/SettingsPanelStyles';

const SwitchLangs = ({ open, setOpen }) => {
  const { switchLang } = useContext(LanguageContext);

  const handleClick = lang => {
    switchLang(lang);
    setOpen(false);
  };

  return (
    <ButtonContainer>
      <LanguageButton
        tabIndex={open ? 0 : -1}
        onClick={() => handleClick('en')}
      >
        English
      </LanguageButton>
      <LanguageButton
        tabIndex={open ? 0 : -1}
        onClick={() => handleClick('pl')}
      >
        Polish
      </LanguageButton>
      <LanguageButton
        tabIndex={open ? 0 : -1}
        onClick={() => handleClick('is')}
      >
        Icelandic
      </LanguageButton>
    </ButtonContainer>
  );
};

export default SwitchLangs;
