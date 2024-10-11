import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { All, GetAllOffer, GetMultiOfferMultiUsers } from "../../../api/axiosInterceptors";

const CardComponent = () => {
  const [user, setUser] = useState("");
  const [offer, setOffer] = useState("");
  const [errors, setErrors] = useState({ user: "", offer: "" });
  const [userList, setUserList] = useState([]);
  const [allOffers, setAllOffers] = useState([]);

  // Fetch all users
  const fetchData = async () => {
    try {
      const res = await All();
      setUserList(res?.data?.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch all offers
  const fetchOfferData = async () => {
    try {
      const res = await GetAllOffer();
      setAllOffers(res?.data?.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchOfferData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    // Form validation
    if (!user) {
      setErrors((prev) => ({ ...prev, user: "User is required" }));
      hasError = true;
    }
    if (!offer) {
      setErrors((prev) => ({ ...prev, offer: "Offer is required" }));
      hasError = true;
    }

    if (!hasError) {
      try {
        // API call to assign offer to user
        const response = await GetMultiOfferMultiUsers(user, offer);
        console.log("API Response:", response.data);

        // Clear the form after successful submission
        handleReset();
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  // Handle form reset
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
                {userList.map((user) => (
                  <MenuItem key={user._id} value={user._id}>
                    {user.name}
                  </MenuItem>
                ))}
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
                {allOffers.map((offer) => (
                  <MenuItem key={offer._id} value={offer._id}>
                    {offer.offer_name}
                  </MenuItem>
                ))}
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
