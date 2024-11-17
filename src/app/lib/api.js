import axios from "axios";

// A mapping of currency pairs to Binance API symbols
const symbolMap = {
  "BTC-USD": "BTCUSDT",
  "ETH-USD": "ETHUSDT",
  "XRP-USD": "XRPUSDT",
  "BNB-USD": "BNBUSDT",
  "SOL-USD": "SOLUSDT",
  "DOGE-USD": "DOGEUSDT",
  "LTC-USD": "LTCUSDT",
};

// Fetches the order book data from the Binance API for a given currency pair
export const fetchOrderbook = async (currencyPair) => {
  
  // Get the corresponding symbol from the symbolMap
  const symbol = symbolMap[currencyPair];
  
  // Make a GET request to the Binance API to fetch order book data
  const response = await axios.get('https://api.binance.com/api/v3/depth', {
    params: {
      symbol: symbol,
      limit: 10, // Limit the number of order book levels to 10
    },
  });
  return response.data;
};

// Fetches the OHLC (Open, High, Low, Close) data from the Binance API for a given currency pair
export const fetchOhlcData = async (currencyPair) => {
  const symbol = symbolMap[currencyPair];
  
  // Make a GET request to the Binance API to fetch OHLC data (candlestick data)
  const response = await axios.get('https://api.binance.com/api/v3/klines', {
    params: {
      symbol: symbol,
      interval: '1m', // 1-minute interval for OHLC data
      limit: 100, // Fetch the last 100 data points
    }, 
  });

  // Map the raw response data 
  const ohlcData = response.data.map(item => ({
    t: new Date(item[0]), // Convert timestamp to a Date object
    o: parseFloat(item[1]), // Open price
    h: parseFloat(item[2]), // High price
    l: parseFloat(item[3]), // Low price
    c: parseFloat(item[4]), // Close price
  }));

  return ohlcData;
};
