import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import {
  Image,
  CoinContainer,
  H2,
  StatisticsItem
} from '../styles/CoinDashboardStyles';

const CoinDashboard = ({ coin, name }) => {
  const {
    PRICE,
    HIGH24HOUR,
    LOW24HOUR,
    CHANGEPCT24HOUR,
    CHANGE24HOUR,
    IMAGEURL
  } = coin;

  const { coinDashboard } = useContext(LanguageContext).currentLangData;

  return (
    <div>
      <CoinContainer>
        <Image
          src={`https://www.cryptocompare.com${IMAGEURL}`}
          alt={`${name} image`}
        />
        {name}
      </CoinContainer>
      <H2>{name} Statistics</H2>
      <StatisticsItem>
        {coinDashboard.price}: {PRICE}
      </StatisticsItem>
      <StatisticsItem>
        {coinDashboard.highest24h}: {HIGH24HOUR}
      </StatisticsItem>
      <StatisticsItem>
        {coinDashboard.lowest24h}: {LOW24HOUR}
      </StatisticsItem>
      <StatisticsItem>
        {coinDashboard.change}: {CHANGE24HOUR}USD {CHANGEPCT24HOUR}%{' '}
      </StatisticsItem>
    </div>
  );
};

export default CoinDashboard;
