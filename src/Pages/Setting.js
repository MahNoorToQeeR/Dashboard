import { Box, Typography } from "@mui/material";
import React from "react";
import Setting from "../components/Settings/Setting"

const Settings = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        Update User 
      </Typography>
      <Setting/>
    </Box>
  );
};

export default Settings;
