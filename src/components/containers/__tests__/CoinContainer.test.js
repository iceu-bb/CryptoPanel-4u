import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { LanguageProvider } from '../../../context/LanguageContext';
import { navigate } from '@reach/router';
import { getCoinData, getHistoData } from '../../../services/cryptoApi';
import { fakeCoinData, histoData } from '../../../helpers/testBuildData';
import CoinContainer from '../CoinContainer';

jest.mock('../../../services/cryptoApi', () => ({
  getCoinData: jest.fn(),
  getHistoData: jest.fn()
}));
jest.mock('@reach/router', () => ({
  navigate: jest.fn()
}));

describe('<CoinContainer/>', () => {
  beforeAll(() => {
    getCoinData.mockImplementation(() => Promise.resolve(fakeCoinData));
    getHistoData.mockImplementation(() => Promise.resolve(histoData));
  });

  test('renders correctly', async () => {
    const { getByText, queryByTestId } = render(
      <LanguageProvider>
        <CoinContainer name='ETH' />
      </LanguageProvider>
    );
    expect(queryByTestId('loader-test')).toBeInTheDocument();

    await waitForElement(() => [
      expect(getByText(fakeCoinData.DISPLAY.ETH.USD.PRICE)).toBeTruthy(),
      expect(getByText('1 Y')).toBeTruthy(),
      expect(document.querySelector('canvas')).toBeTruthy()
    ]);
    expect(queryByTestId('loader-test')).not.toBeInTheDocument();
  });

  test('press escape return to Home Route', async () => {
    const { container, getByText, queryByTestId } = render(
      <LanguageProvider>
        <CoinContainer name='ETH' />
      </LanguageProvider>
    );
    await waitForElement(() => [expect(getByText('1 Y')).toBeTruthy()]);
    fireEvent.keyDown(container, {
      key: 'Escape',
      keyCode: 27
    });

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/');
  });
});
