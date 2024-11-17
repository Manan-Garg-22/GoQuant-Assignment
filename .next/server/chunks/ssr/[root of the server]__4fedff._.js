module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[project]/src/app/components/Orderbook.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/*"use client";
import { useEffect, useState } from "react";
import { fetchOrderbook, fetchOhlcData } from "../lib/api"; // Assuming you have a function to fetch OHLC data
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import SpreadIndicator from "../components/SpreadIndicator";
import CandlestickChart from "../components/CandlestickChart";

ChartJS.register(...registerables);

const Orderbook = () => {
  const [orderbook, setOrderbook] = useState({ bids: [], asks: [] });
  const [spread, setSpread] = useState(0);
  const [imbalance, setImbalance] = useState(0);
  const [ohlcData, setOhlcData] = useState([]); // State for OHLC data

  // Fetch orderbook and OHLC data every second
  useEffect(() => {
    const interval = setInterval(async () => {
      // Fetch orderbook data
      const orderbookData = await fetchOrderbook();
      setOrderbook(orderbookData);

      // Calculate spread
      const spreadValue =
        orderbookData.bids[0] && orderbookData.asks[0]
          ? parseFloat(orderbookData.asks[0][0]) - parseFloat(orderbookData.bids[0][0])
          : 0;
      setSpread(spreadValue);

      // Calculate orderbook imbalance
      const bidVolume = orderbookData.bids.reduce((sum, bid) => sum + parseFloat(bid[1]), 0);
      const askVolume = orderbookData.asks.reduce((sum, ask) => sum + parseFloat(ask[1]), 0);
      setImbalance(bidVolume / (bidVolume + askVolume));

      // Fetch OHLC data
      const ohlc = await fetchOhlcData(); // Replace with your actual API function to fetch OHLC data
      setOhlcData(
        ohlc.map((item) => ({
          t: new Date(item.timestamp), // Timestamp of the candlestick
          o: item.open,               // Open price
          h: item.high,               // High price
          l: item.low,                // Low price
          c: item.close,              // Close price
        }))
      );
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run this effect only once on mount

  const marketDepthData = {
    labels: orderbook.bids.map((bid) => bid[0]),
    datasets: [
      {
        label: "Bids",
        data: orderbook.bids.map((bid) => bid[1]),
        borderColor: "green",
        fill: false,
      },
      {
        label: "Asks",
        data: orderbook.asks.map((ask) => ask[1]),
        borderColor: "red",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Real-time BTC-USD Orderbook</h2>

      <div>
        <h3>Bids</h3>
        <ul>
          {orderbook.bids.map((bid, index) => (
            <li key={index}>{`Price: ${bid[0]}, Quantity: ${bid[1]}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Asks</h3>
        <ul>
          {orderbook.asks.map((ask, index) => (
            <li key={index}>{`Price: ${ask[0]}, Quantity: ${ask[1]}`}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Spread: {spread}</h3>
        <h3>Imbalance: {imbalance}</h3>
      </div>

      <div>
        <SpreadIndicator orderbookData={orderbook} />
      </div>

      <div>
       
        <CandlestickChart ohlcData={ohlcData} />
      </div>

      <div>
        <h3>Market Depth Chart</h3>
        <Line data={marketDepthData} />
      </div>
    </div>
  );
};

export default Orderbook;*/ /*"use client";

import { useEffect, useState } from "react";
import { fetchOrderbook, fetchOhlcData } from "../lib/api";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import SpreadIndicator from "./SpreadIndicator";
import CandlestickChart from "./CandlestickChart";
import ImbalanceIndicator from "./ImbalanceIndicator";

ChartJS.register(...registerables);

export default function Orderbook() {
  const [orderbook, setOrderbook] = useState({ bids: [], asks: [] });
  const [spread, setSpread] = useState(0);
  const [imbalance, setImbalance] = useState(0);
  const [ohlcData, setOhlcData] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      // Fetch orderbook data
      const orderbookData = await fetchOrderbook();
      setOrderbook(orderbookData);

      // Calculate spread
      const spreadValue =
        orderbookData.bids[0] && orderbookData.asks[0]
          ? parseFloat(orderbookData.asks[0][0]) - parseFloat(orderbookData.bids[0][0])
          : 0;
      setSpread(spreadValue);

      // Calculate orderbook imbalance
      const bidVolume = orderbookData.bids.reduce((sum, bid) => sum + parseFloat(bid[1]), 0);
      const askVolume = orderbookData.asks.reduce((sum, ask) => sum + parseFloat(ask[1]), 0);
      setImbalance(bidVolume / (bidVolume + askVolume));

      // Fetch OHLC data
      const ohlc = await fetchOhlcData();
      setOhlcData(
        ohlc.map((item) => ({
          t: new Date(item.timestamp),
          o: item.open,
          h: item.high,
          l: item.low,
          c: item.close,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const marketDepthData = {
    labels: orderbook.bids.map((bid) => bid[0]),
    datasets: [
      {
        label: "Bids",
        data: orderbook.bids.map((bid) => bid[1]),
        borderColor: "green",
        fill: false,
      },
      {
        label: "Asks",
        data: orderbook.asks.map((ask) => ask[1]),
        borderColor: "red",
        fill: false,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Real-time BTC-USD Orderbook</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Bids</h3>
          <ul className="bg-green-100 p-2 rounded">
            {orderbook.bids.slice(0, 5).map((bid, index) => (
              <li key={index} className="mb-1">{`Price: ${bid[0]}, Quantity: ${bid[1]}`}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Asks</h3>
          <ul className="bg-red-100 p-2 rounded">
            {orderbook.asks.slice(0, 5).map((ask, index) => (
              <li key={index} className="mb-1">{`Price: ${ask[0]}, Quantity: ${ask[1]}`}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Spread: {spread.toFixed(2)}</h3>
        <h3 className="text-xl font-semibold">Imbalance: {imbalance.toFixed(2)}</h3>
      </div>

      <div className="mb-8">
        <SpreadIndicator orderbookData={orderbook} />
      </div>

      <div className="mb-8">
        <ImbalanceIndicator orderbookData={orderbook} />
      </div>

      <div className="mb-8">
        <CandlestickChart ohlcData={ohlcData} />
      </div>

      <div>
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
    </div>
  );
}*/ }}),
"[project]/src/app/components/MarketDepthChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// components.js
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Register Chart.js components
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const MarketDepthChart = ()=>{
    const [bids, setBids] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [asks, setAsks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [midMarketPrice, setMidMarketPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch orderbook data from Binance API
    const fetchOrderBookData = async ()=>{
        try {
            const response = await fetch("https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10" // Replace with your API if needed
            );
            const data = await response.json();
            // Process bids and asks
            const formattedBids = data.bids.map((bid)=>({
                    price: parseFloat(bid[0]),
                    quantity: parseFloat(bid[1])
                }));
            const formattedAsks = data.asks.map((ask)=>({
                    price: parseFloat(ask[0]),
                    quantity: parseFloat(ask[1])
                }));
            // Calculate cumulative quantities for depth
            const bidsWithCumulativeQty = calculateCumulativeDepth(formattedBids);
            const asksWithCumulativeQty = calculateCumulativeDepth(formattedAsks);
            // Set state
            setBids(bidsWithCumulativeQty.reverse()); // Reverse bids for proper plotting
            setAsks(asksWithCumulativeQty);
            setMidMarketPrice((parseFloat(data.bids[0][0]) + parseFloat(data.asks[0][0])) / 2);
        } catch (error) {
            console.error("Error fetching orderbook data:", error);
        }
    };
    // Helper function to calculate cumulative depth
    const calculateCumulativeDepth = (orders)=>{
        let cumulativeQty = 0;
        return orders.map((order)=>{
            cumulativeQty += order.quantity;
            return {
                ...order,
                cumulativeQty
            };
        });
    };
    // Fetch data every second
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchOrderBookData();
        const interval = setInterval(fetchOrderBookData, 1000);
        return ()=>clearInterval(interval);
    }, []);
    // Chart data
    const chartData = {
        labels: [
            ...bids.map((bid)=>bid.price),
            ...asks.map((ask)=>ask.price)
        ],
        datasets: [
            {
                label: "Market Depth",
                data: [
                    ...bids.map((bid)=>bid.cumulativeQty),
                    ...asks.map((ask)=>ask.cumulativeQty)
                ],
                borderColor: "rgba(0,0,0,0)",
                backgroundColor: (context)=>{
                    const chartLabels = context.chart.data.labels;
                    return chartLabels.map((price)=>price <= midMarketPrice ? "rgba(0, 255, 0, 0.5)" // Green for bids
                         : "rgba(255, 0, 0, 0.5)" // Red for asks
                    );
                },
                fill: true,
                tension: 0.1
            }
        ]
    };
    // Chart options
    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Price (USD)"
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Cumulative Quantity"
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context)=>`Price: ${context.label}, Depth: ${context.raw.toFixed(2)}`
                }
            },
            legend: {
                display: false
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    textAlign: "center"
                },
                children: "Depth Chart"
            }, void 0, false, {
                fileName: "[project]/src/app/components/MarketDepthChart.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                data: chartData,
                options: chartOptions
            }, void 0, false, {
                fileName: "[project]/src/app/components/MarketDepthChart.js",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: "center"
                },
                children: [
                    "Mid Market Price: ",
                    midMarketPrice?.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MarketDepthChart.js",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/MarketDepthChart.js",
        lineNumber: 131,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = MarketDepthChart;
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__4fedff._.js.map