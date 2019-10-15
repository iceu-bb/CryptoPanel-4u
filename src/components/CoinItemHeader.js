import React, { useState } from 'react';
import { HeaderItemElement } from '../styles/CoinItemStyles';

const CoinItemHeader = ({
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
    <HeaderItemElement
      data-testid='coin-item-header'
      active={active}
      on={on}
      onClick={() => handleClick()}
    >
      {children}
    </HeaderItemElement>
  );
};

export default CoinItemHeader;
