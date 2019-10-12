import React, { useState } from 'react';
import { HeaderItemElement } from '../styles/CoinItemStyles';

const HeaderItem = ({
  id,
  children,
  funcAsc,
  funcDesc,
  coins,
  setCoins,
  active,
  setActiveElem
}) => {
  const [on, toggle] = useState(false);

  const handleClick = () => {
    on ? funcAsc(coins, setCoins) : funcDesc(coins, setCoins);
    toggle(!on);
    setActiveElem(id);
  };

  return (
    <HeaderItemElement active={active} on={on} onClick={() => handleClick()}>
      {children}
    </HeaderItemElement>
  );
};

export default HeaderItem;
