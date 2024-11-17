"use client"

import { useEffect, useRef } from "react"
import { Chart } from "chart.js"
import { CandlestickController, CandlestickElement } from "chartjs-chart-financial"
import 'chartjs-adapter-date-fns'
import { useTheme } from 'next-themes'

Chart.register(CandlestickController, CandlestickElement)

const CandlestickChart = ({ ohlcData, currencyPair, fetchNewData }) => {
  const canvasRef = useRef(null) // Reference to the canvas DOM element
  const chartRef = useRef(null) // Reference to the Chart.js instance
  const { theme } = useTheme()

  // Effect to create and update the chart whenever data changes
  useEffect(() => {
    if (!ohlcData || ohlcData.length === 0 || !canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d") // Get the drawing context of the canvas
    if (!ctx) return

    // Configuration for the candlestick chart
    const chartConfig = {
      type: "candlestick",
      data: {
        datasets: [
          {
            label: currencyPair,
            data: ohlcData.map(d => ({
              x: d.t,
              o: d.o,
              h: d.h,
              l: d.l,
              c: d.c,
            })),
            borderColor: {
              up: theme === 'dark' ? "#22c55e" : "#15803d",
              down: theme === 'dark' ? "#ef4444" : "#b91c1c",
            },
            backgroundColor: {
              up: theme === 'dark' ? "#22c55e" : "#15803d",
              down: theme === 'dark' ? "#ef4444" : "#b91c1c",
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
              color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: theme === 'dark' ? "#ffffff" : "#000000",
            },
          },
          y: {
            grid: {
              color: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: theme === 'dark' ? "#ffffff" : "#000000",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: context => {
                const point = context.raw // Access the data point being hovered
                return [
                  `Open: ${point.o}`,
                  `High: ${point.h}`,
                  `Low: ${point.l}`,
                  `Close: ${point.c}`,
                ] // Tooltip displaying OHLC data
              },
            },
            backgroundColor: theme === 'dark' ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
            titleColor: theme === 'dark' ? "#ffffff" : "#000000",
            bodyColor: theme === 'dark' ? "#ffffff" : "#000000",
            borderColor: theme === 'dark' ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
            borderWidth: 1,
          },
        },
      },
    }

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    // Create a new chart instance
    chartRef.current = new Chart(ctx, chartConfig)

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [ohlcData, currencyPair, theme])

  // Effect to fetch new data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (fetchNewData) {
        fetchNewData()
      }
    }, 10000) // Fetch every 10 seconds

    return () => clearInterval(interval)
  }, [fetchNewData])

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{currencyPair} Candlestick Chart</h3>
      
      {/* candlestick chart container and canvas */}
      <div className="h-[400px]">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  )
}

export default CandlestickChart;