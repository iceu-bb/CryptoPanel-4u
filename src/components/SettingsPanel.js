import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  Title,
  LanguageButton
} from '../styles/SettingsPanelStyles';

import LangSwitch from './SwitchLanguage';
import TogglePanel from './TogglePanel';
import Input from './input/Input';
import SearchButton from './input/SearchButton';

const SettingsPanel = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <Wrapper>
      <Title>Crypto Panel 4u</Title>
      <Container>
        <TogglePanel />
        <LangSwitch />

        {showInput ? (
          <Input setShowInput={setShowInput} />
        ) : (
          <SearchButton setShowInput={setShowInput} />
        )}
      </Container>
    </Wrapper>
  );
};

export default SettingsPanel;
