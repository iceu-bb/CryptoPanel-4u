import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TogglePanel from '../TogglePanel';
import { ThemeToggleContext } from '../../context/ThemeContext';

beforeEach(cleanup);
const mockThemeToggle = jest.fn();

describe('<TogglePanel/>', () => {
  test('renders correctly when themeState is Dark', () => {
    render(
      <ThemeToggleContext.Provider
        value={{ themeToggle: mockThemeToggle, themeState: 'dark' }}
      >
        <TogglePanel />
      </ThemeToggleContext.Provider>
    );
    const toggleElement = document.querySelector('.react-toggle');
    expect(toggleElement).toBeInTheDocument();
  });
  test('renders correctly when themeState is Light', () => {
    render(
      <ThemeToggleContext.Provider
        value={{ themeToggle: mockThemeToggle, themeState: 'light' }}
      >
        <TogglePanel />
      </ThemeToggleContext.Provider>
    );
    const toggleElement = document.querySelector('.react-toggle');
    expect(toggleElement).toBeInTheDocument();
  });
  test('switch theme when toggled', () => {
    render(
      <ThemeToggleContext.Provider
        value={{ themeToggle: mockThemeToggle, themeState: 'light' }}
      >
        <TogglePanel />
      </ThemeToggleContext.Provider>
    );
    const toggleElement = document.querySelector('.react-toggle');
    fireEvent.click(toggleElement);
    expect(mockThemeToggle).toHaveBeenCalledTimes(1);
    fireEvent.click(toggleElement);
    expect(mockThemeToggle).toHaveBeenCalledTimes(2);
  });
});
