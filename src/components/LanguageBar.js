import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { Wrapper, Bar, Panel } from '../styles/LanguageBarStyles';
import SwitchLanguage from './SwitchLanguage';

const LanguageBar = () => {
  const [open, setOpen] = useState(false);
  const LanguageBarRef = useRef(null);

  useOnClickOutside(
    LanguageBarRef,
    () => {
      open && setOpen(false);
    },
    open
  );

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper ref={LanguageBarRef} open={open}>
      <Bar open={open} onClick={() => handleClick()} />
      <Panel open={open}>
        <SwitchLanguage setOpen={setOpen} />
      </Panel>
    </Wrapper>
  );
};

export default LanguageBar;
