import { Box, Typography } from "@mui/material";
import React from "react";
import AllReportsDetailTable from "../components/AllReports/AllReportsDetailTable";

const AllReports = () => {
  return (
    <Box sx={{ margin: "20px" }}>
        <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        All Reports Detail in Charts
      </Typography>
      <AllReportsDetailTable/>
    </Box>
  );
};

export default AllReports;
