import React, { useState } from 'react';
import { getHistoData } from '../services/cryptoApi';
import { ButtonsContainer, Button } from '../styles/ZoomButtonsStyles';

const ZoomButtons = ({ setHistoData, name }) => {
  const [activeBtn, setActiveBtn] = useState('zoom-btn-1');

  const handleClick = async (e, aggregate, period = 'day', limit = 100) => {
    setActiveBtn(e.target.id);
    await getHistoData(name, aggregate, period, limit).then(
      ({ Data: { Data } }) => setHistoData(Data)
    );
  };

  return (
    <ButtonsContainer>
      <Button
        id='zoom-btn-1'
        active={activeBtn === 'zoom-btn-1'}
        onClick={e => handleClick(e, 30)}
      >
        All
      </Button>
      <Button
        id='zoom-btn-2'
        active={activeBtn === 'zoom-btn-2'}
        onClick={e => handleClick(e, 4)}
      >
        1 Y
      </Button>
      <Button
        id='zoom-btn-3'
        active={activeBtn === 'zoom-btn-3'}
        onClick={e => handleClick(e, 2)}
      >
        6 M
      </Button>
      <Button
        id='zoom-btn-4'
        active={activeBtn === 'zoom-btn-4'}
        onClick={e => handleClick(e, 1)}
      >
        3 M
      </Button>
      <Button
        id='zoom-btn-5'
        active={activeBtn === 'zoom-btn-5'}
        onClick={e => handleClick(e, 7, 'hour')}
      >
        1 M
      </Button>
      <Button
        id='zoom-btn-6'
        active={activeBtn === 'zoom-btn-6'}
        onClick={e => handleClick(e, 2, 'hour')}
      >
        7 D
      </Button>
      <Button
        id='zoom-btn-7'
        active={activeBtn === 'zoom-btn-7'}
        onClick={e => handleClick(e, 1, 'hour', 24)}
      >
        24 H
      </Button>
    </ButtonsContainer>
  );
};

export default ZoomButtons;
