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
    <Typography sx={{
      marginTop: "20px",
      marginBottom: "20px",
      fontSize: "30px"
    }}>Assign Offer</Typography>
     <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <Box sx={{ backgroundColor: "#0171BE", padding: "10px" }}>
              <Typography sx={{ color: "#fff" }}>
                Multi Offers for Single User
              </Typography>
            </Box>
            <CardContent>
              <TextField
                select
                label="Select User"
                variant="outlined"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
              </TextField>
              <TextField
                select
                label="Select Offers"
                variant="outlined"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
              </TextField>
              <Box sx={{ display: "flex", gap: "5px", justifyContent: "end", marginTop: "20px" }}>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
                <Button variant="outlined" color="primary">
                  Reset
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <Box sx={{ backgroundColor: "#0171BE", padding: "10px" }}>
              <Typography sx={{ color: "#fff" }}>
                Multi Offers for Multi Users
              </Typography>
            </Box>
            <CardContent>
              <TextField
                select
                label="Select Users"
                variant="outlined"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
              </TextField>
              <TextField
                select
                label="Select Offers"
                variant="outlined"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
              </TextField>
              <Box sx={{ display: "flex", gap: "5px", justifyContent: "end", marginTop: "20px" }}>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
                <Button variant="outlined" color="primary">
                  Reset
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container fullWidth mt={4}>
        <Grid item xs={12} md={12} sm={6}>
          <Card>
            <Box sx={{ backgroundColor: "#0171BE", padding: "10px" }}>
              <Typography sx={{ color: "#fff" }}>
                Single Offer for Multi Users
              </Typography>
            </Box>
            <CardContent>
              <TextField
                select
                label="Select Users"
                variant="outlined"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
              </TextField>
              <TextField
                select
                label="Select Offers"
                variant="outlined"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
              </TextField>
              <Box sx={{ display: "flex", gap: "5px", justifyContent: "end", marginTop: "20px" }}>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
                <Button variant="outlined" color="primary">
                  Reset
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
