import axios from 'axios';
import {
  baseUrl,
  getCoinList,
  getCoinData,
  getHistoData,
  getAllCoins
} from '../cryptoApi';
import { navigate } from '@reach/router';
import {
  coinListData,
  fakeCoinData,
  histoData,
  fakeAllCoinList
} from '../../helpers/testBuildData';

jest.mock('axios');
jest.mock('@reach/router', () => ({
  navigate: jest.fn()
}));

describe('Crypto Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  //   getCoinList
  describe('getCoinList functionality', () => {
    test('requests and gets a coinList from the Crypto Api', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: coinListData })
      );

      const coinList = await getCoinList(0);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `${baseUrl}top/totaltoptiervolfull?tsym=USD&page=0&limit=50&api_key=${process.env.API_KEY}`
      );
      expect(coinList).toEqual(coinListData);
    });
  });
  // getCoinData
  describe('getCoinData functionality', () => {
    test('requests and gets a coin data from the Crypto Api', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: fakeCoinData })
      );

      const coinData = await getCoinData();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `${baseUrl}pricemultifull?fsyms=BTC&tsyms=USD&api_key=${process.env.API_KEY}`
      );
      expect(coinData).toEqual(fakeCoinData);
    });
    test('handle response Error', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({
          data: {
            Response: 'Error',
            message: 'There is no data for any of the toSymbol/s TESTERROR'
          }
        })
      );
      const coinData = await getCoinData();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `${baseUrl}pricemultifull?fsyms=BTC&tsyms=USD&api_key=${process.env.API_KEY}`
      );
      expect(navigate).toHaveBeenCalledTimes(1);
      expect(navigate).toHaveBeenCalledWith('/not-found');
      expect(coinData).toBe(undefined);
    });
  });

  //   getHistoData
  describe('getHistoData functionality', () => {
    test('requests and gets a histo data from the Crypto Api', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: histoData }));

      const data = await getHistoData();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `${baseUrl}v2/histoday?fsym=BTC&tsym=USD&limit=100&aggregate=30&api_key=${process.env.API_KEY}`
      );
      expect(data).toEqual(histoData.Data);
    });
    test('handle response Error', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({
          data: {
            Response: 'Error',
            message: 'There is no data for the symbol TESTERROR'
          }
        })
      );
      const data = await getHistoData();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        `${baseUrl}v2/histoday?fsym=BTC&tsym=USD&limit=100&aggregate=30&api_key=${process.env.API_KEY}`
      );
      expect(navigate).toHaveBeenCalledTimes(1);
      expect(navigate).toHaveBeenCalledWith('/not-found');
      expect(data).toBe(undefined);
    });
  });

  //getAllCoins
  describe('getCoinList functionality', () => {
    test('requests and gets a coinList from the Crypto Api', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: fakeAllCoinList })
      );
      const allCoinList = await getAllCoins();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${baseUrl}all/coinlist`);
      expect(allCoinList).toEqual(fakeAllCoinList);
    });
  });
});
