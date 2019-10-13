import { getCoinList, getAllCoins } from './cryptoApi';

export const getCoins = async () => {
  (await !localStorage.getItem('top100')) && (await set100TopCoins());
  const data = await JSON.parse(localStorage.getItem('coins'));
  return data;
};

export const getTop100Coins = async () => {
  (await !localStorage.getItem('coins')) && (await setListOfAllCoins());
  const data = await JSON.parse(localStorage.getItem('top100'));
  return data;
};

const set100TopCoins = async () => {
  const top100Array = [];
  await getCoinList(0).then(({ Data }) => {
    Object.entries(Data).forEach(([key, val]) => {
      const name = `${val.CoinInfo.FullName} (${val.CoinInfo.Name})`;
      top100Array.push(name);
    });
  });
  localStorage.setItem('top100', JSON.stringify(top100Array));
};

const setListOfAllCoins = async () => {
  const array = [];
  await getAllCoins().then(({ Data }) => {
    Object.entries(Data).forEach(([key, val]) => {
      array.push(val.FullName);
    });
  });
  localStorage.setItem('coins', JSON.stringify(array));
};

// refresh Data in LocalStorage after 10 Days
// Data from LocalStorage is used during searching coins
export const refreshData = async () => {
  if (
    !localStorage.getItem('refreshData') ||
    !localStorage.getItem('top100') ||
    !localStorage.getItem('coins') ||
    Number(localStorage.getItem('refreshData')) < Date.now()
  ) {
    // 1) set Top100 coins
    await set100TopCoins();
    // 2) set list of all coins (around 4200 coins)
    await setListOfAllCoins();
    // 3) - set refresh time - 10 days
    const expirationDateMS = Date.now() + 10 * 86400000;
    localStorage.setItem('refreshData', expirationDateMS);
  }
};
