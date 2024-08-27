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
  const [formValues, setFormValues] = React.useState({
    offerName: "",
    defaultOffer: "",
    domain: "",
    network: "",
    users: [],
    landingPage: "",
    countries: "",
    offerRate: "",
    comment: "",
    webOffer: "",
    androidOffer: "",
    iosOffer: "",
    divertOffer: "",
    referralStatus: "",
    proxyStatus: "",
    devices: "",
  });
  const [errors, setErrors] = React.useState({});
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

    // Clear the error if there are selected users
    if (value.length > 0) {
      setErrors({ ...errors, users: '' });
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validateForm = () => {
    const newErrors = {};
    // Check for empty fields
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key] || formValues[key].length === 0) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit the form or perform further actions
      console.log("Form submitted successfully", formValues);
    }
  };
  const handleReset = () => {
    setFormValues({
      offerName: "",
      defaultOffer: "",
      domain: "",
      network: "",
      users: [],
      landingPage: "",
      countries: "",
      offerRate: "",
      comment: "",
      webOffer: "",
      androidOffer: "",
      iosOffer: "",
      divertOffer: "",
      referralStatus: "",
      proxyStatus: "",
      devices: "",
    });
    setErrors({});
    setPersonName([]);
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
                      name="offerName"
                      value={formValues.offerName}
                      onChange={handleInputChange}
                      label="Offer Name"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.offerName}
                      helperText={errors.offerName}
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
                      name="defaultOffer"
                      value={formValues.defaultOffer}
                      onChange={handleInputChange}
                      label="Default Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.defaultOffer}
                      helperText={errors.defaultOffer}
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
                      name="domain"
                      value={formValues.domain}
                      onChange={handleInputChange}
                      select
                      label="Select Domain"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.domain}
                      helperText={errors.domain}
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
                      name="network"
                      value={formValues.network}
                      onChange={handleInputChange}
                      select
                      label="Select Network"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.network}
                      helperText={errors.network}
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
                      error={!!errors.users}
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
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </Select>
                      {errors.users && (
                        <Typography color="error">{errors.users}</Typography>
                      )}
                    </FormControl>
                    <Typography variant="body1" align="left" gutterBottom>
                      Select LandingPage *
                    </Typography>
                    <TextField
                      name="landingPage"
                      value={formValues.landingPage}
                      onChange={handleInputChange}
                      label="Landing Page"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.landingPage}
                      helperText={errors.landingPage}
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
                      name="countries"
                      value={formValues.countries}
                      onChange={handleInputChange}
                      label="Countries"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.countries}
                      helperText={errors.countries}
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
                      name="offerRate"
                      value={formValues.offerRate}
                      onChange={handleInputChange}
                      label="Offer Rate"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.offerRate}
                      helperText={errors.offerRate}
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
                      name="comment"
                      value={formValues.comment}
                      onChange={handleInputChange}
                      label="Comment"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.comment}
                      helperText={errors.comment}
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
                      name="webOffer"
                      value={formValues.webOffer}
                      onChange={handleInputChange}
                      label="Web Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.webOffer}
                      helperText={errors.webOffer}
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
                      name="androidOffer"
                      value={formValues.androidOffer}
                      onChange={handleInputChange}
                      label="Android Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.androidOffer}
                      helperText={errors.androidOffer}
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
                      name="iosOffer"
                      value={formValues.iosOffer}
                      onChange={handleInputChange}
                      label="iOS Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.iosOffer}
                      helperText={errors.iosOffer}
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
                      name="divertOffer"
                      value={formValues.divertOffer}
                      onChange={handleInputChange}
                      label="Divert Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.divertOffer}
                      helperText={errors.divertOffer}
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
                      name="referralStatus"
                      value={formValues.referralStatus}
                      onChange={handleInputChange}
                      label="Referral Status"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.referralStatus}
                      helperText={errors.referralStatus}
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
                      name="proxyStatus"
                      value={formValues.proxyStatus}
                      onChange={handleInputChange}
                      label="Proxy Status"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.proxyStatus}
                      helperText={errors.proxyStatus}
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
                      name="devices"
                      value={formValues.devices}
                      onChange={handleInputChange}
                      label="Devices"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      error={!!errors.devices}
                      helperText={errors.devices}
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
                    onClick={handleSubmit}
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
                    onClick={handleReset}
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
