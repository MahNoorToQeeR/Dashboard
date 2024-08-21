import React, {useState} from "react";
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
  const [personName, setPersonName] = React.useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "#0171be", padding: "10px", gap: "5px" }}
      >
        <Typography sx={{ color: "#fff" }}>  Single Offers for Multi Users </Typography>
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
                          <option
                            key={name}
                            value={name}
                          >
                            {name}
                          </option>
                        ))}
                      </Select>
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
      </Paper>
    </Card>
  );
};

export default SingleOffer;
