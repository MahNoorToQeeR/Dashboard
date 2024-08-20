import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

const CardComponent = () => {
  return (
      <Card sx={{ mt: 4 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ backgroundColor: "#0171be", padding: "10px", gap: "5px" }}
        >
          <Typography sx={{ color: "#fff" }}>
            Multi Offers for Multi Users
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ padding: "8px" }}>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{width: "50% !important"}}>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Select Users
                </Typography>
                <TextField
                  select
                  label="select users"
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
                  <MenuItem value="Option 1">1</MenuItem>
                  <MenuItem value="Option 2">2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Select Offers
                </Typography>
                <TextField
                  select
                  label="Plesae select offers"
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
                  <MenuItem value="Option 1">1</MenuItem>
                  <MenuItem value="Option 2">2</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                justifyContent: "end",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  height: "25px",
                  fontSize: "10px",
                }}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                sx={{
                  color: "#0171be",
                  borderColor: "#0171be",
                  height: "25px",
                  fontSize: "10px",
                }}
              >
                Reset
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    );
};

export default CardComponent;
