import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
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

const CoinItem = ({ coins, setCoins, handleInitialFetch }) => {
  const { listHeader } = useContext(LanguageContext).currentLangData;
  return (
    <HeaderItemContainer>
      <div>
        <HeaderItem funcAsc={handleInitialFetch} funcDesc={handleInitialFetch}>
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
          {listHeader.name}
        </HeaderItem>
      </div>
      <div>
        <HeaderItem
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByPriceAsc}
          funcDesc={sortCoinsByPriceDesc}
        >
          {listHeader.price}
        </HeaderItem>
      </div>
      <MarketCap>
        <HeaderItem
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByMarketCapAsc}
          funcDesc={sortCoinsByMarketCapDesc}
        >
          {listHeader.marketCap}
        </HeaderItem>
      </MarketCap>
      <div>
        <HeaderItem
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByChangeAsc}
          funcDesc={sortCoinsByChangeDesc}
        >
          <MarketCap>{listHeader.change} </MarketCap>24h
        </HeaderItem>
      </div>
    </HeaderItemContainer>
  );
};

export default CoinItem;
