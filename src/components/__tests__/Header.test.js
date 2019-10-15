import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import { LanguageProvider } from '../../context/LanguageContext';

test('<Header /> renders correctly', () => {
  const { getByTestId } = render(
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
  const header = getByTestId('header-test');
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent('List of Top Cryptocurrencies in the world');
});
