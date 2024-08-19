import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Box,
} from "@mui/material";
import SingleUsers from "../components/AllOffers/AssignOffer/SingleUsers";

const AssignOffer = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        Assign Offer
      </Typography>
      <Grid container spacing={2} fullWidth mt={4}>
        <SingleUsers />
        <SingleUsers />
      </Grid>
    </Box>
  );
};

export default AssignOffer;
