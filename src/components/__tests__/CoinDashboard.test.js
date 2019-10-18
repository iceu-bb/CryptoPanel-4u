import React from 'react';
import { render } from '@testing-library/react';
import { LanguageProvider } from '../../context/LanguageContext';
import { fakeDataCoinStats } from '../../helpers/testBuildData';
import CoinDashboard from '../CoinDashboard';

const fakeName = 'Test';

describe('<CoinDashboard/>', () => {
  test('renders data correctly', () => {
    const { container, getByText, getByTestId } = render(
      <LanguageProvider>
        <CoinDashboard coin={fakeDataCoinStats} name={fakeName} />
      </LanguageProvider>
    );
    expect(container).toBeTruthy();
    expect(getByTestId('coin-info-container-img')).toHaveAttribute(
      'src',
      `https://www.cryptocompare.com${fakeDataCoinStats.IMAGEURL}?width=130&height=130`
    );
    expect(getByText(`${fakeName} Statistics`)).toBeTruthy();
    expect(getByText(`${fakeDataCoinStats.PRICE}`)).toBeTruthy();
    expect(getByText(`${fakeDataCoinStats.HIGH24HOUR}`)).toBeTruthy();
    expect(getByText(`${fakeDataCoinStats.LOW24HOUR}`)).toBeTruthy();
    expect(getByText(`(${fakeDataCoinStats.CHANGEPCT24HOUR}%)`)).toHaveStyle(
      'color: #349e8c'
    );
  });
  test('renders red color when percentage change is below 0', () => {
    const { container, getByText } = render(
      <LanguageProvider>
        <CoinDashboard
          coin={{ ...fakeDataCoinStats, CHANGEPCT24HOUR: -5 }}
          name={fakeName}
        />
      </LanguageProvider>
    );
    expect(container).toBeTruthy();
    expect(getByText(`(-${fakeDataCoinStats.CHANGEPCT24HOUR}%)`)).toHaveStyle(
      'color: #D94064'
    );
  });
});
