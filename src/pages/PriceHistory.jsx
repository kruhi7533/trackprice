import React from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const PriceHistory = () => {
  const { id } = useParams(); // ✅ Get product ID from the URL

  // Dummy price history data (replace with actual data later)
  const priceData = [
    { date: "Mar 1", price: 120 },
    { date: "Mar 5", price: 115 },
    { date: "Mar 10", price: 110 },
    { date: "Mar 15", price: 130 },
    { date: "Mar 20", price: 125 },
    { date: "Mar 25", price: 140 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Price History</h1>
      <p className="text-gray-600 text-lg mb-6">Tracking price for product ID: <span className="font-semibold text-blue-600">{id}</span></p>

      {/* Chart Container */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Price Trend</h2>

        {/* Responsive Price Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={priceData}>
            <XAxis dataKey="date" stroke="#888888" />
            <YAxis domain={["auto", "auto"]} stroke="#888888" />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="price" stroke="#4F46E5" strokeWidth={3} dot={{ r: 5, fill: "#4F46E5" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
      >
        ← Go Back
      </button>
    </div>
  );
};

export default PriceHistory;
