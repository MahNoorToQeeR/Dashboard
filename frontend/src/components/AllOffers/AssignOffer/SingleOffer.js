import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const SingleOffer = () => {
  const [personName, setPersonName] = useState([]);
  const [offer, setOffer] = useState("");
  const [errors, setErrors] = useState({ personName: "", offer: "" });

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
    // Clear error when selection is made
    setErrors((prev) => ({ ...prev, personName: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    // Validation
    if (personName.length === 0) {
      setErrors((prev) => ({ ...prev, personName: "At least one user must be selected" }));
      hasError = true;
    }

    if (!offer) {
      setErrors((prev) => ({ ...prev, offer: "Offer must be selected" }));
      hasError = true;
    }

    if (!hasError) {
      // Log data to console
      console.log({
        offer,
        users: personName,
      });
      // Optionally, you can clear the form here if needed
    }
  };

  const handleReset = () => {
    setPersonName([]);
    setOffer("");
    setErrors({ personName: "", offer: "" });
  };

  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "#0171be", padding: "10px", gap: "5px" }}
      >
        <Typography sx={{ color: "#fff" }}>Single Offers for Multi Users</Typography>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Grid container spacing={2} sx={{ padding: "8px" }}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Select Offers
                </Typography>
                <TextField
                  select
                  label="Select Offers"
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
                <Typography variant="body1" align="left" gutterBottom>
                  Select Users *
                </Typography>
                <FormControl
                  variant="outlined"
                  fullWidth
                  size="small"
                  margin="normal"
                  sx={{
                    mt: 1,
                    minWidth: 120,
                    maxWidth: "100%",
                    "& .MuiInputBase-root": {
                      height: 158,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 14px",
                    },
                  }}
                  error={!!errors.personName}
                >
                  <InputLabel shrink htmlFor="select-multiple-native">
                    Select Users
                  </InputLabel>
                  <Select
                    multiple
                    native
                    value={personName}
                    onChange={handleChangeMultiple}
                    label="Select Users"
                    inputProps={{
                      id: "select-multiple-native",
                    }}
                  >
                    {names.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                  {errors.personName && <FormHelperText>{errors.personName}</FormHelperText>}
                </FormControl>
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
      </Paper>
    </Card>
  );
};

export default SingleOffer;
