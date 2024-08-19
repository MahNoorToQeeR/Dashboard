import React from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
} from "@mui/material";

const CardComponent = () => {
  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "rgb(103, 160, 205)", padding: "10px", gap: "5px" }}
      >
        <Typography sx={{ color: "#fff" }}></Typography>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}></Paper>
    </Card>
  );
};

export default CardComponent;
