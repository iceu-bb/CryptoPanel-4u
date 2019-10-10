export const sortCoinsByNameAsc = (coins, setCoins) => {
  const sortedCoins = coins.sort((a, b) =>
    a.CoinInfo.FullName.toLowerCase() > b.CoinInfo.FullName.toLowerCase()
      ? 1
      : -1
  );
  setCoins([...sortedCoins]);
};

export const sortCoinsByNameDesc = (coins, setCoins) => {
  const sortedCoins = coins.sort((a, b) =>
    a.CoinInfo.FullName.toLowerCase() > b.CoinInfo.FullName.toLowerCase()
      ? -1
      : 1
  );
  setCoins([...sortedCoins]);
};

export const sortCoinsByPriceAsc = (coins, setCoins) => {
  const sortedCoins = coins.sort((a, b) =>
    a.RAW.USD.PRICE > b.RAW.USD.PRICE ? 1 : -1
  );
  setCoins([...sortedCoins]);
};

export const sortCoinsByPriceDesc = (coins, setCoins) => {
  const sortedCoins = coins.sort((a, b) =>
    a.RAW.USD.PRICE > b.RAW.USD.PRICE ? -1 : 1
  );
  setCoins([...sortedCoins]);
};

export const sortCoinsByMarketCapAsc = (coins, setCoins) => {
  const sortedCoins = coins.sort((a, b) =>
    a.RAW.USD.MKTCAP > b.RAW.USD.MKTCAP ? 1 : -1
  );
  setCoins([...sortedCoins]);
};

export const sortCoinsByMarketCapDesc = (coins, setCoins) => {
  const sortedCoins = coins.sort((a, b) =>
    a.RAW.USD.MKTCAP > b.RAW.USD.MKTCAP ? -1 : 1
  );
  setCoins([...sortedCoins]);
};

export const sortCoinsByChangeAsc = (coins, setCoins) => {
  const sortedCoins = coins.sort((a, b) =>
    a.RAW.USD.CHANGEPCT24HOUR > b.RAW.USD.CHANGEPCT24HOUR ? 1 : -1
  );
  setCoins([...sortedCoins]);
};

export const sortCoinsByChangeDesc = (coins, setCoins) => {
  const sortedCoins = coins.sort((a, b) =>
    a.RAW.USD.CHANGEPCT24HOUR > b.RAW.USD.CHANGEPCT24HOUR ? -1 : 1
  );
  setCoins([...sortedCoins]);
};
