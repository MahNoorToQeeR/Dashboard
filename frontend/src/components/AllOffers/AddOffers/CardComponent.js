import React, { useEffect, useState } from "react";
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
import { getAllDomains, getAllLandingData, AddOffers } from "../../../api/axiosInterceptors";
import { useForm } from "react-hook-form";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
];

const CardComponent = () => {
  const [personName, setPersonName] = useState([]);
  const {
    register,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [domains, setDomains] = useState([]);
  const [landingPages, setLandingPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDomains = async () => {
    try {
      const res = await getAllDomains();
      const fetchedDomains = res?.data?.data;

      setDomains(fetchedDomains);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching domains: ", error);
      setLoading(false);
    }
  };
  const fetchLandingData = async () => {
    try {
      const res = await getAllLandingData();
      const fetchedLandingData = res?.data?.data;
      setLandingPages(fetchedLandingData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching landing pages: ", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDomains();
    fetchLandingData();
  }, []);
  const handleAssginOffer = () => {
    navigate("/assign offer");
  };
  const handleAllOffer = () => {
    navigate("/all offers");
  };
  const handleUserChange = (selectedUsers) => {
    setPersonName(selectedUsers);
    setValue("users", selectedUsers);
  };
  const handleAddDomain = async (data) => {
    const body = {
      domain: data.domain, offerData: data,
      landingPage: data.landingPage, offerData: data

    }
    try {
      debugger;

        const response = await AddOffers(body);
        console.log("Response from API:", response.data);

        reset();
    } catch (error) {
        console.error("Error adding offer:", error);
        if (error.response) {
            console.error("Server responded with:", error.response.data);
        } else {
            console.error("Error message:", error.message);
        }
    }
};
  const handleReset = () => {
    reset();
    setPersonName([]);
  }
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
          >''
            Assign Offer
          </Button>
        </Box>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sm={12}>
            <Card>
              <CardContent onSubmit={handleSubmit(handleAddDomain)} component={"form"}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" align="left" gutterBottom>
                      Offer Name *
                    </Typography>
                    <TextField
                      name="offerName"
                      id="offerName"
                      label="Offer Name"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("offerName", {
                        required: {
                          value: true,
                          message: "offerName is required",
                        },
                      })}
                      error={Boolean(errors.offerName)}
                      helperText={errors.offerName?.message}
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
                      id="defaultOffer"
                      label="Default Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("defaultOffer", {
                        required: {
                          value: true,
                          message: "defaultOffer is required",
                        },
                      })}
                      error={Boolean(errors.defaultOffer)}
                      helperText={errors.defaultOffer?.message}
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
                      label="Please select domain"
                      name="domain"
                      id="domain"
                      variant="outlined"
                      size="small"
                      fullWidth
                      select
                      margin="normal"
                      {...register("domain", {
                        required: {
                          value: true,
                          message: "Domain is required",
                        },
                      })}
                      value={watch('domain') || ''}  
                      onChange={(e) => {
                        setValue('domain', e.target.value); 
                        clearErrors('domain');
                      }} 
                      error={Boolean(errors.domain)}
                      helperText={errors.domain?.message}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 32,
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "6px 14px",
                        },
                      }}
                    >
                      {domains.map((domain) => (
                        <MenuItem key={domain._id} value={domain._id}>
                          {domain.name}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Typography variant="body1" align="left" gutterBottom>
                      Select Network *
                    </Typography>
                    <TextField
                      name="network"
                      id="network"
                      select
                      label="Select Network"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("network", {
                        required: {
                          value: true,
                          message: "network is required",
                        },
                      })}
                      value={watch('network') || ''}  
                      onChange={(e) => {
                        setValue('network', e.target.value); 
                        clearErrors('network');
                      }} 
                      error={Boolean(errors.network)}
                      helperText={errors.network?.message}
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
                        onChange={(e) => handleUserChange([...e.target.selectedOptions].map(o => o.value))}
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

                    </FormControl>
                    <Typography variant="body1" align="left" gutterBottom>
                      Select LandingPage *
                    </Typography>
                    <TextField
                      name="landingPage"
                      id="landingPage"
                      select
                      label="Landing Page"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("landingPage", {
                        required: {
                          value: true,
                          message: "landingPage is required",
                        },
                      })}
                      value={watch('landingPage') || ''}  
                      onChange={(e) => {
                        setValue('landingPage', e.target.value);
                        clearErrors("landingPage");
                      } }
                      error={Boolean(errors.landingPage)}
                      helperText={errors.landingPage?.message}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 32,
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "6px 14px",
                        },
                      }}
                    >
                      {
                        landingPages.map((landingPage) => (
                          <MenuItem value={landingPage._id}>{landingPage.name}</MenuItem>

                        ))
                      }
                    </TextField>
                    <Typography variant="body1" align="left" gutterBottom>
                      Select Countries *
                    </Typography>
                    <TextField
                      select
                      name="countries"
                      id="countries"
                      label="Countries"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("countries", {
                        required: {
                          value: true,
                          message: "countries is required",
                        },
                      })}
                      value={watch('countries') || ''}  
                      onChange={(e) => {
                        setValue('countries', e.target.value);
                        clearErrors("countries");
                      }}
                      error={Boolean(errors.countries)}
                      helperText={errors.countries?.message}
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
                      id="offerRate"
                      label="Offer Rate"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("offerRate", {
                        required: {
                          value: true,
                          message: "offerRate is required",
                        },
                      })}
                      error={Boolean(errors.offerRate)}
                      helperText={errors.offerRate?.message}
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
                      id="comment"
                      label="Comment"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("comment", {
                        required: {
                          value: true,
                          message: "comment is required",
                        },
                      })}
                      error={Boolean(errors.comment)}
                      helperText={errors.comment?.message}
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
                      id="webOffer"
                      label="Web Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("webOffer", {
                        required: {
                          value: true,
                          message: "webOffer is required",
                        },
                      })}
                      error={Boolean(errors.webOffer)}
                      helperText={errors.webOffer?.message}
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
                      id="androidOffer"
                      label="Android Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("androidOffer", {
                        required: {
                          value: true,
                          message: "androidOffer is required",
                        },
                      })}
                      error={Boolean(errors.androidOffer)}
                      helperText={errors.androidOffer?.message}
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
                      id="iosOffer"
                      label="iOS Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("iosOffer", {
                        required: {
                          value: true,
                          message: "iosOffer is required",
                        },
                      })}
                      error={Boolean(errors.iosOffer)}
                      helperText={errors.iosOffer?.message}
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
                      id="divertOffer"
                      label="Divert Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("divertOffer", {
                        required: {
                          value: true,
                          message: "divertOffer is required",
                        },
                      })}
                      error={Boolean(errors.divertOffer)}
                      helperText={errors.divertOffer?.message}
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
                      id="referralStatus"
                      label="Referral Status"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("referralStatus", {
                        required: {
                          value: true,
                          message: "referralStatus is required",
                        },
                      })}
                      value={watch('referralStatus') || ''}  
                      onChange={(e) => {
                        setValue('referralStatus', e.target.value);
                        clearErrors('referralStatus');
                      }} 
                      error={Boolean(errors.referralStatus)}
                      helperText={errors.referralStatus?.message}
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
                      id="proxyStatus"
                      label="Proxy Status"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("proxyStatus", {
                        required: {
                          value: true,
                          message: "proxyStatus is required",
                        },
                      })}
                      value={watch('proxyStatus') || ''}  
                      onChange={(e) => {
                        setValue('proxyStatus', e.target.value);
                        clearErrors('proxyStatus');
                      }} 
                      error={Boolean(errors.proxyStatus)}
                      helperText={errors.proxyStatus?.message}
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
                      id="devices"
                      label="Devices"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("devices", {
                        required: {
                          value: true,
                          message: "devices is required",
                        },
                      })}
                      error={Boolean(errors.devices)}
                      helperText={errors.devices?.message}
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