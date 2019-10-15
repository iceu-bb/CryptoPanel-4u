import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MyThemeProvider } from '../../context/ThemeContext';
import SettingsPanel from '../SettingsPanel';

beforeAll(() => {
  Object.defineProperty(window.location, 'reload', {
    configurable: true
  });
  window.location.reload = jest.fn();
});

describe('<SettingsPanel/>', () => {
  test('redners correctly when  prop `showInput` by default is false', () => {
    render(
      <MyThemeProvider>
        <SettingsPanel />
      </MyThemeProvider>
    );
    const input = document.querySelector('input[placeholder="Search a coin"]');
    expect(input).not.toBeInTheDocument();
    const searchButton = document.querySelector('span[role="button"]');
    expect(searchButton).toBeInTheDocument();
  });
  test('renders input when click on search button and change prop `showInput` to true', () => {
    render(
      <MyThemeProvider>
        <SettingsPanel />
      </MyThemeProvider>
    );
    const searchButton = document.querySelector('span[role="button"]');
    fireEvent.click(searchButton);
    const input = document.querySelector('input[placeholder="Search a coin"]');
    expect(input).toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
});
