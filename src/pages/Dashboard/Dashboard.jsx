import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import UsersPage from "./UsersPage";
import BlogsPage from "./BlogsPage";

const Dashboard = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="users" element={<UsersPage />} />
        <Route path="blogs" element={<BlogsPage />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
