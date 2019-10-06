import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

const defaultMode = localStorage.getItem('mode') || 'dark';

export const ThemeToggleContext = createContext({
  toggle: () => {}
});

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: defaultMode
  });

  const themeToggle = () => {
    const mode = themeState.mode === 'light' ? `dark` : `light`;
    setThemeState({ mode });
    localStorage.setItem('mode', mode);
  };

  return (
    <ThemeToggleContext.Provider value={{ themeToggle, themeState }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
