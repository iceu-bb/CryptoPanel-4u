import React from 'react';
import { Link } from '@reach/router';
import {
  CoinItemContainer,
  Image,
  CoinName,
  CoinChange,
  MarketCap
} from '../styles/CoinItemStyles';

const CoinItem = ({ coin, index }) => {
  const { Name, FullName, ImageUrl } = coin.CoinInfo;
  const { MKTCAP } = coin.RAW.USD;
  const { PRICE, CHANGEPCT24HOUR } = coin.DISPLAY.USD;
  return (
    <CoinItemContainer>
      <span>{index + 1}</span>
      <CoinName>
        <Image
          src={`https://www.cryptocompare.com${ImageUrl}`}
          alt={`${FullName} image`}
        />
        {<Link to={`/coin/${Name}`}>{FullName}</Link>}
      </CoinName>
      <span>{PRICE}</span>
      <MarketCap>$ {MKTCAP.toFixed(0)}</MarketCap>
      <CoinChange green={CHANGEPCT24HOUR >= 0 ? true : false}>
        {CHANGEPCT24HOUR} %
      </CoinChange>
    </CoinItemContainer>
  );
};

export default CoinItem;
