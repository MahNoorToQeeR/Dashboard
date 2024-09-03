import { Box } from "@mui/material";
import React from "react";
import DataCards from "../components/UserReports/DataCards";
import UserReportTable from "../components/UserReports/UserReportTable";

const UserReport = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <DataCards/>
      <UserReportTable/>
    </Box>
  );
};

export default UserReport;
