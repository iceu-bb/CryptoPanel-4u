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
