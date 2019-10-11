import { getCoinList, getAllCoins } from './cryptoApi';

export const getCoins = async () => {
  const data = await JSON.parse(localStorage.getItem('coins'));
  return data;
};

export const getTop100Coins = async () => {
  const data = await JSON.parse(localStorage.getItem('top100'));
  return data;
};

// refresh Data in LocalStorage after 10 Days
// Data from LocalStorage is used during searching coins
export const refreshData = async () => {
  if (
    !localStorage.getItem('refreshData') ||
    Number(localStorage.getItem('refreshData')) < Date.now()
  ) {
    // 1) set Top100 coins
    const top100Array = [];
    await getCoinList(0).then(({ Data }) => {
      Object.entries(Data).forEach(([key, val]) => {
        const name = `${val.CoinInfo.FullName} (${val.CoinInfo.Name})`;
        top100Array.push(name);
      });
    });
    localStorage.setItem('top100', JSON.stringify(top100Array));

    // 2) set list of all coins (around 4200 coins)
    const array = [];
    await getAllCoins().then(({ Data }) => {
      Object.entries(Data).forEach(([key, val]) => {
        array.push(val.FullName);
      });
    });
    localStorage.setItem('coins', JSON.stringify(array));

    // 3) - set refresh time - 10 days
    const expirationDateMS = Date.now() + 10 * 86400000;
    localStorage.setItem('refreshData', expirationDateMS);
  }
};
