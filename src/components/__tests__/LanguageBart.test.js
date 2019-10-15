import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageBar from '../LanguageBar';

describe('<LanguageBar/>', () => {
  test('render correctly', () => {
    const { getByTestId, getByText } = render(<LanguageBar />);
    expect(getByText('Polish')).toBeTruthy();
    expect(getByTestId('button-bar-test')).toBeTruthy();
  });
  test('first bar-button click opens panel and the second click closes panel', () => {
    const { getByTestId } = render(<LanguageBar />);
    expect(getByTestId('wrapper-test')).toHaveStyle(
      'transform: translate3d(220px,0,0)'
    );
    fireEvent.click(getByTestId('button-bar-test'));
    expect(getByTestId('wrapper-test')).toHaveStyle(
      'transform: translate3d(0,0,0)'
    );
  });
});
