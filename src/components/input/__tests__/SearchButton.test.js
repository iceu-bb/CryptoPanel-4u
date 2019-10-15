import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchButton from '../SearchButton';

const mockSetShowInput = jest.fn();

test('<SearchButton/> redners and call `setShowInput` when clicked', () => {
  const { debug, container } = render(
    <SearchButton setShowInput={mockSetShowInput} />
  );
  expect(container).toBeInTheDocument();
  const clickableIcon = document.querySelector('span[role="button"]');
  fireEvent.click(clickableIcon);
  expect(mockSetShowInput).toHaveBeenCalledTimes(1);
  expect(mockSetShowInput).toHaveBeenCalledWith(true);
});
