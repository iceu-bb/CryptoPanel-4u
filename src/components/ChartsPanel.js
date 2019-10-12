import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { LanguageContext } from '../context/LanguageContext';
import { Wrapper } from '../styles/ChartStyles';
import { chartOptions, chartData } from '../data/charts';

const ChartsPanel = ({ data, name }) => {
  /*----------- calculations -----------*/
  const selectedDataTime = data.filter(el => el.close > 0).map(el => el.time);
  const selectedDataPrice = data.filter(el => el.close > 0).map(el => el.close);

  const diff = data[data.length - 1].time - data[0].time;

  const {
    coinDashboard: { chartTitle }
  } = useContext(LanguageContext).currentLangData;

  return (
    <Wrapper>
      <Line
        options={chartOptions(name, diff, chartTitle)}
        data={chartData(selectedDataTime, selectedDataPrice)}
      />
    </Wrapper>
  );
};

export default ChartsPanel;
