import React from "react";
import { Box, Typography } from "@mui/material";
import DayReportCard from "../components/DayReport/DayReportCard";

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
        Days Report
      </Typography>
      <DayReportCard/>
    </Box>
  );
};

export default YesterdayReport;
