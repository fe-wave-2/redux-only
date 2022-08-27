import React from "react";
import { Line } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30],
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default BarChart;
