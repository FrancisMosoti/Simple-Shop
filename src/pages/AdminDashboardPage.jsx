import React from "react";
import { useAuth } from "../context/AuthContext";

const AdminDashboardPage = () => {
  const { logout } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">
        Welcome to the admin dashboard. Manage your store here.
      </p>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboardPage;
