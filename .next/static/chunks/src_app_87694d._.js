(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_87694d._.js", {

"[project]/src/app/lib/api.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchOhlcData": (()=>fetchOhlcData),
    "fetchOrderbook": (()=>fetchOrderbook)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const fetchOrderbook = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('https://api.binance.com/api/v3/depth', {
        params: {
            symbol: 'BTCUSDT',
            limit: 10
        }
    });
    return response.data;
};
const fetchOhlcData = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('https://api.binance.com/api/v3/klines', {
        params: {
            symbol: 'BTCUSDT',
            interval: '1m',
            limit: 100
        }
    });
    // Format the data into { t, o, h, l, c } for Chart.js
    const ohlcData = response.data.map((item)=>({
            t: new Date(item[0]),
            o: parseFloat(item[1]),
            h: parseFloat(item[2]),
            l: parseFloat(item[3]),
            c: parseFloat(item[4])
        }));
    return ohlcData;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/SpreadIndicator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SpreadIndicator = ({ orderbookData }) => {
  const chartRef = useRef(null);

  const [chartData, setChartData] = useState({
    labels: [], // Timestamps
    datasets: [
      {
        label: 'Spread (USD)',
        data: [], // Spread values
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  });

  const [chartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Spread (USD)',
        },
        beginAtZero: true,
      },
    },
  });

  // Function to update chart with new spread data
  const updateSpreadData = () => {
    if (!orderbookData) return;

    const bestBid = orderbookData.bids[0]?.[0]; // Best Bid Price
    const bestAsk = orderbookData.asks[0]?.[0]; // Best Ask Price

    if (!bestBid || !bestAsk) return;

    const spread = parseFloat(bestAsk) - parseFloat(bestBid);
    const now = new Date().toLocaleTimeString();

    setChartData((prevData) => {
      const updatedLabels = [...prevData.labels, now];
      const updatedData = [...prevData.datasets[0].data, spread];

      // Maintain a rolling 1-minute window (e.g., 60 data points if updated every second)
      if (updatedLabels.length > 60) {
        updatedLabels.shift();
        updatedData.shift();
      }

      return {
        ...prevData,
        labels: updatedLabels,
        datasets: [
          {
            ...prevData.datasets[0],
            data: updatedData,
          },
        ],
      };
    });
  };

  // Hook to update chart data every time orderbook updates
  useEffect(() => {
    updateSpreadData();
  }, [orderbookData]);

  return (
    <div style={{ height: '300px', marginBottom: '20px' }}>
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default SpreadIndicator;*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerables"]);
const SpreadIndicator = ({ orderbookData })=>{
    _s();
    const [spreadHistory, setSpreadHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpreadIndicator.useEffect": ()=>{
            const interval = setInterval({
                "SpreadIndicator.useEffect.interval": ()=>{
                    const { bids, asks } = orderbookData;
                    // Ensure bids and asks exist
                    if (!bids.length || !asks.length) return;
                    // Calculate the current spread
                    const currentSpread = parseFloat(asks[0][0]) - parseFloat(bids[0][0]);
                    const timestamp = Date.now(); // Use current timestamp
                    // Add the new spread value to the history
                    setSpreadHistory({
                        "SpreadIndicator.useEffect.interval": (prev)=>{
                            // Remove points older than 1 minute (60,000 ms)
                            const updatedHistory = prev.filter({
                                "SpreadIndicator.useEffect.interval.updatedHistory": (dataPoint)=>timestamp - dataPoint.timestamp <= 60000
                            }["SpreadIndicator.useEffect.interval.updatedHistory"]);
                            // Add the new data point and return
                            return [
                                ...updatedHistory,
                                {
                                    spread: currentSpread,
                                    timestamp
                                }
                            ];
                        }
                    }["SpreadIndicator.useEffect.interval"]);
                }
            }["SpreadIndicator.useEffect.interval"], 1000); // Update every second
            return ({
                "SpreadIndicator.useEffect": ()=>clearInterval(interval)
            })["SpreadIndicator.useEffect"];
        }
    }["SpreadIndicator.useEffect"], [
        orderbookData
    ]);
    // Prepare data for the chart
    const data = {
        labels: spreadHistory.map((dataPoint)=>new Date(dataPoint.timestamp).toLocaleTimeString()),
        datasets: [
            {
                label: "Spread (USD)",
                data: spreadHistory.map((dataPoint)=>dataPoint.spread),
                borderColor: "blue",
                tension: 0.1,
                pointRadius: 2
            }
        ]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top"
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Spread"
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Spread Indicator"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SpreadIndicator.js",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                data: data,
                options: options
            }, void 0, false, {
                fileName: "[project]/src/app/components/SpreadIndicator.js",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SpreadIndicator.js",
        lineNumber: 176,
        columnNumber: 5
    }, this);
};
_s(SpreadIndicator, "vU0aPLFR0rRVaNOLX5zScpnJsNg=");
_c = SpreadIndicator;
const __TURBOPACK__default__export__ = SpreadIndicator;
var _c;
__turbopack_refresh__.register(_c, "SpreadIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/CandlestickChart.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$chart$2d$financial$2f$dist$2f$chartjs$2d$chart$2d$financial$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/chartjs-chart-financial/dist/chartjs-chart-financial.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$adapter$2d$date$2d$fns$2f$dist$2f$chartjs$2d$adapter$2d$date$2d$fns$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
// Register the financial chart components
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$chart$2d$financial$2f$dist$2f$chartjs$2d$chart$2d$financial$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickController"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$chart$2d$financial$2f$dist$2f$chartjs$2d$chart$2d$financial$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$chart$2d$financial$2f$dist$2f$chartjs$2d$chart$2d$financial$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OhlcController"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$chart$2d$financial$2f$dist$2f$chartjs$2d$chart$2d$financial$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OhlcElement"]);
const CandlestickChart = ({ ohlcData })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CandlestickChart.useEffect": ()=>{
            if (ohlcData.length === 0 || !canvasRef.current) return;
            const ctx = canvasRef.current.getContext('2d');
            if (!ctx) return;
            const chartConfig = {
                type: 'candlestick',
                data: {
                    datasets: [
                        {
                            label: 'BTC/USD',
                            data: ohlcData
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'minute'
                            },
                            title: {
                                display: true,
                                text: 'Time'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Price (USD)'
                            }
                        }
                    }
                }
            };
            // Destroy existing chart if it exists
            if (chartRef.current) {
                chartRef.current.destroy();
            }
            // Create new chart
            chartRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"](ctx, chartConfig);
            // Cleanup function
            return ({
                "CandlestickChart.useEffect": ()=>{
                    if (chartRef.current) {
                        chartRef.current.destroy();
                    }
                }
            })["CandlestickChart.useEffect"];
        }
    }["CandlestickChart.useEffect"], [
        ohlcData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "BTC/USD Candlestick Chart"
            }, void 0, false, {
                fileName: "[project]/src/app/components/CandlestickChart.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef
            }, void 0, false, {
                fileName: "[project]/src/app/components/CandlestickChart.js",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/CandlestickChart.js",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
_s(CandlestickChart, "WDVG+s/RUdgzBQM+WtvU+4sd8NI=");
_c = CandlestickChart;
const __TURBOPACK__default__export__ = CandlestickChart;
var _c;
__turbopack_refresh__.register(_c, "CandlestickChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Orderbook.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require } = __turbopack_context__;
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

export default Orderbook;*/ if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/MarketDepthChart.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// components.js
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
// Register Chart.js components
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const MarketDepthChart = ()=>{
    _s();
    const [bids, setBids] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [asks, setAsks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [midMarketPrice, setMidMarketPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketDepthChart.useEffect": ()=>{
            fetchOrderBookData();
            const interval = setInterval(fetchOrderBookData, 1000);
            return ({
                "MarketDepthChart.useEffect": ()=>clearInterval(interval)
            })["MarketDepthChart.useEffect"];
        }
    }["MarketDepthChart.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    textAlign: "center"
                },
                children: "Depth Chart"
            }, void 0, false, {
                fileName: "[project]/src/app/components/MarketDepthChart.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                data: chartData,
                options: chartOptions
            }, void 0, false, {
                fileName: "[project]/src/app/components/MarketDepthChart.js",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(MarketDepthChart, "6zmnrpOnRqOFiBLb/QQITjaknLs=");
_c = MarketDepthChart;
const __TURBOPACK__default__export__ = MarketDepthChart;
var _c;
__turbopack_refresh__.register(_c, "MarketDepthChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_87694d._.js.map