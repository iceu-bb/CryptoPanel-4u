import axios from 'axios';

const baseUrl = 'https://min-api.cryptocompare.com/data/';

export const getCoinList = async pageNumber => {
  const coinListUrl = `${baseUrl}top/totaltoptiervolfull?tsym=USD&page=${pageNumber}&limit=100&api_key=${process.env.API_KEY}`;

  const result = await axios.get(`${coinListUrl}`).then(({ data }) => data);
  return result;
};

export const getCoinData = async (coin = 'BTC', currency = 'USD') => {
  const coinDataUrl = `${baseUrl}pricemultifull?fsyms=${coin}&tsyms=${currency}&api_key=${process.env.API_KEY}`;

  const result = await axios.get(`${coinDataUrl}`).then(({ data }) => data);
  return result;
};

export const getHistoData = async (
  coin = 'BTC',
  aggregate = 30,
  period = 'day',
  limit = 100
) => {
  const histoDataUrl = `${baseUrl}v2/histo${period}?fsym=${coin}&tsym=USD&limit=${limit}&aggregate=${aggregate}&api_key=${process.env.API_KEY}`;

  const result = await axios.get(`${histoDataUrl}`).then(({ data }) => data);
  return result;
};
