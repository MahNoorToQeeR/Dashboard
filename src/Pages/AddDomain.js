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
        Add Domain{" "}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={6}>
          <Card>
            <Box sx={{ backgroundColor: "#0171BE", padding: "10px" }}>
              <Typography sx={{ color: "#fff" }}>Add Domain Page</Typography>
            </Box>
            <CardContent sx={{ display: "flex", gap: "5px" }}>
              <TextField
                label="Domain Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Domain URL"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <Box
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssignOffer;
