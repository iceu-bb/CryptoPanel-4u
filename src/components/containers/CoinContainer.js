import React, { useState, useEffect } from 'react';
import { getCoinData, getHistoData } from '../../services/cryptoApi';
import CoinDashboard from '../CoinDashboard';
import ChartsPanel from '../ChartsPanel';
import ZoomButtons from '../ZoomButtons';

const CoinContainer = ({ name }) => {
  const [coinData, setCoinData] = useState();
  const [histoData, setHistoData] = useState();
  const currency = 'USD';

  useEffect(() => {
    getCoinData(name, currency).then(data => setCoinData(data));
    getHistoData(name).then(({ Data: { Data } }) => setHistoData(Data));
  }, []);

  return (
    <section>
      {coinData && (
        <CoinDashboard coin={coinData.DISPLAY[name][currency]} name={name} />
      )}
      <ZoomButtons setHistoData={setHistoData} name={name} />
      {histoData && <ChartsPanel data={histoData} name={name} />}
    </section>
  );
};

export default CoinContainer;
