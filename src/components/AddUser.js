import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";

function AddUsers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    CNIC: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
        phone_no: "",
        CNIC: "",
      });
      setLoading(false);
    }, 2000); // Simulate an API call with a 2-second delay
  };

  return (
    <Container
      maxWidth="xs" // Set maxWidth to xs to ensure responsiveness
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: { xs: 2, sm: 4 }, // Adjust padding based on screen size
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: { xs: 2, sm: 3 } }} // Adjust margin bottom based on screen size
        >
          Add User
        </Typography>
        <form Validate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" align="left" gutterBottom>
                Name
              </Typography>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
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
            <Grid item xs={12}>
              <Typography variant="body1" align="left" gutterBottom>
                Email
              </Typography>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
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
            <Grid item xs={12}>
              <Typography variant="body1" align="left" gutterBottom>
                Password
              </Typography>
              <TextField
                label="Password"
                name="password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
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
            <Grid item xs={12}>
              <Typography variant="body1" align="left" gutterBottom>
                Phone Number
              </Typography>
              <TextField
                label="Phone Number"
                name="phone_no"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="number"
                required
                value={formData.phone_no}
                onChange={handleChange}
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
            <Grid item xs={12}>
              <Typography variant="body1" align="left" gutterBottom>
                CNIC
              </Typography>
              <TextField
                label="CNIC"
                name="CNIC"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="number"
                required
                value={formData.CNIC}
                onChange={handleChange}
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
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  height: "25px",
                  fontSize: "10px",
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={18} /> : "Add User"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default AddUsers;
