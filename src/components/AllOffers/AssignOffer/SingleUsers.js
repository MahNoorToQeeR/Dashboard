import React from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

const SingleUsers = () => {
  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "#0171be", padding: "10px", gap: "5px" }}
      >
        <Typography sx={{ color: "#fff" }}>
          Multi Offers for Single User
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} fullWidth>
          <Grid item md={12}>
            <TextField
              select
              label="Select User"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              sx={{
                "& .MuiInputBase-root": {
                  height: 32,
                },
                "& .MuiOutlinedInput-input": {
                  padding: "6px 14px",
                },
              }}
            >
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField
              select
              label="Select Offers"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              sx={{
                "& .MuiInputBase-root": {
                  height: 32,
                },
                "& .MuiOutlinedInput-input": {
                  padding: "6px 14px",
                },
              }}
            >
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" sx={{ mr: 1 }}>
          Submit
        </Button>
        <Button variant="outlined" color="primary">
          Reset
        </Button>
      </Grid>
    </Card>
  );
};

export default SingleUsers;
