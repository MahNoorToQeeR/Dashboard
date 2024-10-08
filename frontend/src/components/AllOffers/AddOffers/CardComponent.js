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
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { All, getAllDomains, getAllLandingData, AddOffers, GetAllNetworks } from "../../../api/axiosInterceptors";
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
  const [landingpage, setLandingpages] = useState([]);
  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [userList, setUserList] = useState([]);
  const fetchData = async () => {
    try {
      const res = await All();
      setUserList(res?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchAllNetworks = async () => {
    try {
      const res = await GetAllNetworks();
      const fetchNetworks = res?.data?.data || [];
      const mappedNetworks = fetchNetworks.map((network, index) => ({
        no: index + 1,
        ...network,
      }));
      setNetworks(mappedNetworks);
      setLoading(false);
      setSnackbarMessage("Network fetched successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error fetching network: ", error);
      setLoading(false);
      setSnackbarMessage("Failed to load networks.");
      setSnackbarOpen(true);
    }
  };
  const fetchDomains = async () => {
    try {
      const res = await getAllDomains();
      const fetchedDomains = res?.data?.data;

      setDomains(fetchedDomains);
      setLoading(false);
      setSnackbarMessage("Domains fetched successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error fetching domains: ", error);
      setLoading(false);

      // Show error message
      setSnackbarMessage("Failed to fetch domains.");
      setSnackbarOpen(true);
    }
  };
  const fetchLandingData = async () => {
    try {
      const res = await getAllLandingData();
      const fetchedLandingData = res?.data?.data;
      setLandingpages(fetchedLandingData);
      setLoading(false);
      setSnackbarMessage("Landing pages fetched successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error fetching landing pages: ", error);
      setLoading(false);
      setSnackbarMessage("Failed to fetch landing pages.");
      setSnackbarOpen(true);
    }
  };
  useEffect(() => {
    fetchData();
    fetchDomains();
    fetchLandingData();
    fetchAllNetworks();
  }, []);
  const handleAddOffer = async (data) => {
    const body = {
      domain: data.domain,
      landingpage: data.landingpage, offerData: data
    }
    try {
      const response = await AddOffers(body);
      console.log("Response from API:", response.data);
      setSnackbarMessage("Offer added successfully!");
      setSnackbarOpen(true);

      reset();
    } catch (error) {
      console.error("Error adding offer:", error);
      setSnackbarMessage("Failed to add offer.");
      setSnackbarOpen(true);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };
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
  const handleReset = () => {
    reset();
    setPersonName([]);
  }
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
              <CardContent onSubmit={handleSubmit(handleAddOffer)} component={"form"}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" align="left" gutterBottom>
                      Offer Name *
                    </Typography>
                    <TextField
                      name="offer_name"
                      id="offer_name"
                      label="Offer Name"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("offer_name", {
                        required: {
                          value: true,
                          message: "offer_name is required",
                        },
                      })}
                      error={Boolean(errors.offer_name)}
                      helperText={errors.offer_name?.message}
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
                      name="default_offer"
                      id="default_offer"
                      label="Default Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("default_offer", {
                        required: {
                          value: true,
                          message: "default_offer is required",
                        },
                      })}
                      error={Boolean(errors.default_offer)}
                      helperText={errors.default_offer?.message}
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
                      {networks.map((network) => (
                        <MenuItem key={network._id} value={network._id}>
                          {network.network_name}
                        </MenuItem>
                      ))}
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
                        onChange={(e) => handleUserChange([...e.target.selectedOptions].map(option => option.value))}
                        label="Select Users"
                        inputProps={{
                          id: "select-multiple-native",
                        }}
                      >
                        {userList.map((user) => (
                          <option key={user._id} value={user._id}>
                            {user.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <Typography variant="body1" align="left" gutterBottom>
                      Select LandingPage *
                    </Typography>
                    <TextField
                      name="landingpage"
                      id="landingpage"
                      select
                      label="Landing Page"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("landingpage", {
                        required: {
                          value: true,
                          message: "landingpage is required",
                        },
                      })}
                      value={watch('landingpage') || ''}
                      onChange={(e) => {
                        setValue('landingpage', e.target.value);
                        clearErrors("landingpage");
                      }}
                      error={Boolean(errors.landingpage)}
                      helperText={errors.landingpage?.message}
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
                        landingpage.map((landingpage) => (
                          <MenuItem value={landingpage._id}>{landingpage.name}</MenuItem>

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
                      label="countries"
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
                      name="offer_rate"
                      id="offer_rate"
                      label="Offer Rate"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("offer_rate", {
                        required: {
                          value: true,
                          message: "offer_rate is required",
                        },
                      })}
                      error={Boolean(errors.offer_rate)}
                      helperText={errors.offer_rate?.message}
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
                      label="comment"
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
                      name="web_offer"
                      id="web_offer"
                      label="Web Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("web_offer", {
                        required: {
                          value: true,
                          message: "web_offer is required",
                        },
                      })}
                      error={Boolean(errors.web_offer)}
                      helperText={errors.web_offer?.message}
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
                      name="android_offer"
                      id="android_offer"
                      label="Android Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("android_offer", {
                        required: {
                          value: true,
                          message: "android_offer is required",
                        },
                      })}
                      error={Boolean(errors.android_offer)}
                      helperText={errors.android_offer?.message}
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
                      name="ios_offer"
                      id="ios_offer"
                      label="iOS Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("ios_offer", {
                        required: {
                          value: true,
                          message: "ios_offer is required",
                        },
                      })}
                      error={Boolean(errors.ios_offer)}
                      helperText={errors.ios_offer?.message}
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
                      name="divert_offer"
                      id="divert_offer"
                      label="Divert Offer"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("divert_offer", {
                        required: {
                          value: true,
                          message: "divert_offer is required",
                        },
                      })}
                      error={Boolean(errors.divert_offer)}
                      helperText={errors.divert_offer?.message}
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
                      name="referral_status"
                      id="referral_status"
                      label="Referral Status"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("referral_status", {
                        required: {
                          value: true,
                          message: "referral_status is required",
                        },
                      })}
                      value={watch('referral_status') || ''}
                      onChange={(e) => {
                        setValue('referral_status', e.target.value);
                        clearErrors('referral_status');
                      }}
                      error={Boolean(errors.referral_status)}
                      helperText={errors.referral_status?.message}
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
                      name="proxy_status"
                      id="proxy_status"
                      label="Proxy Status"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      {...register("proxy_status", {
                        required: {
                          value: true,
                          message: "proxy_status is required",
                        },
                      })}
                      value={watch('proxy_status') || ''}
                      onChange={(e) => {
                        setValue('proxy_status', e.target.value);
                        clearErrors('proxy_status');
                      }}
                      error={Boolean(errors.proxy_status)}
                      helperText={errors.proxy_status?.message}
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
                    loading={loading}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />

    </Card>
  );
};

export default CardComponent;