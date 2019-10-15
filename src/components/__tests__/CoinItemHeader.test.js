import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import CoinItemHeader from '../CoinItemHeader';

afterEach(() => cleanup());

const mockFuncAsc = jest.fn();
const mockFuncDesc = jest.fn();
const mockSetActiveElem = jest.fn();

describe('<CoinItemHeader/> ', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<CoinItemHeader />);
    expect(getByTestId('coin-item-header')).toBeTruthy();
  });

  test('first-click call descending sort function, second-click call ascending sort function, ', () => {
    const { getByTestId } = render(
      <CoinItemHeader
        id='test'
        funcAsc={mockFuncAsc}
        funcDesc={mockFuncDesc}
        setActiveElem={mockSetActiveElem}
      >
        Name
      </CoinItemHeader>
    );
    const clickableItem = getByTestId('coin-item-header');
    fireEvent.click(clickableItem);
    expect(mockFuncAsc).toHaveBeenCalledTimes(0);
    expect(mockFuncDesc).toHaveBeenCalledTimes(1);
    expect(mockSetActiveElem).toHaveBeenCalledTimes(1);
    expect(mockSetActiveElem).toHaveBeenCalledWith('test');
    fireEvent.click(clickableItem);
    expect(mockFuncAsc).toHaveBeenCalledTimes(1);
    expect(mockFuncDesc).toHaveBeenCalledTimes(1);
    expect(mockSetActiveElem).toHaveBeenCalledTimes(2);
  });
});
