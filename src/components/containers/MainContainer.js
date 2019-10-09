import React, { useState, useEffect } from 'react';
import { getCoinList } from '../../services/cryptoApi';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import LangSwitch from '../SwitchLanguage';
import TogglePanel from '../TogglePanel';
import Header from '../Header';
import CoinItem from '../CoinItem';
import ScrollTopButton from '../ScrollTopButton';

const MainContanier = () => {
  const [coins, setCoins] = useState();

  const handleFetch = async page => {
    const results = await getCoinList(page).then(({ Data }) => Data);
    coins && setCoins([...coins, ...results]);
    setIsFetching(false);
  };

  const [page, isFetching, setIsFetching] = useInfiniteScroll(handleFetch);

  useEffect(() => {
    !coins && getCoinList(0).then(({ Data }) => setCoins(Data));
  }, []);

  return (
    <section>
      <ScrollTopButton />
      <LangSwitch />
      <TogglePanel />
      <Header />

      {coins &&
        coins.length > 2 &&
        coins.map((coin, index) => (
          <CoinItem coin={coin} key={coin.CoinInfo.Id} index={index} />
        ))}
      {isFetching && <p>loading data...</p>}
    </section>
  );
};

export default MainContanier;
