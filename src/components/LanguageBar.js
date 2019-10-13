import React, { useState } from 'react';
import { Wrapper, Bar, Panel } from '../styles/LanguageBarStyles';
import SwitchLanguage from './SwitchLanguage';

const LanguageBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper open={open}>
      <Bar open={open} onClick={() => handleClick()} />
      <Panel open={open}>
        <SwitchLanguage setOpen={setOpen} />
      </Panel>
    </Wrapper>
  );
};

export default LanguageBar;
