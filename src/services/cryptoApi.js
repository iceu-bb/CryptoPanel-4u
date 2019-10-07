import axios from 'axios';

const baseUrl = 'https://min-api.cryptocompare.com/data/';

export const getCoinList = async pageNumber => {
  const coinListUrl = `${baseUrl}top/totaltoptiervolfull?tsym=USD&page=${pageNumber}&limit=20&api_key=${process.env.API_KEY}`;

  const result = await axios.get(`${coinListUrl}`).then(({ data }) => data);
  return result;
};
