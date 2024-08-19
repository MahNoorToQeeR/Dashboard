import React from "react";
import { Box, Typography } from "@mui/material";
import CardComponent from "../components/AllOffers/CardComponent";

const AllOffers = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        All Offers
      </Typography>
      <CardComponent/>
    </Box>
  );
};

export default AllOffers;
