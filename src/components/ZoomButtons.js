import React from 'react';
import { getHistoData } from '../services/cryptoApi';

const ZoomButtons = ({ setHistoData, name }) => {
  const handleClick = async (aggregate, period = 'day', limit = 100) => {
    await getHistoData(name, aggregate, period, limit).then(
      ({ Data: { Data } }) => setHistoData(Data)
    );
  };

  return (
    <div>
      <button onClick={() => handleClick(30)}>All</button>
      <button onClick={() => handleClick(4)}>1 year</button>
      <button onClick={() => handleClick(2)}>6 months</button>
      <button onClick={() => handleClick(1)}>3 months</button>
      <button onClick={() => handleClick(7, 'hour')}>1 months</button>
      <button onClick={() => handleClick(2, 'hour')}>7 days</button>
      <button onClick={() => handleClick(1, 'hour', 24)}>24 hours</button>
    </div>
  );
};

export default ZoomButtons;
