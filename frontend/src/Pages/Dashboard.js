import React from "react";
import { Box, Grid } from "@mui/material";

import CardComponent from "../components/Dashboard/CardComponent";
import DataCards from "../components/Dashboard/DataCards";
import AllReportsDetailTable from "../components/Dashboard/AllReportsDetailTable";

const Dashboard = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataCards />
        </Grid>
        <Grid item xs={12}>
          <AllReportsDetailTable />
        </Grid>
        <Grid item xs={12}>
          <CardComponent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
