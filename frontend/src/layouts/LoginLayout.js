
import React from "react";
import { Outlet } from "react-router-dom";


const LoginLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default LoginLayout;
