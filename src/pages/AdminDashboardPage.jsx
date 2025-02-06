import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  // Mock data for analytics
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [5000, 7000, 6000, 8000, 9000, 10000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const productComparisonData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 3000, 2500],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const inventoryData = {
    labels: ["In Stock", "Out of Stock"],
    datasets: [
      {
        label: "Inventory Status",
        data: [85, 15],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Navigation Links */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate("/admin/analytics")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Analytics
        </button>
        <button
          onClick={() => navigate("/admin/products")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Product Management
        </button>
      </div>

      {/* Nested Routes */}
      <Outlet />
    </div>
  );
};

export default AdminDashboardPage;
