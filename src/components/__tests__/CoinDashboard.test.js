import React from 'react';
import { render } from '@testing-library/react';
import { LanguageProvider } from '../../context/LanguageContext';
import { fakeDataCoinStats } from '../../helpers/testBuildData';
import CoinDashboard from '../CoinDashboard';

const fakeName = 'Test';

// test style green-red

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
  });
});
