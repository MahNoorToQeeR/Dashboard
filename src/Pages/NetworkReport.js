
import { Box, Typography } from "@mui/material";
import React from "react";
import NetworkReportTable from "../components/NetworkReport/NetworkReportTable";

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
      <NetworkReportTable/>
    </Box>
  );
};

export default NetworkReport;
