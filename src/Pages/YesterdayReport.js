import React from "react";
import { Box, Typography } from "@mui/material";
import YesterdayReportTable from "../components/Yesterday/YesterdayReportTable";
import DataCards from "../components/Yesterday/DataCards";

const YesterdayReport = () => {
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
      <YesterdayReportTable />
    </Box>
  );
};

export default YesterdayReport;
