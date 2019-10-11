import React, { useState, useEffect } from 'react';
import { getCoinList } from '../../services/cryptoApi';
import { refreshData } from '../../services/localStorage';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import LangSwitch from '../SwitchLanguage';
import TogglePanel from '../TogglePanel';
import Header from '../Header';
import CoinItemHeader from '../CoinItemHeader';
import CoinItem from '../CoinItem';
import ScrollTopButton from '../ScrollTopButton';
import Input from '../input/Input';
import SearchButton from '../input/SearchButton';

const MainContanier = () => {
  const [coins, setCoins] = useState();
  const [showInput, setShowInput] = useState(false);

  const handleScrollFetch = async page => {
    const results = await getCoinList(page).then(({ Data }) => Data);
    coins && setCoins([...coins, ...results]);
    setIsFetching(false);
  };

  const handleInitialFetch = async () => {
    getCoinList(0).then(({ Data }) => {
      setCoins(Data);
    });
  };

  const [page, isFetching, setIsFetching] = useInfiniteScroll(
    handleScrollFetch
  );

  useEffect(() => {
    !coins && handleInitialFetch();
    refreshData();
  }, []);

  return (
    <section>
      <ScrollTopButton />
      <LangSwitch />
      <TogglePanel />
      <Header />

      {showInput ? (
        <Input setShowInput={setShowInput} />
      ) : (
        <SearchButton setShowInput={setShowInput} />
      )}

      {coins && coins.length > 2 && (
        <div style={{ position: 'relative' }}>
          <CoinItemHeader
            coins={coins}
            setCoins={setCoins}
            handleInitialFetch={handleInitialFetch}
          />
          {coins.map((coin, index) => (
            <CoinItem coin={coin} key={coin.CoinInfo.Id} index={index} />
          ))}
        </div>
      )}
      {isFetching && <p>loading data...</p>}
    </section>
  );
};

export default MainContanier;
