import React, { useState } from 'react';
import { Wrapper, Container, Title } from '../styles/SettingsPanelStyles';
import TogglePanel from './TogglePanel';
import Input from './input/Input';
import SearchButton from './input/SearchButton';

const SettingsPanel = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <Wrapper data-testid='test'>
      <Title src={'./logo.png'} alt='logo' />
      <Container>
        <TogglePanel />

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
