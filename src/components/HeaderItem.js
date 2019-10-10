import React, { useState } from 'react';
import { HeaderItemElement } from '../styles/CoinItemStyles';

const HeaderItem = ({ children, funcAsc, funcDesc, coins, setCoins }) => {
  const [on, toggle] = useState(false);

  const handleClick = () => {
    on ? funcAsc(coins, setCoins) : funcDesc(coins, setCoins);
    toggle(!on);
  };

  return (
    <HeaderItemElement onClick={() => handleClick()}>
      {children}
    </HeaderItemElement>
  );
};

export default HeaderItem;
