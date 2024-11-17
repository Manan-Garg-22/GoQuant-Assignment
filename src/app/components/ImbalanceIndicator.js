"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, registerables } from "chart.js"
import { useTheme } from 'next-themes'

ChartJS.register(...registerables)

const ImbalanceIndicator = ({ orderbookData }) => {
  const [imbalanceHistory, setImbalanceHistory] = useState([])  // State to store the imbalance history over time
  const { theme } = useTheme()

  // Effect to calculate and update imbalance data at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      const { bids, asks } = orderbookData // Extract bids and asks from the orderbook data

      // Return if there are no bids or asks
      if (!bids.length || !asks.length) return

      // Calculate the total bid volume
      const bidVolume = bids.reduce((sum, bid) => sum + parseFloat(bid[1]), 0)
      // Calculate the total ask volume
      const askVolume = asks.reduce((sum, ask) => sum + parseFloat(ask[1]), 0)
      // Calculate the current imbalance as the ratio of bid volume to total volume
      const currentImbalance = bidVolume / (bidVolume + askVolume)
      // Get the current timestamp
      const timestamp = Date.now()

      // Update the imbalance history, keeping only the last 60 seconds of data
      setImbalanceHistory((prev) => {
        const updatedHistory = prev.filter(
          (dataPoint) => timestamp - dataPoint.timestamp <= 60000 // Retain points within the last 60 seconds
        )
        return [...updatedHistory, { imbalance: currentImbalance, timestamp }]
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [orderbookData])

  // Prepare data for the chart
  const data = {
    labels: imbalanceHistory.map((dataPoint) =>
      new Date(dataPoint.timestamp).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Imbalance",
        data: imbalanceHistory.map((dataPoint) => dataPoint.imbalance),
        borderColor: theme === 'dark' ? "#8b5cf6" : "#6d28d9",
        backgroundColor: theme === 'dark' ? "rgba(139, 92, 246, 0.1)" : "rgba(109, 40, 217, 0.1)",
        tension: 0.1,
        pointRadius: 2,
        fill: true,
      },
    ],
  }

  // Chart configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
        ticks: {
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
        grid: {
          color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Imbalance",
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
        ticks: {
          color: theme === 'dark' ? "#ffffff" : "#000000",
        },
        grid: {
          color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        min: 0,
        max: 1,
      },
    },
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Imbalance Indicator</h3>
      {/* Imbalance Line graph */}
      <Line data={data} options={options} />
    </div>
  )
}

export default ImbalanceIndicator;