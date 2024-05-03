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

  export const cryptoValue = ['BTC', 'USDT', 'ETH']
  export const defaultValue = ['USD', 'EUR', 'RUB']

  //Функция определяющая валюту
  export const chooseValueData = (mode: string, side: string) => {
    if (mode === "buy" && side === "right") {
      return defaultValue;
    } else {
      return cryptoValue;
    }
  };