import React from 'react';
import {
  CoinItemContainer,
  Image,
  CoinName,
  CoinChange
} from '../styles/CoinItemStyles';

const CoinItem = ({ coin, index }) => {
  const { FullName, ImageUrl } = coin.CoinInfo;
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
        {FullName}
      </CoinName>
      <span>{PRICE}</span>
      <span>$ {MKTCAP.toFixed(0)}</span>
      <CoinChange green={CHANGEPCT24HOUR >= 0 ? true : false}>
        {CHANGEPCT24HOUR} %
      </CoinChange>
    </CoinItemContainer>
  );
};

export default CoinItem;
