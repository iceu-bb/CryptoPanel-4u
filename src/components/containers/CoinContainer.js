import React, { useState, useEffect } from 'react';
import { getCoinData, getHistoData } from '../../services/cryptoApi';
import CoinDashboard from '../CoinDashboard';
import ChartsPanel from '../ChartsPanel';
import ZoomButtons from '../ZoomButtons';
import Loader from '../Loader';

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
      {coinData && histoData ? (
        <>
          <CoinDashboard coin={coinData.DISPLAY[name][currency]} name={name} />
          <ZoomButtons setHistoData={setHistoData} name={name} />
          <ChartsPanel data={histoData} name={name} />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default CoinContainer;
