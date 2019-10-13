import React, { useContext } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeToggleContext } from '../context/ThemeContext';

const TogglePanel = () => {
  const {
    themeToggle,
    themeState: { mode }
  } = useContext(ThemeToggleContext);

  console.log(mode);
  return (
    <Toggle
      defaultChecked={mode === 'dark' ? true : false}
      icons={{
        checked: <FaSun />,
        unchecked: <FaMoon />
      }}
      onChange={themeToggle}
    />
  );
};

export default TogglePanel;
