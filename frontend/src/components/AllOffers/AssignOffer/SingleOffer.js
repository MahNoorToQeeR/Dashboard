import React, { useEffect, useState } from "react";
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
import { All, GetAllOffer } from "../../../api/axiosInterceptors";

const SingleOffer = () => {
  const [personName, setPersonName] = useState([]);
  const [offer, setOffer] = useState("");
  const [errors, setErrors] = useState({ personName: "", offer: "" });
  const [userList, setUserList] = useState([]);
  const [allOffers, setAllOffers] = useState([]);
  const fetchOfferData = async () => {
    try {
      const res = await GetAllOffer();
      setAllOffers(res?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData = async () => {
    try {
      const res = await All();
      setUserList(res?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchOfferData();
  }, []);

  const handleUserChange = (selectedUsers) => {
    setPersonName(selectedUsers);
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
                 {allOffers.map((offer) => (
                  <MenuItem key={offer._id} value={offer._id}>
                    {offer.offer_name}
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
                    onChange={(e) =>
                      handleUserChange([...e.target.selectedOptions].map((option) => option.value))
                    }
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
