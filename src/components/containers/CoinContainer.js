import React, { useState, useEffect } from 'react';
import { getCoinData } from '../../services/cryptoApi';
import CoinDashboard from '../CoinDashboard';

const CoinContainer = ({ name }) => {
  const [coinData, setCoinData] = useState();
  const currency = 'USD';

  useEffect(() => {
    getCoinData(name, currency).then(data => setCoinData(data));
  }, []);

  return (
    <div>
      {coinData && (
        <CoinDashboard coin={coinData.DISPLAY[name][currency]} name={name} />
      )}
    </div>
  );
};

export default CoinContainer;
