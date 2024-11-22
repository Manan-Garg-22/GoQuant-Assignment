"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowUp } from 'lucide-react'

// Main component for displaying cryptocurrency listings
const CryptoListings = () => {
  const [coins, setCoins] = useState([]) // State to store cryptocurrency data

  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const symbols = ['BTCUSDT', 'ETHUSDT', 'XRPUSDT', 'BNBUSDT', 'SOLUSDT', 'DOGEUSDT', 'LTCUSDT']
        
        // Fetch hourly price data for each symbol
        const responses = await Promise.all(
          symbols.map(symbol =>
            fetch(`https://api.binance.us/api/v3/klines?symbol=${symbol}&interval=1h&limit=2`)
              .then(res => res.json())
          )
        )

        // Fetch 24-hour ticker data for each symbol
        const tickerResponses = await Promise.all(
          symbols.map(symbol =>
            fetch(`https://api.binance.us/api/v3/ticker/24hr?symbol=${symbol}`)
              .then(res => res.json())
          )
        )

        // Process and combine the data from both APIs
        const coinData = responses.map((data, index) => {
          const [previousHour, currentHour] = data // Extract data for the last two hours
          const previousPrice = parseFloat(previousHour[4]) // Close price of the previous hour
          const currentPrice = parseFloat(currentHour[4]) // Close price of the current hour
          const priceChange = (currentPrice - previousPrice) / previousPrice * 100 // Calculate percentage change
          return {
            symbol: symbols[index],
            name: getCoinName(symbols[index]), // Map symbol to coin name
            current_price: currentPrice, // Current price
            price_change_percentage_1h: priceChange, // 1-hour price change percentage
            total_volume: parseFloat(tickerResponses[index].volume), // 24-hour trading volume
            market_cap: currentPrice * parseFloat(tickerResponses[index].volume) // Approximation of market cap
          }
        })
        setCoins(coinData)
      } catch (error) {
        console.error("Error fetching coin data:", error) // Just to handle errors
      }
    }

    fetchCoins() // Initial data fetch
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

  // Function to format prices
  const formatPrice = (price) => {
    return price < 1 ? price.toFixed(5) : price.toFixed(2)  // Higher precision for small prices
  };

  // Function to format trading volumes
  const formatVolume = (volume) => {
    return `$${(volume / 1e9).toFixed(2)}B` // Convert to billions with 2 decimal places
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

                  {/* Display coin icon */}
                  <img
                    src={`/${getImageName(coin.symbol)}`}
                    alt={coin.name}
                    className="coin-icon"
                  />

                  {/* Display coin name and symbol */}
                  <span>{coin.name}</span>
                  <span className="coin-symbol">{coin.symbol.replace('USDT', '')}</span>
                </div>
              </td>

              {/* Display formatted current price */}
              <td className="text-right">${formatPrice(coin.current_price)}</td>

              {/* Display price change percentage */}
              <td className={`text-right ${coin.price_change_percentage_1h >= 0 ? "positive-change" : "negative-change"}`}>
                <div className="price-change">
                  {coin.price_change_percentage_1h >= 0 ? (
                    <ArrowUp className="change-icon" />
                  ) : (
                    <ArrowDown className="change-icon" />
                  )}
                  {Math.abs(coin.price_change_percentage_1h).toFixed(2)}% {/* Display absolute value */}
                </div>
              </td>

              {/* Display formatted volume */}
              <td className="text-left">{formatVolume(coin.total_volume)}</td>

              {/* Display Market cap */}
              <td className="text-left">{formatMarketCap(coin.market_cap)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Some css styling */}
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

export default CryptoListings;
