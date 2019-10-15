import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CoinItemHeaderPanel from '../CoinItemHeaderPanel';
import { LanguageProvider } from '../../context/LanguageContext';

describe('<CoinItemHeaderPanel/> ', () => {
  test('renders correctly', () => {
    const { container, getByText } = render(
      <LanguageProvider>
        <CoinItemHeaderPanel />
      </LanguageProvider>
    );
    expect(container).toBeTruthy();
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
  });
});
