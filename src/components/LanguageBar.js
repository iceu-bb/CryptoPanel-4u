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
    <Wrapper data-testid='wrapper-test' ref={LanguageBarRef} open={open}>
      <Bar
        data-testid='button-bar-test'
        open={open}
        onClick={() => handleClick()}
      />
      <Panel open={open}>
        <SwitchLanguage open={open} setOpen={setOpen} />
      </Panel>
    </Wrapper>
  );
};

export default LanguageBar;
