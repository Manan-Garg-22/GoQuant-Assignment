module.exports = {

"[project]/src/app/components/CryptoListings.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/*"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowUp } from 'lucide-react'

const CryptoListings = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const symbols = ['BTCUSDT', 'ETHUSDT', 'XRPUSDT', 'BNBUSDT', 'SOLUSDT', 'DOGEUSDT', 'LTCUSDT']
        const responses = await Promise.all(
          symbols.map(symbol =>
            fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=2`)
              .then(res => res.json())
          )
        )
        const tickerResponses = await Promise.all(
          symbols.map(symbol =>
            fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
              .then(res => res.json())
          )
        )
        const coinData = responses.map((data, index) => {
          const [previousHour, currentHour] = data
          const previousPrice = parseFloat(previousHour[4])
          const currentPrice = parseFloat(currentHour[4])
          const priceChange = (currentPrice - previousPrice) / previousPrice * 100
          return {
            symbol: symbols[index],
            name: getCoinName(symbols[index]),
            current_price: currentPrice,
            price_change_percentage_1h: priceChange,
            total_volume: parseFloat(tickerResponses[index].volume),
            market_cap: currentPrice * parseFloat(tickerResponses[index].volume) // Approximation
          }
        })
        setCoins(coinData)
      } catch (error) {
        console.error("Error fetching coin data:", error)
      }
    }

    fetchCoins()
    const interval = setInterval(fetchCoins, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const getCoinName = (symbol) => {
    const names = {
      BTCUSDT: 'Bitcoin',
      ETHUSDT: 'Ethereum',
      XRPUSDT: 'Ripple',
      BNBUSDT: 'Binance Coin',
      SOLUSDT: 'Solana',
      DOGEUSDT: 'Dogecoin',
      LTCUSDT: 'Litecoin'
    }
    return names[symbol] || symbol
  }

  const formatPrice = (price) => {
    return price < 1 ? price.toFixed(5) : price.toFixed(2)
  }

  const formatVolume = (volume) => {
    return `$${(volume / 1e9).toFixed(2)}B`
  }

  const formatMarketCap = (marketCap) => {
    return `$${(marketCap / 1e9).toFixed(2)}B`
  }

  const getImageName = (symbol) => {
    const imageNames = {
      BTCUSDT: 'btc.png',
      ETHUSDT: 'eth.png',
      XRPUSDT: 'xrp.png',
      BNBUSDT: 'bnb.png',
      SOLUSDT: 'sol.png',
      DOGEUSDT: 'doge.png',
      LTCUSDT: 'ltc.png'
    }
    return imageNames[symbol] || 'default.png'
  }

  return (
    <div className="coin-table-container">
      <h2 className="coin-table-title">Popular Cryptocurrencies</h2>
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>1h Change</th>
            <th>24h Volume</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.symbol}>
              <td>
                <div className="coin-name">
                  <img
                    src={`/${getImageName(coin.symbol)}`}
                    alt={coin.name}
                    className="coin-icon"
                  />
                  <span>{coin.name}</span>
                  <span className="coin-symbol">{coin.symbol.replace('USDT', '')}</span>
                </div>
              </td>
              <td className="text-right">${formatPrice(coin.current_price)}</td>
              <td className={`text-right ${coin.price_change_percentage_1h >= 0 ? "positive-change" : "negative-change"}`}>
                <div className="price-change">
                  {coin.price_change_percentage_1h >= 0 ? (
                    <ArrowUp className="change-icon" />
                  ) : (
                    <ArrowDown className="change-icon" />
                  )}
                  {Math.abs(coin.price_change_percentage_1h).toFixed(2)}%
                </div>
              </td>
              <td className="text-left">{formatVolume(coin.total_volume)}</td>
              <td className="text-left">{formatMarketCap(coin.market_cap)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .coin-table-container {
          width: 100%;
          padding: 1rem;
          background-color: #1a1b1e;
          color: white;
          border-radius: 0.5rem;
        }
        .coin-table-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .coin-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
        }
        .coin-table th,
        .coin-table td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid #2d2f36;
        }
        .coin-table th {
          color: #a0aec0;
          font-weight: 500;
        }
        .coin-name {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .coin-icon {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
        }
        .coin-symbol {
          color: #a0aec0;
          margin-left: 0.25rem;
        }
        .text-right {
          text-align: right;
        }
        .text-left {
          text-align: left;
        }
        .price-change {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.25rem;
        }
        .change-icon {
          width: 1rem;
          height: 1rem;
        }
        .positive-change {
          color: #48bb78;
        }
        .negative-change {
          color: #f56565;
        }
      `}</style>
    </div>
  )
}

export default CryptoListings;*/ // app/components/coins.js
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
"use client";
;
;
;
;
;
const CryptoListings = ()=>{
    const [coins, setCoins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    // ... (keep the existing fetchCoins function and other utility functions)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "4989768e948c2df2",
                [
                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                    theme === 'dark' ? '#ffffff' : '#000000',
                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                    theme === 'dark' ? '#a0aec0' : '#718096'
                ]
            ]
        ]) + " " + "coin-table-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "4989768e948c2df2",
                        [
                            theme === 'dark' ? '#1a1b1e' : '#ffffff',
                            theme === 'dark' ? '#ffffff' : '#000000',
                            theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                            theme === 'dark' ? '#a0aec0' : '#4a5568',
                            theme === 'dark' ? '#a0aec0' : '#718096'
                        ]
                    ]
                ]) + " " + "coin-table-title",
                children: "Popular Cryptocurrencies"
            }, void 0, false, {
                fileName: "[project]/src/app/components/CryptoListings.js",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "4989768e948c2df2",
                        [
                            theme === 'dark' ? '#1a1b1e' : '#ffffff',
                            theme === 'dark' ? '#ffffff' : '#000000',
                            theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                            theme === 'dark' ? '#a0aec0' : '#4a5568',
                            theme === 'dark' ? '#a0aec0' : '#718096'
                        ]
                    ]
                ]) + " " + "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "4989768e948c2df2",
                            [
                                theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                theme === 'dark' ? '#ffffff' : '#000000',
                                theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                theme === 'dark' ? '#a0aec0' : '#4a5568',
                                theme === 'dark' ? '#a0aec0' : '#718096'
                            ]
                        ]
                    ]) + " " + "coin-table",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "4989768e948c2df2",
                                    [
                                        theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                        theme === 'dark' ? '#ffffff' : '#000000',
                                        theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                        theme === 'dark' ? '#a0aec0' : '#4a5568',
                                        theme === 'dark' ? '#a0aec0' : '#718096'
                                    ]
                                ]
                            ]),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "4989768e948c2df2",
                                        [
                                            theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                            theme === 'dark' ? '#ffffff' : '#000000',
                                            theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                            theme === 'dark' ? '#a0aec0' : '#4a5568',
                                            theme === 'dark' ? '#a0aec0' : '#718096'
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "4989768e948c2df2",
                                                [
                                                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                    theme === 'dark' ? '#ffffff' : '#000000',
                                                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                    theme === 'dark' ? '#a0aec0' : '#718096'
                                                ]
                                            ]
                                        ]),
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "4989768e948c2df2",
                                                [
                                                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                    theme === 'dark' ? '#ffffff' : '#000000',
                                                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                    theme === 'dark' ? '#a0aec0' : '#718096'
                                                ]
                                            ]
                                        ]),
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "4989768e948c2df2",
                                                [
                                                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                    theme === 'dark' ? '#ffffff' : '#000000',
                                                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                    theme === 'dark' ? '#a0aec0' : '#718096'
                                                ]
                                            ]
                                        ]),
                                        children: "1h Change"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "4989768e948c2df2",
                                                [
                                                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                    theme === 'dark' ? '#ffffff' : '#000000',
                                                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                    theme === 'dark' ? '#a0aec0' : '#718096'
                                                ]
                                            ]
                                        ]),
                                        children: "24h Volume"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "4989768e948c2df2",
                                                [
                                                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                    theme === 'dark' ? '#ffffff' : '#000000',
                                                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                    theme === 'dark' ? '#a0aec0' : '#718096'
                                                ]
                                            ]
                                        ]),
                                        children: "Market Cap"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/CryptoListings.js",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/CryptoListings.js",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "4989768e948c2df2",
                                    [
                                        theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                        theme === 'dark' ? '#ffffff' : '#000000',
                                        theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                        theme === 'dark' ? '#a0aec0' : '#4a5568',
                                        theme === 'dark' ? '#a0aec0' : '#718096'
                                    ]
                                ]
                            ]),
                            children: coins.map((coin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "4989768e948c2df2",
                                            [
                                                theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                theme === 'dark' ? '#ffffff' : '#000000',
                                                theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                theme === 'dark' ? '#a0aec0' : '#718096'
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4989768e948c2df2",
                                                    [
                                                        theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                        theme === 'dark' ? '#ffffff' : '#000000',
                                                        theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                        theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                        theme === 'dark' ? '#a0aec0' : '#718096'
                                                    ]
                                                ]
                                            ]),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "4989768e948c2df2",
                                                        [
                                                            theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                            theme === 'dark' ? '#ffffff' : '#000000',
                                                            theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                            theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                            theme === 'dark' ? '#a0aec0' : '#718096'
                                                        ]
                                                    ]
                                                ]) + " " + "coin-name",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `/${getImageName(coin.symbol)}`,
                                                        alt: coin.name,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "4989768e948c2df2",
                                                                [
                                                                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                                    theme === 'dark' ? '#ffffff' : '#000000',
                                                                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                                    theme === 'dark' ? '#a0aec0' : '#718096'
                                                                ]
                                                            ]
                                                        ]) + " " + "coin-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "4989768e948c2df2",
                                                                [
                                                                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                                    theme === 'dark' ? '#ffffff' : '#000000',
                                                                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                                    theme === 'dark' ? '#a0aec0' : '#718096'
                                                                ]
                                                            ]
                                                        ]),
                                                        children: coin.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "4989768e948c2df2",
                                                                [
                                                                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                                    theme === 'dark' ? '#ffffff' : '#000000',
                                                                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                                    theme === 'dark' ? '#a0aec0' : '#718096'
                                                                ]
                                                            ]
                                                        ]) + " " + "coin-symbol",
                                                        children: coin.symbol.replace('USDT', '')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/CryptoListings.js",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CryptoListings.js",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4989768e948c2df2",
                                                    [
                                                        theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                        theme === 'dark' ? '#ffffff' : '#000000',
                                                        theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                        theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                        theme === 'dark' ? '#a0aec0' : '#718096'
                                                    ]
                                                ]
                                            ]) + " " + "text-right",
                                            children: [
                                                "$",
                                                formatPrice(coin.current_price)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/CryptoListings.js",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4989768e948c2df2",
                                                    [
                                                        theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                        theme === 'dark' ? '#ffffff' : '#000000',
                                                        theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                        theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                        theme === 'dark' ? '#a0aec0' : '#718096'
                                                    ]
                                                ]
                                            ]) + " " + `text-right ${coin.price_change_percentage_1h >= 0 ? "positive-change" : "negative-change"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "4989768e948c2df2",
                                                        [
                                                            theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                            theme === 'dark' ? '#ffffff' : '#000000',
                                                            theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                            theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                            theme === 'dark' ? '#a0aec0' : '#718096'
                                                        ]
                                                    ]
                                                ]) + " " + "price-change",
                                                children: [
                                                    coin.price_change_percentage_1h >= 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                        className: "change-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                                        lineNumber: 248,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                        className: "change-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/CryptoListings.js",
                                                        lineNumber: 250,
                                                        columnNumber: 23
                                                    }, this),
                                                    Math.abs(coin.price_change_percentage_1h).toFixed(2),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/CryptoListings.js",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CryptoListings.js",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4989768e948c2df2",
                                                    [
                                                        theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                        theme === 'dark' ? '#ffffff' : '#000000',
                                                        theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                        theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                        theme === 'dark' ? '#a0aec0' : '#718096'
                                                    ]
                                                ]
                                            ]) + " " + "text-right",
                                            children: formatVolume(coin.total_volume)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CryptoListings.js",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "4989768e948c2df2",
                                                    [
                                                        theme === 'dark' ? '#1a1b1e' : '#ffffff',
                                                        theme === 'dark' ? '#ffffff' : '#000000',
                                                        theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                                                        theme === 'dark' ? '#a0aec0' : '#4a5568',
                                                        theme === 'dark' ? '#a0aec0' : '#718096'
                                                    ]
                                                ]
                                            ]) + " " + "text-right",
                                            children: formatMarketCap(coin.market_cap)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/CryptoListings.js",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, coin.symbol, true, {
                                    fileName: "[project]/src/app/components/CryptoListings.js",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/CryptoListings.js",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/CryptoListings.js",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/CryptoListings.js",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "4989768e948c2df2",
                dynamic: [
                    theme === 'dark' ? '#1a1b1e' : '#ffffff',
                    theme === 'dark' ? '#ffffff' : '#000000',
                    theme === 'dark' ? '#2d2f36' : '#e2e8f0',
                    theme === 'dark' ? '#a0aec0' : '#4a5568',
                    theme === 'dark' ? '#a0aec0' : '#718096'
                ],
                children: `.coin-table-container.__jsx-style-dynamic-selector{background-color:${theme === 'dark' ? '#1a1b1e' : '#ffffff'};width:100%;color:${theme === 'dark' ? '#ffffff' : '#000000'};border-radius:.5rem;padding:1rem;transition:background-color .3s,color .3s}.coin-table-title.__jsx-style-dynamic-selector{margin-bottom:1rem;font-size:1.25rem;font-weight:600}.coin-table.__jsx-style-dynamic-selector{border-collapse:separate;border-spacing:0;width:100%}.coin-table.__jsx-style-dynamic-selector th.__jsx-style-dynamic-selector,.coin-table.__jsx-style-dynamic-selector td.__jsx-style-dynamic-selector{text-align:left;border-bottom:1px solid ${theme === 'dark' ? '#2d2f36' : '#e2e8f0'};padding:.75rem}.coin-table.__jsx-style-dynamic-selector th.__jsx-style-dynamic-selector{color:${theme === 'dark' ? '#a0aec0' : '#4a5568'};font-weight:500}.coin-name.__jsx-style-dynamic-selector{align-items:center;gap:.5rem;display:flex}.coin-icon.__jsx-style-dynamic-selector{border-radius:50%;width:1.5rem;height:1.5rem}.coin-symbol.__jsx-style-dynamic-selector{color:${theme === 'dark' ? '#a0aec0' : '#718096'};margin-left:.25rem}.text-right.__jsx-style-dynamic-selector{text-align:right}.price-change.__jsx-style-dynamic-selector{justify-content:flex-end;align-items:center;gap:.25rem;display:flex}.change-icon.__jsx-style-dynamic-selector{width:1rem;height:1rem}.positive-change.__jsx-style-dynamic-selector{color:#48bb78}.negative-change.__jsx-style-dynamic-selector{color:#f56565}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/CryptoListings.js",
        lineNumber: 217,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CryptoListings;
}}),
"[project]/src/app/components/SpreadIndicator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/*"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const SpreadIndicator = ({ orderbookData }) => {
  const [spreadHistory, setSpreadHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { bids, asks } = orderbookData;

      // Ensure bids and asks exist
      if (!bids.length || !asks.length) return;

      // Calculate the current spread
      const currentSpread = parseFloat(asks[0][0]) - parseFloat(bids[0][0]);
      const timestamp = Date.now(); // Use current timestamp

      // Add the new spread value to the history
      setSpreadHistory((prev) => {
        // Remove points older than 1 minute (60,000 ms)
        const updatedHistory = prev.filter(
          (dataPoint) => timestamp - dataPoint.timestamp <= 60000
        );

        // Add the new data point and return
        return [...updatedHistory, { spread: currentSpread, timestamp }];
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [orderbookData]);

  // Prepare data for the chart
  const data = {
    labels: spreadHistory.map((dataPoint) =>
      new Date(dataPoint.timestamp).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Spread (USD)",
        data: spreadHistory.map((dataPoint) => dataPoint.spread),
        borderColor: "blue",
        backgroundColor: "rgba(135, 206, 250, 0.3)", // Light blue fill
        fill: true,
        tension: 0.1,
        pointRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Spread",
        },
      },
    },
  };

  return (
    <div>
      <h3>Spread Indicator</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default SpreadIndicator;*/ // app/components/SpreadIndicator.js
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerables"]);
const SpreadIndicator = ({ orderbookData })=>{
    const [spreadHistory, setSpreadHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    // ... (keep existing useEffect and data processing logic)
    const data = {
        labels: spreadHistory.map((dataPoint)=>new Date(dataPoint.timestamp).toLocaleTimeString()),
        datasets: [
            {
                label: "Spread (USD)",
                data: spreadHistory.map((dataPoint)=>dataPoint.spread),
                borderColor: theme === 'dark' ? "#3b82f6" : "#2563eb",
                backgroundColor: theme === 'dark' ? "rgba(59, 130, 246, 0.1)" : "rgba(37, 99, 235, 0.1)",
                fill: true,
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
                position: "top",
                labels: {
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time",
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                ticks: {
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                grid: {
                    color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Spread",
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                ticks: {
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                grid: {
                    color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4 text-gray-800 dark:text-white",
                children: "Spread Indicator"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SpreadIndicator.js",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                data: data,
                options: options
            }, void 0, false, {
                fileName: "[project]/src/app/components/SpreadIndicator.js",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SpreadIndicator.js",
        lineNumber: 164,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SpreadIndicator;
}}),
"[project]/src/app/components/ImbalanceIndicator.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/*"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const ImbalanceIndicator = ({ orderbookData }) => {
  const [imbalanceHistory, setImbalanceHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { bids, asks } = orderbookData;

      // Ensure bids and asks exist
      if (!bids.length || !asks.length) return;

      // Calculate the current imbalance
      const bidVolume = bids.reduce((sum, bid) => sum + parseFloat(bid[1]), 0);
      const askVolume = asks.reduce((sum, ask) => sum + parseFloat(ask[1]), 0);
      const currentImbalance = bidVolume / (bidVolume + askVolume);
      const timestamp = Date.now();

      // Add the new imbalance value to the history
      setImbalanceHistory((prev) => {
        // Remove points older than 1 minute (60,000 ms)
        const updatedHistory = prev.filter(
          (dataPoint) => timestamp - dataPoint.timestamp <= 60000
        );

        // Add the new data point and return
        return [...updatedHistory, { imbalance: currentImbalance, timestamp }];
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [orderbookData]);

  // Prepare data for the chart
  const data = {
    labels: imbalanceHistory.map((dataPoint) =>
      new Date(dataPoint.timestamp).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Imbalance",
        data: imbalanceHistory.map((dataPoint) => dataPoint.imbalance),
        borderColor: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.2)",
        tension: 0.1,
        pointRadius: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Imbalance",
        },
        min: 0,
        max: 1,
      },
    },
  };

  return (
    <div>
      <h3>Imbalance Indicator</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ImbalanceIndicator;*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerables"]);
const ImbalanceIndicator = ({ orderbookData })=>{
    const [imbalanceHistory, setImbalanceHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            const { bids, asks } = orderbookData;
            if (!bids.length || !asks.length) return;
            const bidVolume = bids.reduce((sum, bid)=>sum + parseFloat(bid[1]), 0);
            const askVolume = asks.reduce((sum, ask)=>sum + parseFloat(ask[1]), 0);
            const currentImbalance = bidVolume / (bidVolume + askVolume);
            const timestamp = Date.now();
            setImbalanceHistory((prev)=>{
                const updatedHistory = prev.filter((dataPoint)=>timestamp - dataPoint.timestamp <= 60000);
                return [
                    ...updatedHistory,
                    {
                        imbalance: currentImbalance,
                        timestamp
                    }
                ];
            });
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        orderbookData
    ]);
    const data = {
        labels: imbalanceHistory.map((dataPoint)=>new Date(dataPoint.timestamp).toLocaleTimeString()),
        datasets: [
            {
                label: "Imbalance",
                data: imbalanceHistory.map((dataPoint)=>dataPoint.imbalance),
                borderColor: theme === 'dark' ? "#8b5cf6" : "#6d28d9",
                backgroundColor: theme === 'dark' ? "rgba(139, 92, 246, 0.1)" : "rgba(109, 40, 217, 0.1)",
                tension: 0.1,
                pointRadius: 2,
                fill: true
            }
        ]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time",
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                ticks: {
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                grid: {
                    color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Imbalance",
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                ticks: {
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                grid: {
                    color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                },
                min: 0,
                max: 1
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4 text-gray-800 dark:text-white",
                children: "Imbalance Indicator"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ImbalanceIndicator.js",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                data: data,
                options: options
            }, void 0, false, {
                fileName: "[project]/src/app/components/ImbalanceIndicator.js",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ImbalanceIndicator.js",
        lineNumber: 190,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ImbalanceIndicator;
}}),
"[externals]/ [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util");

module.exports = mod;
}}),
"[externals]/ [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream");

module.exports = mod;
}}),
"[externals]/ [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path");

module.exports = mod;
}}),
"[externals]/ [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http");

module.exports = mod;
}}),
"[externals]/ [external] (https, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("https");

module.exports = mod;
}}),
"[externals]/ [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url");

module.exports = mod;
}}),
"[externals]/ [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs");

module.exports = mod;
}}),
"[externals]/ [external] (assert, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("assert");

module.exports = mod;
}}),
"[externals]/ [external] (zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("zlib");

module.exports = mod;
}}),
"[externals]/ [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events");

module.exports = mod;
}}),
"[project]/src/app/lib/api.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchOhlcData": (()=>fetchOhlcData),
    "fetchOrderbook": (()=>fetchOrderbook)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const symbolMap = {
    "BTC-USD": "BTCUSDT",
    "ETH-USD": "ETHUSDT",
    "XRP-USD": "XRPUSDT",
    "BNB-USD": "BNBUSDT",
    "SOL-USD": "SOLUSDT",
    "DOGE-USD": "DOGEUSDT",
    "LTC-USD": "LTCUSDT"
};
const fetchOrderbook = async (currencyPair)=>{
    const symbol = symbolMap[currencyPair];
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('https://api.binance.com/api/v3/depth', {
        params: {
            symbol: symbol,
            limit: 10
        }
    });
    return response.data;
};
const fetchOhlcData = async (currencyPair)=>{
    const symbol = symbolMap[currencyPair];
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('https://api.binance.com/api/v3/klines', {
        params: {
            symbol: symbol,
            interval: '1m',
            limit: 100
        }
    });
    const ohlcData = response.data.map((item)=>({
            t: new Date(item[0]),
            o: parseFloat(item[1]),
            h: parseFloat(item[2]),
            l: parseFloat(item[3]),
            c: parseFloat(item[4])
        }));
    return ohlcData;
};
}}),
"[project]/src/app/components/MarketDepthChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/*"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchOrderbook } from "../lib/api"; // Use the fetchOrderbook function

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const MarketDepthChart = ({ selectedCurrency }) => {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);
  const [midMarketPrice, setMidMarketPrice] = useState(null);

  // Fetch orderbook data based on the selected currency
  const fetchOrderBookData = async () => {
    try {
      const data = await fetchOrderbook(selectedCurrency); // Use selectedCurrency as input
      const formattedBids = data.bids.map((bid) => ({
        price: parseFloat(bid[0]),
        quantity: parseFloat(bid[1]),
      }));
      const formattedAsks = data.asks.map((ask) => ({
        price: parseFloat(ask[0]),
        quantity: parseFloat(ask[1]),
      }));

      // Calculate cumulative quantities for depth
      const bidsWithCumulativeQty = calculateCumulativeDepth(formattedBids);
      const asksWithCumulativeQty = calculateCumulativeDepth(formattedAsks);

      // Update state
      setBids(bidsWithCumulativeQty.reverse());
      setAsks(asksWithCumulativeQty);
      setMidMarketPrice(
        (parseFloat(data.bids[0][0]) + parseFloat(data.asks[0][0])) / 2
      );
    } catch (error) {
      console.error("Error fetching orderbook data:", error);
    }
  };

  // Helper function to calculate cumulative depth
  const calculateCumulativeDepth = (orders) => {
    let cumulativeQty = 0;
    return orders.map((order) => {
      cumulativeQty += order.quantity;
      return { ...order, cumulativeQty };
    });
  };

  // Re-fetch data when the selected currency changes
  useEffect(() => {
    fetchOrderBookData();
    const interval = setInterval(fetchOrderBookData, 1000);
    return () => clearInterval(interval);
  }, [selectedCurrency]); // Dependency on selectedCurrency

  // Chart data
  const chartData = {
    labels: [...bids.map((bid) => bid.price), ...asks.map((ask) => ask.price)],
    datasets: [
      {
        label: "Market Depth",
        data: [
          ...bids.map((bid) => bid.cumulativeQty),
          ...asks.map((ask) => ask.cumulativeQty),
        ],
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: (context) => {
          const chartLabels = context.chart.data.labels;
          return chartLabels.map((price) =>
            price <= midMarketPrice
              ? "rgba(0, 255, 0, 0.5)" // Green for bids
              : "rgba(255, 0, 0, 0.5)" // Red for asks
          );
        },
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Price (USD)",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Cumulative Quantity",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) =>
            `Price: ${context.label}, Depth: ${context.raw.toFixed(2)}`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>{selectedCurrency} Depth Chart</h2>
      <Line data={chartData} options={chartOptions} />
      <p style={{ textAlign: "center" }}>
        Mid Market Price: {midMarketPrice?.toFixed(2)}
      </p>
    </div>
  );
};

export default MarketDepthChart;*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/lib/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const MarketDepthChart = ({ selectedCurrency })=>{
    const [bids, setBids] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [asks, setAsks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [midMarketPrice, setMidMarketPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const fetchOrderBookData = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOrderbook"])(selectedCurrency);
            const formattedBids = data.bids.map((bid)=>({
                    price: parseFloat(bid[0]),
                    quantity: parseFloat(bid[1])
                }));
            const formattedAsks = data.asks.map((ask)=>({
                    price: parseFloat(ask[0]),
                    quantity: parseFloat(ask[1])
                }));
            const bidsWithCumulativeQty = calculateCumulativeDepth(formattedBids);
            const asksWithCumulativeQty = calculateCumulativeDepth(formattedAsks);
            setBids(bidsWithCumulativeQty.reverse());
            setAsks(asksWithCumulativeQty);
            setMidMarketPrice((parseFloat(data.bids[0][0]) + parseFloat(data.asks[0][0])) / 2);
        } catch (error) {
            console.error("Error fetching orderbook data:", error);
        }
    };
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchOrderBookData();
        const interval = setInterval(fetchOrderBookData, 1000);
        return ()=>clearInterval(interval);
    }, [
        selectedCurrency
    ]);
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
                    return chartLabels.map((price)=>price <= midMarketPrice ? theme === 'dark' ? "rgba(34, 197, 94, 0.5)" : "rgba(21, 128, 61, 0.5)" : theme === 'dark' ? "rgba(239, 68, 68, 0.5)" : "rgba(185, 28, 28, 0.5)");
                },
                fill: true,
                tension: 0.1
            }
        ]
    };
    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Price (USD)",
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                grid: {
                    display: false
                },
                ticks: {
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Cumulative Quantity",
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                ticks: {
                    color: theme === 'dark' ? "#ffffff" : "#000000"
                },
                grid: {
                    color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
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
        className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-4 text-gray-800 dark:text-white",
                children: [
                    selectedCurrency,
                    " Depth Chart"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MarketDepthChart.js",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                data: chartData,
                options: chartOptions
            }, void 0, false, {
                fileName: "[project]/src/app/components/MarketDepthChart.js",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4 text-gray-600 dark:text-gray-300",
                children: [
                    "Mid Market Price: ",
                    midMarketPrice?.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MarketDepthChart.js",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/MarketDepthChart.js",
        lineNumber: 269,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = MarketDepthChart;
}}),
"[project]/src/app/components/CandlestickChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/*"use client";

import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { CandlestickController, CandlestickElement } from "chartjs-chart-financial";
import 'chartjs-adapter-date-fns';

Chart.register(CandlestickController, CandlestickElement);

const CandlestickChart = ({ ohlcData, currencyPair, fetchNewData }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!ohlcData || ohlcData.length === 0 || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Chart configuration
    const chartConfig = {
      type: "candlestick",
      data: {
        datasets: [
          {
            label: currencyPair,
            data: ohlcData.map(d => ({
              x: d.t, // Timestamp
              o: d.o, // Open
              h: d.h, // High
              l: d.l, // Low
              c: d.c, // Close
            })),
            borderColor: {
              up: "#26a69a", // Green for upward
              down: "#ef5350", // Red for downward
            },
            backgroundColor: {
              up: "#26a69a",
              down: "#ef5350",
            },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 10,
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "minute",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.8)",
            },
          },
          y: {
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.8)",
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: context => {
                const point = context.raw;
                return [
                  `Open: ${point.o}`,
                  `High: ${point.h}`,
                  `Low: ${point.l}`,
                  `Close: ${point.c}`,
                ];
              },
            },
          },
        },
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, chartConfig);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [ohlcData, currencyPair]);

  // Polling for data updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (fetchNewData) {
        fetchNewData();
      }
    }, 10000); // Fetch data every 10 seconds

    return () => clearInterval(interval);
  }, [fetchNewData]);

  return (
    <div style={{ backgroundColor: "#131722", padding: "20px", borderRadius: "4px" }}>
      <h3 style={{ color: "white", marginBottom: "20px" }}>{currencyPair} Candlestick Chart</h3>
      <div style={{ height: "400px" }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default CandlestickChart;*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$chart$2d$financial$2f$dist$2f$chartjs$2d$chart$2d$financial$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/chartjs-chart-financial/dist/chartjs-chart-financial.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$adapter$2d$date$2d$fns$2f$dist$2f$chartjs$2d$adapter$2d$date$2d$fns$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$chart$2d$financial$2f$dist$2f$chartjs$2d$chart$2d$financial$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandlestickController"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chartjs$2d$chart$2d$financial$2f$dist$2f$chartjs$2d$chart$2d$financial$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandlestickElement"]);
const CandlestickChart = ({ ohlcData, currencyPair, fetchNewData })=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ohlcData || ohlcData.length === 0 || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;
        const chartConfig = {
            type: "candlestick",
            data: {
                datasets: [
                    {
                        label: currencyPair,
                        data: ohlcData.map((d)=>({
                                x: d.t,
                                o: d.o,
                                h: d.h,
                                l: d.l,
                                c: d.c
                            })),
                        borderColor: {
                            up: theme === 'dark' ? "#22c55e" : "#15803d",
                            down: theme === 'dark' ? "#ef4444" : "#b91c1c"
                        },
                        backgroundColor: {
                            up: theme === 'dark' ? "#22c55e" : "#15803d",
                            down: theme === 'dark' ? "#ef4444" : "#b91c1c"
                        }
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: 10
                },
                scales: {
                    x: {
                        type: "time",
                        time: {
                            unit: "minute"
                        },
                        grid: {
                            color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            color: theme === 'dark' ? "#ffffff" : "#000000"
                        }
                    },
                    y: {
                        grid: {
                            color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            color: theme === 'dark' ? "#ffffff" : "#000000"
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: (context)=>{
                                const point = context.raw;
                                return [
                                    `Open: ${point.o}`,
                                    `High: ${point.h}`,
                                    `Low: ${point.l}`,
                                    `Close: ${point.c}`
                                ];
                            }
                        },
                        backgroundColor: theme === 'dark' ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
                        titleColor: theme === 'dark' ? "#ffffff" : "#000000",
                        bodyColor: theme === 'dark' ? "#ffffff" : "#000000",
                        borderColor: theme === 'dark' ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                        borderWidth: 1
                    }
                }
            }
        };
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        chartRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"](ctx, chartConfig);
        return ()=>{
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [
        ohlcData,
        currencyPair,
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            if (fetchNewData) {
                fetchNewData();
            }
        }, 10000);
        return ()=>clearInterval(interval);
    }, [
        fetchNewData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4 text-gray-800 dark:text-white",
                children: [
                    currencyPair,
                    " Candlestick Chart"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/CandlestickChart.js",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef
                }, void 0, false, {
                    fileName: "[project]/src/app/components/CandlestickChart.js",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/CandlestickChart.js",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/CandlestickChart.js",
        lineNumber: 250,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CandlestickChart;
}}),
"[project]/src/app/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Orderbook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Orderbook.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CryptoListings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/CryptoListings.js [app-ssr] (ecmascript)");
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Crypto Orderbook"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Real-time crypto orderbook"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "BTC-USD Real-Time Orderbook"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Orderbook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CryptoListings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__ffc104._.js.map