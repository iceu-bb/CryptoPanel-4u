import React, { useState, useEffect } from 'react';
import { getCoinList } from '../../services/cryptoApi';

import LangSwitch from '../SwitchLanguage';
import TogglePanel from '../TogglePanel';
import Header from '../Header';
import CoinItem from '../CoinItem';

const MainContanier = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoinList(0).then(({ Data }) => setCoins(Data));
  }, []);

  return (
    <section>
      <LangSwitch />
      <TogglePanel />
      <Header />

      {coins &&
        coins.map((coin, index) => (
          <CoinItem coin={coin} key={coin.CoinInfo.Id} index={index} />
        ))}
    </section>
  );
};

export default MainContanier;
