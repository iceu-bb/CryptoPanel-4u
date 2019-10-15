import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  LanguageContext,
  LanguageProvider
} from '../../context/LanguageContext';
import SwitchLanguage from '../SwitchLanguage';

const mockSwitchLang = jest.fn();
const mockSetOpen = jest.fn();

describe('<SwitchLanguage/>', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <LanguageProvider>
        <SwitchLanguage />
      </LanguageProvider>
    );
    expect(getByText('Polish')).toBeTruthy();
  });
  test('click on language name changes language and close panel', () => {
    const { getByText } = render(
      <LanguageContext.Provider
        value={{ lang: 'en', switchLang: mockSwitchLang }}
      >
        <SwitchLanguage setOpen={mockSetOpen} />
      </LanguageContext.Provider>
    );
    fireEvent.click(getByText('Polish'));
    expect(mockSwitchLang).toHaveBeenCalledTimes(1);
    expect(mockSwitchLang).toHaveBeenCalledWith('pl');
    expect(mockSetOpen).toHaveBeenCalledTimes(1);
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
