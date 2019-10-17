import React from 'react';
import {
  CoinItemContainer,
  Image,
  StyledLink,
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
          data-testid='coin-item-img'
          src={`https://www.cryptocompare.com${ImageUrl}?width=20&height=20`}
          alt={`${FullName} image`}
        />
        <StyledLink
          tabIndex={0}
          data-testid='coin-item-link'
          to={`/coin/${Name}`}
        >
          {FullName}
        </StyledLink>
      </CoinName>
      <span>{PRICE}</span>
      <MarketCap>$ {MKTCAP.toFixed(0)}</MarketCap>
      <CoinChange
        data-testid='coin-item-change'
        green={CHANGEPCT24HOUR >= 0 ? true : false}
      >
        {CHANGEPCT24HOUR} %
      </CoinChange>
    </CoinItemContainer>
  );
};

export default CoinItem;
