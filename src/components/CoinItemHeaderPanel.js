import React, { useState, useContext } from 'react';
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
import CoinItemHeader from './CoinItemHeader';

const CoinItemHeaderPanel = ({ coins, setCoins, handleInitialFetch }) => {
  const [activeElem, setActiveElem] = useState(null);
  const { listHeader } = useContext(LanguageContext).currentLangData;
  return (
    <HeaderItemContainer>
      <div>
        <CoinItemHeader
          id='header-list-item-0'
          funcAsc={handleInitialFetch}
          funcDesc={handleInitialFetch}
          setActiveElem={setActiveElem}
        >
          #
        </CoinItemHeader>
      </div>
      <div>
        <CoinItemHeader
          id='header-list-item-1'
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByNameAsc}
          funcDesc={sortCoinsByNameDesc}
          active={activeElem === 'header-list-item-1'}
          setActiveElem={setActiveElem}
        >
          {listHeader.name}
        </CoinItemHeader>
      </div>
      <div>
        <CoinItemHeader
          id='header-list-item-2'
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByPriceAsc}
          funcDesc={sortCoinsByPriceDesc}
          active={activeElem === 'header-list-item-2'}
          setActiveElem={setActiveElem}
        >
          {listHeader.price}
        </CoinItemHeader>
      </div>
      <MarketCap>
        <CoinItemHeader
          id='header-list-item-3'
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByMarketCapAsc}
          funcDesc={sortCoinsByMarketCapDesc}
          active={activeElem === 'header-list-item-3'}
          setActiveElem={setActiveElem}
        >
          {listHeader.marketCap}
        </CoinItemHeader>
      </MarketCap>
      <div>
        <CoinItemHeader
          id='header-list-item-4'
          coins={coins}
          setCoins={setCoins}
          funcAsc={sortCoinsByChangeAsc}
          funcDesc={sortCoinsByChangeDesc}
          active={activeElem === 'header-list-item-4'}
          setActiveElem={setActiveElem}
        >
          <MarketCap>{listHeader.change} </MarketCap>24h
        </CoinItemHeader>
      </div>
    </HeaderItemContainer>
  );
};

export default CoinItemHeaderPanel;
