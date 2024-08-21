import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import { Navbar, Sidebar} from "./components";
import Dashboard from "../src/Pages/Dashboard";
import { useStateContext } from "./contexts/ContextProvider";
import AssignOffer from "../src/Pages/AssignOffer";
import AddOffer from "../src/Pages/AddOffer";
import AddDomain from "../src/Pages/AddDomain";
import LanddingPages from "./Pages/LanddingPages";
import UserReport from "../src/Pages/UserReport";
import OfferReport from "../src/Pages/OfferReport";
import AllOffers from "../src/Pages/AllOffers";
import Login from "../src/Pages/Login";
import AddUser from "../src/components/AddUser"
import "./App.css";


const App = () => {
  const {
    currentMode,
    activeMenu,
  } = useStateContext();


  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
 
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/assign offer" element={<AssignOffer />} />
                <Route path="/add offer" element={<AddOffer />} />
                <Route path="/add domain" element={<AddDomain />} />
                <Route path="/landding pages" element={<LanddingPages />} />
                <Route path="/user repot" element={<UserReport />} />
                <Route path="/offer report" element={<OfferReport />} />
                <Route path="/All Offers" element={<AllOffers />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Add User" element={<AddUser />} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
