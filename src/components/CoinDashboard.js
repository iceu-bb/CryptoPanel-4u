import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import {
  Image,
  CoinInfoContainer,
  H2,
  StatisticsItem,
  StatisticsContainer,
  Thin,
  Bold,
  Percentage
} from '../styles/CoinDashboardStyles';

const CoinDashboard = ({ coin, name }) => {
  const { PRICE, HIGH24HOUR, LOW24HOUR, CHANGEPCT24HOUR, IMAGEURL } = coin;

  const { coinDashboard } = useContext(LanguageContext).currentLangData;

  return (
    <div>
      <CoinInfoContainer>
        <div>
          <Image
            src={`https://www.cryptocompare.com${IMAGEURL}?width=130&height=130`}
            alt={`${name} image`}
          />
        </div>
        <StatisticsContainer>
          <H2>
            {name} {coinDashboard.statistics}
          </H2>
          <StatisticsItem>
            <Thin>{coinDashboard.price}:</Thin>
            <Bold>{PRICE}</Bold>
            <Percentage green={CHANGEPCT24HOUR >= 0 ? true : false}>
              ({CHANGEPCT24HOUR}%)
            </Percentage>
          </StatisticsItem>
          <StatisticsItem>
            <Thin>{coinDashboard.highest24h}:</Thin>
            <Bold>{HIGH24HOUR}</Bold>
          </StatisticsItem>
          <StatisticsItem>
            <Thin>{coinDashboard.lowest24h}: </Thin>
            <Bold>{LOW24HOUR}</Bold>
          </StatisticsItem>
        </StatisticsContainer>
      </CoinInfoContainer>
    </div>
  );
};

export default CoinDashboard;
