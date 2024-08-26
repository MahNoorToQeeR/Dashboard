import React from "react";
import { Box, Typography } from "@mui/material";
import TodayReportTable from "../components/TodayReport/TodayReportTable";
import DataCards from "../components/TodayReport/DataCards";

const TodayReport = () => {
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
      <TodayReportTable />
    </Box>
  );
};

export default TodayReport;
