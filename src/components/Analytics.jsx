import React from "react";
import { Bar, Pie } from "react-chartjs-2";

const Analytics = ({ salesData, productComparisonData, inventoryData }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Analytics</h2>

      {/* Sales Performance Graph */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Sales Performance</h3>
        <Bar data={salesData} />
      </div>

      {/* Product Comparison Chart */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Product Comparison</h3>
        <Pie data={productComparisonData} />
      </div>

      {/* Inventory Status */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Inventory Status</h3>
        <Pie data={inventoryData} />
      </div>
    </div>
  );
};

export default Analytics;
