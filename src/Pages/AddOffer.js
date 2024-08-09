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
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
  
];

const AssignOffer = () => {
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
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        Add Offers
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12}>
          <Card>
            <Box sx={{ backgroundColor: "#0171BE", padding: "10px" }}>
              <Typography sx={{ color: "#fff" }}>
                Single Offer for Multi Users
              </Typography>
            </Box>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Offer Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Default Offer"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    select
                    label="Select Domain"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="Option 1">Option 1</MenuItem>
                    <MenuItem value="Option 2">Option 2</MenuItem>
                  </TextField>
                  <TextField
                    select
                    label="Select Network"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="Option 1">Option 1</MenuItem>
                    <MenuItem value="Option 2">Option 2</MenuItem>
                  </TextField>
                  <FormControl fullWidth sx={{ mt: 1, minWidth: 120, maxWidth: '100%', height: "233px" }}>
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
                      sx={{height: "233px" }}
                    >
                      {names.map((name) => (
                        <option key={name} value={name} sx={{height: "190px" }}>
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    select
                    label="Select LandingPage"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="Option 1">Option 1</MenuItem>
                    <MenuItem value="Option 2">Option 2</MenuItem>
                  </TextField>
                  <TextField
                    select
                    label="Select Countries"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="Option 1">UK</MenuItem>
                    <MenuItem value="Option 2">China</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Offer Rate"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Enter Comment"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Web Offer"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Android Offer"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Ios Offer"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Divert offer"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    select
                    label="Referral Status"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="Option 1">1</MenuItem>
                    <MenuItem value="Option 2">2</MenuItem>
                  </TextField>
                  <TextField
                    select
                    label="Proxy Status"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="Option 1">1</MenuItem>
                    <MenuItem value="Option 2">2</MenuItem>
                  </TextField>
                  <TextField
                    label="Devices*"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
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
