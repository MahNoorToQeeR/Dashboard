import { Box } from "@mui/material";
import React from "react";
import SalaryTable from "../components/Salary/SalaryTable";
import DataCards from "../components/Salary/DataCards";

const Salary = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <DataCards/>
      <SalaryTable/>
    </Box>
  );
};

export default Salary;
