import React, { useState, useEffect } from 'react';
import { getCoinList } from '../../services/cryptoApi';
import { refreshData } from '../../services/localStorage';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import SettingsPanel from '../SettingsPanel';
import Header from '../Header';
import CoinItemHeader from '../CoinItemHeader';
import CoinItem from '../CoinItem';
import ScrollTopButton from '../ScrollTopButton';
import Loader from '../Loader';

const MainContanier = () => {
  const [coins, setCoins] = useState();

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
      <SettingsPanel />
      <Header />

      {coins && coins.length > 2 ? (
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
      ) : (
        <Loader />
      )}
      {isFetching && <Loader />}
    </section>
  );
};

export default MainContanier;
