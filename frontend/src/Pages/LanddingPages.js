import React from "react";
import {
  Typography,
  Box,
} from "@mui/material";
import LanddingPagesManage from "../components/LanddingPages/LanddingPagesManage";


const LanddingPages = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        Landding Page
      </Typography>
      <LanddingPagesManage/>

    </Box>
  );
};

export default LanddingPages;
