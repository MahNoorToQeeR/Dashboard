import React, { useState } from "react";
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
  const [user, setUser] = useState("");
  const [offer, setOffer] = useState("");
  const [errors, setErrors] = useState({ user: "", offer: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!user) {
      setErrors((prev) => ({ ...prev, user: "User is required" }));
      hasError = true;
    }

    if (!offer) {
      setErrors((prev) => ({ ...prev, offer: "Offer is required" }));
      hasError = true;
    }

    if (!hasError) {
      // Log form data to the console
      console.log({
        user,
        offer,
      });
    }
  };

  const handleReset = () => {
    setUser("");
    setOffer("");
    setErrors({ user: "", offer: "" });
  };

  return (
    <Card sx={{ mt: 4, width: "100%" }}>
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
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ width: "430px" }}>
              <Typography variant="body1" align="left" gutterBottom>
                Select Users
              </Typography>
              <TextField
                select
                label="Select User"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                  setErrors((prev) => ({ ...prev, user: "" }));
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: 32,
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "6px 14px",
                  },
                }}
                error={!!errors.user}
                helperText={errors.user}
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="left" gutterBottom>
                Select Offers
              </Typography>
              <TextField
                select
                label="Please select offers"
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                value={offer}
                onChange={(e) => {
                  setOffer(e.target.value);
                  setErrors((prev) => ({ ...prev, offer: "" }));
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: 32,
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "6px 14px",
                  },
                }}
                error={!!errors.offer}
                helperText={errors.offer}
              >
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
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
              onClick={handleSubmit}
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
              onClick={handleReset}
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
