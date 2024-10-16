import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AssignOffer from "./Pages/AssignOffer";
import AddOffer from "./Pages/AddOffer";
import AddDomain from "./Pages/AddDomain";
import LanddingPages from "./Pages/LanddingPages";
import UserReport from "./Pages/UserReport";
import OfferReport from "./Pages/OfferReport";
import AllOffers from "./Pages/AllOffers";
import Login from "./Pages/Login";
import AddUser from "./components/AllUsers/AddUser";
import NetworkReport from "./Pages/NetworkReport";
import AllUserOffers from "./Pages/AllUserOffers";
import ClickReports from "./Pages/ClickReports";
import NotFound from "./Pages/NotFound";
import LoginLayout from "./layouts/LoginLayout";  
import MainLayout from "./layouts/MainLayout"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import TodayReport from "./Pages/TodayReport";
import YesterdayReport from "./Pages/YesterdayReport";
import DayReport from "./Pages/DayReport";
import Salary from "./Pages/Salary";
import Settings from "./Pages/Setting";
import AllReports from "./Pages/AllReports";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllUsers from "./Pages/AllUsers";

const PrivateRoute = ({ children, role }) => {
  const userRole = localStorage.getItem("role");
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  
  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  if (role && role !== userRole) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<LoginLayout />}>
          <Route path="/Login" element={<Login />} />
        </Route>
        <Route path="/Add User" element={<LoginLayout />}>
          <Route path="/Add User" element={<AddUser />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/assign offer" element={<PrivateRoute role="admin"><AssignOffer /></PrivateRoute>} />
          <Route path="/add offer" element={<PrivateRoute role="admin"><AddOffer /></PrivateRoute>} />
          <Route path="/add domain" element={<PrivateRoute role="admin"><AddDomain /></PrivateRoute>} />
          <Route path="/landding pages" element={<LanddingPages />} />
          <Route path="/User Report" element={<PrivateRoute role="admin"><UserReport /></PrivateRoute>} />
          <Route path="/offer report" element={<PrivateRoute role="admin"><OfferReport /></PrivateRoute>} />
          <Route path="/All Offers" element={<AllOffers />} />
          <Route path="/Network Report" element={<PrivateRoute role="admin"><NetworkReport /></PrivateRoute>} />
          <Route path="/All User Offers" element={<AllUserOffers />} />
          <Route path="/Clicks Report" element={<PrivateRoute role="admin"><ClickReports /></PrivateRoute>} />
          <Route path="/Today Report" element={<PrivateRoute role="admin"><TodayReport /></PrivateRoute>} />
          <Route path="/Yesterday Report" element={<PrivateRoute role="admin"><YesterdayReport /></PrivateRoute>} />
          <Route path="/Day Report" element={<PrivateRoute role="admin"><DayReport /></PrivateRoute>} />
          <Route path="/Salary" element={<Salary />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/All Reports" element={<AllReports />} />
          <Route path="/All Users" element={<AllUsers />} />
        </Route>
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
