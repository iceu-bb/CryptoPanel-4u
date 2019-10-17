export const fakeCoin = {
  CoinInfo: {
    Name: 'Test',
    FullName: 'Test Coin',
    ImageUrl: 'imgPath'
  },
  RAW: {
    USD: {
      MKTCAP: 999999
    }
  },
  DISPLAY: {
    USD: {
      PRICE: '$ 500',
      CHANGEPCT24HOUR: 10
    }
  }
};

export const fakeCoinData = {
  DISPLAY: {
    ETH: {
      USD: {
        PRICE: '$ 200.50',
        HIGH24HOUR: '$ 220.35',
        LOW24HOUR: '$ 180.23',
        CHANGEPCT24HOUR: 3,
        IMAGEURL: 'imgPath'
      }
    }
  }
};

export const fakeDataCoinStats = {
  PRICE: '$ 300',
  HIGH24HOUR: '$ 310',
  LOW24HOUR: '$ 290',
  CHANGEPCT24HOUR: 5,
  IMAGEURL: 'imgPath'
};

export const histoData = {
  Data: [
    {
      time: 1570726800,
      close: 8542.38
    },
    {
      time: 1570730400,
      close: 8557.19
    },
    {
      time: 11570734000,
      close: 8597.29
    }
  ]
};

export const coinListData = {
  Data: [
    {
      CoinInfo: {
        Id: 1,
        Name: 'Test',
        FullName: 'Test Coin',
        ImageUrl: 'imgPath'
      },
      RAW: {
        USD: {
          MKTCAP: 999999
        }
      },
      DISPLAY: {
        USD: {
          PRICE: '$ 500',
          CHANGEPCT24HOUR: 10
        }
      }
    },
    {
      CoinInfo: {
        Id: 2,
        Name: 'Test2',
        FullName: 'Test Coin2',
        ImageUrl: 'imgPath2'
      },
      RAW: {
        USD: {
          MKTCAP: 55555
        }
      },
      DISPLAY: {
        USD: {
          PRICE: '$ 100',
          CHANGEPCT24HOUR: 5
        }
      }
    },
    {
      CoinInfo: {
        Id: 3,
        Name: 'Test3',
        FullName: 'Test Coin3',
        ImageUrl: 'imgPath3'
      },
      RAW: {
        USD: {
          MKTCAP: 111111
        }
      },
      DISPLAY: {
        USD: {
          PRICE: '$ 5100',
          CHANGEPCT24HOUR: -1
        }
      }
    }
  ]
};

export const fakeAllCoinList = {
  Data: {
    BTC: {
      Id: '4431',
      ImageUrl: '/media/34477770/btc.png',
      FullName: 'Bitcoin (BTC)'
    },
    XRP: {
      Id: '5031',
      ImageUrl: '/media/34477776/xrp.png',
      FullName: 'XRP (XRP)'
    }
  }
};
