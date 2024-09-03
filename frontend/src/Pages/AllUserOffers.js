import { Box, Typography } from "@mui/material";
import React from "react";
import AllUserOffersTable from "../components/AllUserOffers/AllUserOffersTable";

const AllUserOffers = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        All User Offers
      </Typography>
      <AllUserOffersTable/>
    </Box>
  );
};

export default AllUserOffers;
