import {
  getCoins,
  getTop100Coins,
  refreshData,
  set100TopCoins,
  setListOfAllCoins
} from '../localStorage';
import { getAllCoins, getCoinList } from '../cryptoApi';
import { coinListData, fakeAllCoinList } from '../../helpers/testBuildData';

jest.mock('../cryptoApi', () => ({
  getAllCoins: jest.fn(),
  getCoinList: jest.fn()
}));

let mockStorage = {};

beforeAll(() => {
  Storage.prototype.setItem = (key, val) =>
    Object.assign(mockStorage, { [key]: val });
  Storage.prototype.getItem = key => mockStorage[key];
});

describe('Functions from localStorage functionally', () => {
  beforeAll(() => {
    getAllCoins.mockImplementation(() => Promise.resolve(fakeAllCoinList));
    getCoinList.mockImplementation(() => Promise.resolve(coinListData));
  });
  beforeEach(() => {
    mockStorage = {};
  });

  test('`setListOfAllCoins` saves received data into localStorage', async () => {
    await setListOfAllCoins();
    expect(mockStorage.coins).toBe('["Bitcoin (BTC)","XRP (XRP)"]');
  });

  test('`getCoins` sets data correctly, then read data from localStorage and finally returned parsed data', async () => {
    const data = await getCoins();
    expect(data).toEqual(['Bitcoin (BTC)', 'XRP (XRP)']);
  });

  test('`setTop100` saves received data into localStorage', async () => {
    await set100TopCoins();
    expect(mockStorage.top100).toBe(
      '["Test Coin (Test)","Test Coin2 (Test2)","Test Coin3 (Test3)"]'
    );
  });

  test('`getTop100Coins` sets data correctly and then read data from localStorage and finally returned parsed data', async () => {
    const data = await getTop100Coins();
    expect(data).toEqual([
      'Test Coin (Test)',
      'Test Coin2 (Test2)',
      'Test Coin3 (Test3)'
    ]);
  });

  test('`refreshData` refreshing storage when `refresh` item does not exists', async () => {
    await refreshData();
    expect(mockStorage.coins).toBe('["Bitcoin (BTC)","XRP (XRP)"]');
    expect(mockStorage.top100).toBe(
      '["Test Coin (Test)","Test Coin2 (Test2)","Test Coin3 (Test3)"]'
    );
    expect(mockStorage.refreshData).toBeTruthy();
  });

  test('`refreshData` does not modify localStorage when all conditions are met ', async () => {
    mockStorage = {
      refreshData: Date.now() + 10000000,
      coins: ['Bitcoin (BTC)'],
      top100: ['Bitcoin (BTC)']
    };
    const refreshTime = mockStorage.refreshData;
    await refreshData();
    expect(refreshTime).toBe(mockStorage.refreshData);
  });
});

