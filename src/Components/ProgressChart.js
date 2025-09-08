import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "./ProgressChart.css";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function ProgressChart({ habits }) {
  const data = {
    labels: habits.map((habit) => habit.name),
    datasets: [
      {
        label: "Days Completed",
        data: habits.map((habit) => habit.completedDays.length),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} />
    </div>
  );
}

export default ProgressChart;
