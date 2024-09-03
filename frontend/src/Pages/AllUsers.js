import React from "react";
import { Box, Typography } from "@mui/material";
import AllUsersRecordeTable from "../components/AllUsers/AllUsersRecordeTable"


const AllUsers = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        SG Report
      </Typography>
      <AllUsersRecordeTable/>

    </Box>
  );
};

export default AllUsers;
