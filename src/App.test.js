import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { MyThemeProvider } from './context/ThemeContext';

test('<App /> renders correctly', () => {
  const { getByText } = render(
    <MyThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </MyThemeProvider>
  );
  expect(getByText('List of Top Cryptocurrencies in the world')).toBeTruthy();
});
