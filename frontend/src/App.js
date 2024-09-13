import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AllUsers from "./Pages/AllUsers"

const App = () => {
  return (
    <BrowserRouter>
     <ToastContainer />
      <Routes>
        <Route path="/Login" element={<LoginLayout />}>
          <Route path="/Login" element={<Login />} />
        </Route>
        {/* <Route path="/Add User" element={<LoginLayout />}>
         
        </Route> */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assign offer" element={<AssignOffer />} />
          <Route path="/add offer" element={<AddOffer />} />
          <Route path="/add domain" element={<AddDomain />} />
          <Route path="/landding pages" element={<LanddingPages />} />
          <Route path="/User Report" element={<UserReport />} />
          <Route path="/offer report" element={<OfferReport />} />
          <Route path="/All Offers" element={<AllOffers />} />
          <Route path="/Network Report" element={<NetworkReport />} />
          <Route path="/All User Offers" element={<AllUserOffers />} />
          <Route path="/Clicks Report" element={<ClickReports />} />
          <Route path="/Today Report" element={<TodayReport />} />
          <Route path="/Yesterday Report" element={<YesterdayReport />} />
          <Route path="/Day Report" element={<DayReport />} />
          <Route path="/Salary" element={<Salary />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/All Reports" element={<AllReports />} />
          <Route path="/All Users" element={<AllUsers />} />
          <Route path="/Add User" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
