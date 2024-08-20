import React from "react";
import {
  Typography,
  Box,
} from "@mui/material";
import DomainManagement from "../components/AddDomain/DomainManagement";


const AddDomain = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        Add Domain
      </Typography>
      <DomainManagement/>

    </Box>
  );
};

export default AddDomain;
