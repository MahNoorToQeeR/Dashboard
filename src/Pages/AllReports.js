import { Box } from "@mui/material";
import React from "react";
import DataCards from "../components/UserReports/DataCards";
import AllReportsDetailTable from "../components/AllReports/AllReportsDetailTable";

const AllReports = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <DataCards/>
      <AllReportsDetailTable/>
    </Box>
  );
};

export default AllReports;
