import { TCryptoValue, TDefaultValue } from "./types/types";

export const formatBalance = (rawBalance: string) => {
    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
    return balance;
  };
  
  export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex);
    return chainIdNum;
  };
  
  export const formatAddress = (addr: string) => {
    return `${addr.substring(0, 8)}...`;
  };

  // Hardcode: криптовалюты и их курсы по отношению к обычной валюте и криптовалюте
  export const cryptoValue:TCryptoValue = {
    0: {
      name: 'BTC',
      rateTo: {
        USDT: 63860.95,
        ETH: 20.42,
        USD: 63900.90,
        EUR: 59245.81,
        RUB: 5846084.53,
      }
    },
    1: {
      name: 'USDT',
      rateTo: {
        BTC: 0.000016,
        ETH: 0.00032,
        USD: 1,
        EUR: 0.93,
        RUB: 91.63,
      }
    },
    2: {
      name: 'ETH',
      rateTo: {
        USDT: 3124.59,
        BTC: 0.049,
        USD: 3130.77,
        EUR: 2906.45,
        RUB: 286794.19,
      }
    }
  }

  // Hardcode: валюты и их курсы по отношению к криптовалюте
  export const defaultValue:TDefaultValue = {
    0: {
      name: 'USD',
      rateTo: {
        USDT: 1,
        BTC: 0.000016,
        ETH: 0.00032,
      }
    },
    1: {
      name: 'EUR',
      rateTo: {
        USDT: 1.08,
        BTC: 0.000017,
        ETH: 0.00034,
      }
    },
    2: {
      name: 'RUB',
      rateTo: {
        USDT: 0.011,
        BTC: 0.00000017,
        ETH: 0.0000035,
      }
    }
  }
 
  // const defaultValu = ['USD', 'EUR', 'RUB']
  // const cryptoValu = ['BTC', 'USDT', 'ETH']

  // //Функция определяющая валюту
  // export const chooseValuData = (mode: string, side: string) => {
  //   if (mode === "buy" && side === "right") {
  //     return defaultValue;
  //   } else {
  //     return cryptoValue;
  //   }
  // };

//Проверка индекса
export const getIndex = (index:number)=> {
  if(index === 0) {
    return 0
  } else if( index === 1) {
    return 1
  } else {
    return 2
  }
}

//Функция выбирает нужный список валют и в нем требуемый элемент
  export const chooseValueData = (mode: string, side: string, index: number) => {
    if (mode === "buy" && side === "right") {
      return defaultValue[getIndex(index)];
    } else {
      return cryptoValue[getIndex(index)];
    }
  };