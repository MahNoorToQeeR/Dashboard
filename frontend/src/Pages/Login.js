import React from "react";
import { Box } from "@mui/material";
import CardComponent from "../components/Login/CardComponent";
import backgroundImage from "../../src/data/background-login.png";

const Login = () => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100vw",
        position: "relative", 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#0171be73", 
          zIndex: 1, 
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <CardComponent />
      </Box>
    </Box>
  );
};

export default Login;
