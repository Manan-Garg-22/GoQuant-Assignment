"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

// Component for Spread Indicator Graph
const SpreadIndicator = ({ orderbookData }) => {
  const [spreadHistory, setSpreadHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { bids, asks } = orderbookData;

      // Ensure bids and asks arrays are not empty before proceeding
      if (!bids.length || !asks.length) return;

      // Calculate the current spread: difference between the lowest ask and highest bid
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
  }, [orderbookData]); // Re-runs when orderbookData changes

  // Prepare data for the chart
  const data = {
    // Generate labels using the timestamps in the spread history
    labels: spreadHistory.map((dataPoint) =>
      new Date(dataPoint.timestamp).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Spread (USD)",
        data: spreadHistory.map((dataPoint) => dataPoint.spread), // Map spread values for the chart
        borderColor: "blue",
        backgroundColor: "rgba(135, 206, 250, 0.3)", // Light blue fill
        fill: true,
        tension: 0.1,
        pointRadius: 2,
      },
    ],
  };

  // Chart configuration options
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
      <Line data={data} options={options} />  {/* Render Line Chart */}
    </div>
  );
};

export default SpreadIndicator;