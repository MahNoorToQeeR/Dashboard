import React from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
  Grid,
  CardContent,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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

const CardComponent = () => {
  const [personName, setPersonName] = React.useState([]);
  const navigate = useNavigate();

  const handleAssginOffer = () => {
    navigate("/assign offer");
  };
  const handleAllOffer = () => {
    navigate("/all offers");
  };
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
        sx={{
          backgroundColor: "rgb(1, 113, 190)",
          padding: "8px",
          gap: "5px",
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "16px" }}>
          Add Offers
        </Typography>
        <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleAllOffer}
          >
            All Offer
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleAssginOffer}
          >
            Assign Offer
          </Button>
        </Box>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" align="left" gutterBottom>
                      Offer Name *
                    </Typography>
                    <TextField
                      label="Offer Name"
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
                    />
                    <Typography variant="body1" align="left" gutterBottom>
                      Default Offer *
                    </Typography>
                    <TextField
                      label="Default Offer"
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
                    />
                    <Typography variant="body1" align="left" gutterBottom>
                      Select Domain *
                    </Typography>
                    <TextField
                      select
                      label="Select Domain"
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
                      Select Network *
                    </Typography>
                    <TextField
                      select
                      label="Select Network"
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
                    <Typography variant="body1" align="left" gutterBottom>
                      Select LandingPage *
                    </Typography>
                    <TextField
                      select
                      label="Select LandingPage"
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
                      Select Countries *
                    </Typography>
                    <TextField
                      select
                      label="Select Countries"
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
                      <MenuItem value="Option 1">UK</MenuItem>
                      <MenuItem value="Option 2">China</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" align="left" gutterBottom>
                      Offer Rate *
                    </Typography>
                    <TextField
                      label="Offer Rate"
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
                    />
                    <Typography variant="body1" align="left" gutterBottom>
                      Enter Commente *
                    </Typography>
                    <TextField
                      label="Enter Comment"
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
                    />
                    <Typography variant="body1" align="left" gutterBottom>
                      Web Offer *
                    </Typography>
                    <TextField
                      label="Web Offer"
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
                    />
                    <Typography variant="body1" align="left" gutterBottom>
                      Android Offer *
                    </Typography>
                    <TextField
                      label="Android Offer"
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
                    />
                    <Typography variant="body1" align="left" gutterBottom>
                      Ios Offer *
                    </Typography>
                    <TextField
                      label="Ios Offer"
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
                    />
                    <Typography variant="body1" align="left" gutterBottom>
                      Divert offer *
                    </Typography>
                    <TextField
                      label="Divert offer"
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
                    />
                    <Typography variant="body1" align="left" gutterBottom>
                      Referral Status *
                    </Typography>
                    <TextField
                      select
                      label="Referral Status"
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
                    <Typography variant="body1" align="left" gutterBottom>
                      Proxy Status *
                    </Typography>
                    <TextField
                      select
                      label="Proxy Status"
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
                    <Typography variant="body1" align="left" gutterBottom>
                      Devices *
                    </Typography>
                    <TextField
                      label="Devices*"
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Card>
  );
};

export default CardComponent;
