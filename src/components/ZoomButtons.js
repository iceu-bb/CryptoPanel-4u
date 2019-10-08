import React from 'react';
import { getHistoData } from '../services/cryptoApi';
import { ButtonsContainer, Button } from '../styles/ZoomButtonsStyles';

const ZoomButtons = ({ setHistoData, name }) => {
  const handleClick = async (aggregate, period = 'day', limit = 100) => {
    await getHistoData(name, aggregate, period, limit).then(
      ({ Data: { Data } }) => setHistoData(Data)
    );
  };

  return (
    <ButtonsContainer>
      <Button onClick={() => handleClick(30)}>All</Button>
      <Button onClick={() => handleClick(4)}>1 Y</Button>
      <Button onClick={() => handleClick(2)}>6 M</Button>
      <Button onClick={() => handleClick(1)}>3 M</Button>
      <Button onClick={() => handleClick(7, 'hour')}>1 M</Button>
      <Button onClick={() => handleClick(2, 'hour')}>7 D</Button>
      <Button onClick={() => handleClick(1, 'hour', 24)}>24 H</Button>
    </ButtonsContainer>
  );
};

export default ZoomButtons;
