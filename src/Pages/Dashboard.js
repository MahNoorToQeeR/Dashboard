import React from "react";
import {
  Box,
} from "@mui/material";

import CardComponent from "../components/Dashboard/CardComponent";
import DataCards from "../components/Dashboard/DataCards";

const Dashboard = () => {


  return (
    <Box sx={{ margin: "20px" }}>
      <DataCards/>
      <CardComponent/>
    </Box>
  );
};

export default Dashboard;
