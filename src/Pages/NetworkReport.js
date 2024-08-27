
import { Box, Typography } from "@mui/material";
import React from "react";
import NetworkManagement from "../components/AddNetwork/NetworkManagement";

const NetworkReport = () => {
  return (
    <Box sx={{ margin: "20px" }}>
        <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        All Networks
      </Typography>
      <NetworkManagement/>
    </Box>
  );
};

export default NetworkReport;
