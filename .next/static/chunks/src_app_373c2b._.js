(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_373c2b._.js", {

"[project]/src/app/components/Orderbook.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
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

export default Orderbook;*/ __turbopack_esm__({
    "default": (()=>Orderbook)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SpreadIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/SpreadIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CandlestickChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/CandlestickChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImbalanceIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/ImbalanceIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerables"]);
function Orderbook() {
    _s();
    const [orderbook, setOrderbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bids: [],
        asks: []
    });
    const [spread, setSpread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [imbalance, setImbalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ohlcData, setOhlcData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Orderbook.useEffect": ()=>{
            const interval = setInterval({
                "Orderbook.useEffect.interval": async ()=>{
                    // Fetch orderbook data
                    const orderbookData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOrderbook"])();
                    setOrderbook(orderbookData);
                    // Calculate spread
                    const spreadValue = orderbookData.bids[0] && orderbookData.asks[0] ? parseFloat(orderbookData.asks[0][0]) - parseFloat(orderbookData.bids[0][0]) : 0;
                    setSpread(spreadValue);
                    // Calculate orderbook imbalance
                    const bidVolume = orderbookData.bids.reduce({
                        "Orderbook.useEffect.interval.bidVolume": (sum, bid)=>sum + parseFloat(bid[1])
                    }["Orderbook.useEffect.interval.bidVolume"], 0);
                    const askVolume = orderbookData.asks.reduce({
                        "Orderbook.useEffect.interval.askVolume": (sum, ask)=>sum + parseFloat(ask[1])
                    }["Orderbook.useEffect.interval.askVolume"], 0);
                    setImbalance(bidVolume / (bidVolume + askVolume));
                    // Fetch OHLC data
                    const ohlc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOhlcData"])();
                    setOhlcData(ohlc.map({
                        "Orderbook.useEffect.interval": (item)=>({
                                t: new Date(item.timestamp),
                                o: item.open,
                                h: item.high,
                                l: item.low,
                                c: item.close
                            })
                    }["Orderbook.useEffect.interval"]));
                }
            }["Orderbook.useEffect.interval"], 1000);
            return ({
                "Orderbook.useEffect": ()=>clearInterval(interval)
            })["Orderbook.useEffect"];
        }
    }["Orderbook.useEffect"], []);
    const marketDepthData = {
        labels: orderbook.bids.map((bid)=>bid[0]),
        datasets: [
            {
                label: "Bids",
                data: orderbook.bids.map((bid)=>bid[1]),
                borderColor: "green",
                fill: false
            },
            {
                label: "Asks",
                data: orderbook.asks.map((ask)=>ask[1]),
                borderColor: "red",
                fill: false
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Real-time BTC-USD Orderbook"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Orderbook.js",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "Bids"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Orderbook.js",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "bg-green-100 p-2 rounded",
                                children: orderbook.bids.slice(0, 5).map((bid, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "mb-1",
                                        children: `Price: ${bid[0]}, Quantity: ${bid[1]}`
                                    }, index, false, {
                                        fileName: "[project]/src/app/components/Orderbook.js",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Orderbook.js",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Orderbook.js",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-2",
                                children: "Asks"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Orderbook.js",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "bg-red-100 p-2 rounded",
                                children: orderbook.asks.slice(0, 5).map((ask, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "mb-1",
                                        children: `Price: ${ask[0]}, Quantity: ${ask[1]}`
                                    }, index, false, {
                                        fileName: "[project]/src/app/components/Orderbook.js",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Orderbook.js",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Orderbook.js",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Orderbook.js",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold",
                        children: [
                            "Spread: ",
                            spread.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Orderbook.js",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold",
                        children: [
                            "Imbalance: ",
                            imbalance.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Orderbook.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Orderbook.js",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SpreadIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    orderbookData: orderbook
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Orderbook.js",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Orderbook.js",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImbalanceIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    orderbookData: orderbook
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Orderbook.js",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Orderbook.js",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CandlestickChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ohlcData: ohlcData
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Orderbook.js",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Orderbook.js",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Market Depth Chart"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Orderbook.js",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        data: marketDepthData,
                        options: {
                            responsive: true,
                            scales: {
                                x: {
                                    title: {
                                        display: true,
                                        text: 'Price (USD)'
                                    }
                                },
                                y: {
                                    title: {
                                        display: true,
                                        text: 'Quantity'
                                    }
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Orderbook.js",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Orderbook.js",
                lineNumber: 225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Orderbook.js",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s(Orderbook, "up1n/kfFCZwN1IXxKm9s5UMQpRc=");
_c = Orderbook;
var _c;
__turbopack_refresh__.register(_c, "Orderbook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
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

//# sourceMappingURL=src_app_373c2b._.js.map