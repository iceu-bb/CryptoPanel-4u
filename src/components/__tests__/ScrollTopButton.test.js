import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { useScrollTop } from '../../hooks/useScrollTop';
import ScrollTopButton from '../ScrollTopButton';

afterEach(() => cleanup());

global.scrollTo = jest.fn();
jest.mock('../../hooks/useScrollTop');

describe('<ScrollTopButton />', () => {
  describe('show property is true', () => {
    beforeEach(() => {
      useScrollTop.mockReturnValueOnce({ show: true });
    });
    test('renders correctly', () => {
      const { getByTestId } = render(<ScrollTopButton />);
      expect(getByTestId('scroll-top-button')).toBeTruthy();
    });
    test('when button clicked, scroll to position(0,0)', () => {
      const { getByTestId } = render(<ScrollTopButton />);
      fireEvent.click(getByTestId('scroll-top-button'));
      expect(window.scrollTo).toHaveBeenCalledTimes(1);
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
  });

  describe('show property is false', () => {
    beforeEach(() => {
      useScrollTop.mockReturnValueOnce({ show: false });
    });
    test('renders correctly', () => {
      const { getByTestId } = render(<ScrollTopButton />);
      expect(getByTestId('scroll-top-button')).toBeTruthy();
    });
    test('button has opacity 0', () => {
      const { getByTestId } = render(<ScrollTopButton />);
      expect(getByTestId('scroll-top-button')).not.toBeVisible();
    });
  });
});
