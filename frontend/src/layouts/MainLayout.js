import React from "react";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Sidebar } from "../components";

const MainLayout = () => {
  const { currentMode, activeMenu } = useStateContext();

  return (
    // <div className="flex relative dark:bg-main-dark-bg">
    // {activeMenu ? (
    //   <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
    //     <Sidebar />
    //   </div>
    // ) : (
    //   <div className="w-0 dark:bg-secondary-dark-bg">
    //     <Sidebar />
    //   </div>
    // )}
    // <div
    //   className={
    //     activeMenu
    //       ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72  pl-0 w-87 bg-color"
    //       : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 pl-70 bg-color"
    //   }
    // >
    //   <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
    //     <Navbar />
    //   </div>
    <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
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
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72  pl-0 w-87 bg-color"
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 pl-70 bg-color"
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
        <div className="p-4">
          {/* The Outlet component renders the matching child route's element */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
