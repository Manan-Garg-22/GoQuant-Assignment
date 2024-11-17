"use client";

import { useEffect, useState } from "react";
import { fetchOrderbook, fetchOhlcData } from "../lib/api";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import SpreadIndicator from "./SpreadIndicator";
import CandlestickChart from "./CandlestickChart";
import ImbalanceIndicator from "./ImbalanceIndicator";
import CurrencySelector from "./CurrencySelector";
import MarketDepthChart from "./MarketDepthChart";
import Navbar from "./Navbar";
ChartJS.register(...registerables);

export default function Orderbook() {
  const [selectedCurrency, setSelectedCurrency] = useState("BTC-USD"); // State for the currently selected currency
  const [orderbook, setOrderbook] = useState({ bids: [], asks: [] }); // State for orderbook data
  const [spread, setSpread] = useState(0); // State for the calculated spread
  const [imbalance, setImbalance] = useState(0); // State for the calculated imbalance
  const [ohlcData, setOhlcData] = useState([]); // State for OHLC (open-high-low-close) data

  const fetchData = async () => {
    const orderbookData = await fetchOrderbook(selectedCurrency);
    setOrderbook(orderbookData);

    // Calculate spread (difference between best ask and best bid)
    const spreadValue =
      orderbookData.bids[0] && orderbookData.asks[0]
        ? parseFloat(orderbookData.asks[0][0]) - parseFloat(orderbookData.bids[0][0])
        : 0;
    setSpread(spreadValue);
 
    // Calculate market imbalance (bid volume vs ask volume)
    const bidVolume = orderbookData.bids.reduce((sum, bid) => sum + parseFloat(bid[1]), 0);
    const askVolume = orderbookData.asks.reduce((sum, ask) => sum + parseFloat(ask[1]), 0);
    setImbalance(bidVolume / (bidVolume + askVolume));

    // Fetch OHLC data and map it to particular items
    const ohlc = await fetchOhlcData(selectedCurrency);
    setOhlcData(
      ohlc.map((item) => ({
        t: new Date(item.t), // Convert timestamp to Date object
        o: item.o, // Open Price
        h: item.h, // High Price
        l: item.l, // Low Price
        c: item.c, // Close Price
      }))
    );
    console.log('Processed OHLC Data:', ohlcData);  // Just for Debugging
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000); // Set up interval to fetch data every second
    return () => clearInterval(interval);
  }, [selectedCurrency]); // Re-run effect when selectedCurrency changes

  // Prepare market depth data for the chart
  const marketDepthData = {
    labels: orderbook.bids.map((bid) => bid[0]), // X-axis labels (bid prices)
    datasets: [
      {
        label: "Bids",
        data: orderbook.bids.map((bid) => bid[1]), // Bid quantities
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        fill: true,
      },
      {
        label: "Asks",
        data: orderbook.asks.map((ask) => ask[1]), // Ask quantities
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{selectedCurrency} Orderbook</h2>
      
      {/* Currency Selector */}
      <CurrencySelector
        selectedCurrency={selectedCurrency} // Pass current currency
        onCurrencyChange={setSelectedCurrency} // Handle currency changes
      />

      {/* Orderbook Bids and Asks */}
      <div id="orderbook" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{selectedCurrency} Bids</h3>
          <ul className="bg-green-100 p-2 rounded">
            {orderbook.bids.slice(0, 10).map((bid, index) => (
              <li key={index} className="mb-1">{`Price: $ ${bid[0]}, Quantity: ${bid[1]}`}</li>  // List out 10 Best Bids for particular currency
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{selectedCurrency} Asks</h3>
          <ul className="bg-red-100 p-2 rounded">
            {orderbook.asks.slice(0, 10).map((ask, index) => (
              <li key={index} className="mb-1">{`Price: $ ${ask[0]}, Quantity: ${ask[1]}`}</li>  // List out 10 Best Asks for particular currency
            ))}
          </ul>
        </div>
      </div>

      {/* Spread Value and Indicator */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Spread: {spread.toFixed(2)}</h3>
      </div>
      <div id="spread" className="mb-8">
        <SpreadIndicator orderbookData={orderbook} />
      </div>

      {/* Imbalance Value and Indicator */}
      <div className="mb-4">
      <h3 className="text-xl font-semibold">Imbalance: {imbalance.toFixed(2)}</h3>
      </div>
      <div id="imbalance" className="mb-8">
        <ImbalanceIndicator orderbookData={orderbook} />
      </div>

      {/* Market Depth Chart 1: non separated */}
      <div id="marketdepth">
        <h3 className="text-xl font-semibold mb-2">Market Depth Chart</h3>
        <Line data={marketDepthData} options={{
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Price (USD)',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Quantity',
              },
            },
          },
        }} />
      </div>
      {/* Market Depth Chart 2: separated Bids and Asks */}
      <div className="mb-8">
        <MarketDepthChart selectedCurrency={selectedCurrency} />
      </div>

      {/* Candlestick Chart */}
      <div id="candlestick" className="mb-8">
        <CandlestickChart ohlcData={ohlcData} currencyPair={selectedCurrency} />
      </div>

    </div>
  );
}