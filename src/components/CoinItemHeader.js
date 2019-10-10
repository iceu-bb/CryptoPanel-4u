import React from 'react';
import { HeaderItemContainer, MarketCap } from '../styles/CoinItemStyles';
import {
  sortCoinsByNameAsc,
  sortCoinsByNameDesc,
  sortCoinsByPriceAsc,
  sortCoinsByPriceDesc,
  sortCoinsByMarketCapAsc,
  sortCoinsByMarketCapDesc,
  sortCoinsByChangeAsc,
  sortCoinsByChangeDesc
} from '../helpers/sortingFunctions';
import HeaderItem from './HeaderItem';

const CoinItem = ({ coins, setCoins, handleFetch }) => {
  return (
    <HeaderItemContainer>
      <div>
        <HeaderItem funcAsc={handleFetch} funcDesc={handleFetch}>
          #
        </HeaderItem>
      </div>
      <div>
        <HeaderItem
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByNameAsc}
          funcDesc={sortCoinsByNameDesc}
        >
          Name
        </HeaderItem>
      </div>
      <div>
        <HeaderItem
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByPriceAsc}
          funcDesc={sortCoinsByPriceDesc}
        >
          Price
        </HeaderItem>
      </div>
      <MarketCap>
        <HeaderItem
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByMarketCapAsc}
          funcDesc={sortCoinsByMarketCapDesc}
        >
          Market Cap
        </HeaderItem>
      </MarketCap>
      <div>
        <HeaderItem
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByChangeAsc}
          funcDesc={sortCoinsByChangeDesc}
        >
          <MarketCap>Change </MarketCap>24h
        </HeaderItem>
      </div>
    </HeaderItemContainer>
  );
};

export default CoinItem;
