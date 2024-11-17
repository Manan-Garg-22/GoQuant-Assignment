"use client"

import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js"
import { useTheme } from 'next-themes'
import { fetchOrderbook } from "../lib/api"  // Function to fetch orderbook data from an API

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const MarketDepthChart = ({ selectedCurrency }) => {
  const [bids, setBids] = useState([]) // Array to store bid orders
  const [asks, setAsks] = useState([]) // Array to store ask orders
  const [midMarketPrice, setMidMarketPrice] = useState(null) // Mid-market price calculation
  const { theme } = useTheme()

  // Function to fetch and process orderbook data
  const fetchOrderBookData = async () => {
    try {
      const data = await fetchOrderbook(selectedCurrency)
      // Formatting bids and asks into price and quantity
      const formattedBids = data.bids.map((bid) => ({
        price: parseFloat(bid[0]),
        quantity: parseFloat(bid[1]),
      }))
      const formattedAsks = data.asks.map((ask) => ({
        price: parseFloat(ask[0]),
        quantity: parseFloat(ask[1]),
      }))

      // Adding cumulative quantity to bids and asks for market depth
      const bidsWithCumulativeQty = calculateCumulativeDepth(formattedBids)
      const asksWithCumulativeQty = calculateCumulativeDepth(formattedAsks)

      // Updating state with processed data
      setBids(bidsWithCumulativeQty.reverse()) // Reversing bids for chart order
      setAsks(asksWithCumulativeQty)

      // Calculating mid-market price as the average of top bid and ask
      setMidMarketPrice(
        (parseFloat(data.bids[0][0]) + parseFloat(data.asks[0][0])) / 2
      )
    } catch (error) {
      console.error("Error fetching orderbook data:", error)
    }
  }

   // Function to calculate cumulative depth for bids and asks
  const calculateCumulativeDepth = (orders) => {
    let cumulativeQty = 0
    return orders.map((order) => {
      cumulativeQty += order.quantity
      return { ...order, cumulativeQty }
    })
  }

  // Effect to fetch data periodically and update the chart
  useEffect(() => {
    fetchOrderBookData()
    const interval = setInterval(fetchOrderBookData, 1000) // Refresh every second
    return () => clearInterval(interval)
  }, [selectedCurrency])

  const chartData = {
    labels: [...bids.map((bid) => bid.price), ...asks.map((ask) => ask.price)], // Combining bid and ask prices
    datasets: [
      {
        label: "Market Depth",
        data: [
          ...bids.map((bid) => bid.cumulativeQty),
          ...asks.map((ask) => ask.cumulativeQty),
        ],
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: (context) => {
          const chartLabels = context.chart.data.labels
          return chartLabels.map((price) =>
            price <= midMarketPrice
              ? theme === 'dark' ? "rgba(34, 197, 94, 0.5)" : "rgba(21, 128, 61, 0.5)"
              : theme === 'dark' ? "rgba(239, 68, 68, 0.5)" : "rgba(185, 28, 28, 0.5)"
          )
        },
        fill: true,
        tension: 0.1,
      },
    ],
  }

  // Chart configuration options
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Price (USD)",
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
        grid: {
          display: false,
        },
        ticks: {
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cumulative Quantity",
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
        ticks: {
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
        grid: {
          color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
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
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{selectedCurrency} Depth Chart</h2>
      {/* Line chart */}
      <Line data={chartData} options={chartOptions} />
      {/* Mid Market Price */}
      <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
        Mid Market Price: {midMarketPrice?.toFixed(2)}
      </p>
    </div>
  )
}

export default MarketDepthChart;

