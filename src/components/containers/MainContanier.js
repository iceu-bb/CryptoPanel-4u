import React, { useState, useEffect } from 'react';
import { getCoinList } from '../../services/cryptoApi';

import LangSwitch from '../SwitchLanguage';
import TogglePanel from '../TogglePanel';
import Header from '../Header';

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
      {coins.map(el => (
        <h3>{el.CoinInfo.FullName}</h3>
      ))}
    </section>
  );
};

export default MainContanier;
