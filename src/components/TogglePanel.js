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

  return (
    <Toggle
      defaultChecked={Boolean(mode)}
      icons={{
        checked: <FaSun />,
        unchecked: <FaMoon />
      }}
      onChange={themeToggle}
    />
  );
};

export default TogglePanel;
