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
import MultiUsers from "../components/AllOffers/AssignOffer/MultiUsers";
import SingleOffer from "../components/AllOffers/AssignOffer/SingleOffer";



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
        <Box sx={{display: "flex", justifyContent:"center", gap:"10px"}}>
        <SingleUsers />
        <MultiUsers />
        </Box>
        <SingleOffer/>
    </Box>
  );
};

export default AssignOffer;
