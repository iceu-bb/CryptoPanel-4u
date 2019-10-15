import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { fakeCoin } from '../../helpers/testBuildData';
import CoinItem from '../CoinItem';

afterEach(() => {
  cleanup();
});

const fakeIndex = 5;

describe('<CoinItem/> ', () => {
  test('renders data properly', () => {
    const { getByTestId, getByText } = render(
      <CoinItem coin={fakeCoin} index={fakeIndex} />
    );
    expect(getByText(`${fakeIndex + 1}`)).toBeTruthy();
    expect(getByTestId('coin-item-img')).toHaveAttribute(
      'src',
      `https://www.cryptocompare.com${fakeCoin.CoinInfo.ImageUrl}?width=20&height=20`
    );
    expect(getByTestId('coin-item-link')).toHaveAttribute(
      'href',
      `/coin/${fakeCoin.CoinInfo.Name}`
    );
    expect(getByText(fakeCoin.DISPLAY.USD.PRICE)).toBeTruthy();
    expect(getByText(`$ ${fakeCoin.RAW.USD.MKTCAP}`)).toBeTruthy();
    expect(getByText(`${fakeCoin.DISPLAY.USD.CHANGEPCT24HOUR} %`)).toBeTruthy();
  });
  test('<CoinChange/> renders correct property `green` regarding to value > 0', () => {
    const { getByTestId } = render(
      <CoinItem
        coin={{ ...fakeCoin, DISPLAY: { USD: { CHANGEPCT24HOUR: 5 } } }}
        index={fakeIndex}
      />
    );
    expect(getByTestId('coin-item-change')).toHaveStyle('color: #349e8c');
  });
  test('<CoinChange/> renders correct property `green` regarding to value < 0', () => {
    const { getByTestId } = render(
      <CoinItem
        coin={{ ...fakeCoin, DISPLAY: { USD: { CHANGEPCT24HOUR: -5 } } }}
        index={fakeIndex}
      />
    );
    expect(getByTestId('coin-item-change')).toHaveStyle('color: #D94064');
  });
});
