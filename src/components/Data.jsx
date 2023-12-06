import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";

const Data = () => {
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales (in USD)",
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Customer Visits",
        data: [400, 300, 200, 450, 500, 600],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src="https://www.kyubit.com/Images/Analytical-Dashboard/Analytical-Dashboard.webp"
            alt="manager"
            className="img-fluid"
          />
          <h1 className="text-center mt-4">Data Analytics Dashboard</h1>
          <p className="text-center">
            Unlock the power of data with our comprehensive Analytics Dashboard.
            Designed for businesses and data-driven decision-makers, our
            dashboard transforms complex data into clear, actionable insights.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Monthly Sales Overview</h2>
          <p>
            Track monthly sales trends with our interactive bar chart. Visualize
            your revenue growth and identify key areas for business expansion.
          </p>
          <Bar data={barChartData} />
        </div>
        <div className="col-md-6">
          <h2>Customer Engagement Metrics</h2>
          <p>
            Monitor customer engagement and traffic patterns using our dynamic
            line chart. Understand your audience and optimize your marketing
            strategies.
          </p>
          <Line data={lineChartData} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Get in Touch</h2>
          <p>
            Need expert accounting services?{" "}
            <Link to="/register">Register</Link> for tailored solutions that fit
            your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
