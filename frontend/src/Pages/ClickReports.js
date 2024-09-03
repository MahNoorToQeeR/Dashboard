import React from "react";
import { Box, Typography } from "@mui/material";
import ClickReportsTable from "../components/ClickReports/ClickReportsTable";
import DataCards from "../components/ClickReports/DataCards";

const ClickReports = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        SG Report
      </Typography>
      <DataCards/>
      <ClickReportsTable />
    </Box>
  );
};

export default ClickReports;
