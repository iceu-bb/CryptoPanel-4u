import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { LanguageProvider } from '../../../context/LanguageContext';
import { MyThemeProvider } from '../../../context/ThemeContext';
import { refreshData } from '../../../services/localStorage';
import { getCoinList } from '../../../services/cryptoApi';
import { coinListData } from '../../../helpers/testBuildData';
import MainContainer from '../MainContainer';

jest.mock('../../../services/localStorage', () => ({
  refreshData: jest.fn()
}));

jest.mock('../../../services/cryptoApi', () => ({
  getCoinList: jest.fn()
}));

describe('<MainContainer/>', () => {
  beforeAll(() => {
    getCoinList.mockImplementation(() => Promise.resolve(coinListData));
  });
  test('renders correctly', async () => {
    const { queryByTestId, getByText } = render(
      <LanguageProvider>
        <MyThemeProvider>
          <MainContainer />
        </MyThemeProvider>
      </LanguageProvider>
    );
    expect(queryByTestId('header-test')).toBeInTheDocument();
    expect(queryByTestId('loader-test')).toBeInTheDocument();

    await waitForElement(() => [
      expect(
        getByText(coinListData.Data[1].CoinInfo.FullName)
      ).toBeInTheDocument(),
      expect(
        getByText(coinListData.Data[2].DISPLAY.USD.PRICE)
      ).toBeInTheDocument()
    ]);
    expect(queryByTestId('header-test')).toBeInTheDocument();
    expect(queryByTestId('loader-test')).not.toBeInTheDocument();
  });
});
