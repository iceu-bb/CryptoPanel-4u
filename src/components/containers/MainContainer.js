import React, { useState, useEffect } from 'react';
import { getCoinList } from '../../services/cryptoApi';
import { refreshData } from '../../services/localStorage';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import SettingsPanel from '../SettingsPanel';
import Header from '../Header';
import CoinItemHeaderPanel from '../CoinItemHeaderPanel';
import CoinItem from '../CoinItem';
import ScrollTopButton from '../ScrollTopButton';
import LanguageBar from '../LanguageBar';
import Loader from '../Loader';

const MainContanier = () => {
  const [coins, setCoins] = useState();

  const handleScrollFetch = async page => {
    const results = await getCoinList(page).then(({ Data }) => Data);
    coins && setCoins([...coins, ...results]);
    setIsFetching(false);
  };

  const [page, isFetching, setIsFetching] = useInfiniteScroll(
    handleScrollFetch
  );

  const handleInitialFetch = async () => {
    getCoinList(0).then(({ Data }) => {
      setCoins(Data);
    });
  };

  useEffect(() => {
    !coins && handleInitialFetch();
    refreshData();
  }, []);

  return (
    <section>
      <ScrollTopButton />
      <SettingsPanel />
      <LanguageBar />
      <Header />

      {coins && coins.length > 2 ? (
        <div style={{ position: 'relative' }}>
          <CoinItemHeaderPanel
            coins={coins}
            setCoins={setCoins}
            handleInitialFetch={handleInitialFetch}
          />
          {coins.map((coin, index) => (
            <CoinItem coin={coin} key={coin.CoinInfo.Id} index={index} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      {isFetching && <Loader />}
    </section>
  );
};

export default MainContanier;
