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
import adduserimage from "../../data/adduser-bg-imag.jpg";
import { useNavigate } from "react-router-dom";

function AddUsers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    address: "",  // Added address field
    CNIC: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required.";
    tempErrors.email = formData.email ? "" : "Email is required.";
    tempErrors.password = formData.password ? "" : "Password is required.";
    tempErrors.phone_no = formData.phone_no ? "" : "Phone Number is required.";
    tempErrors.address = formData.address ? "" : "Address is required.";  // Added address validation
    tempErrors.CNIC = formData.CNIC ? "" : "CNIC is required.";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }

    if (formData.password && formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long.";
    }

    if (formData.phone_no && formData.phone_no.length < 10) {
      tempErrors.phone_no = "Phone Number must be at least 10 digits long.";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      navigate("/All Users");
      setTimeout(() => {
        console.log(formData);
        setFormData({
          name: "",
          email: "",
          password: "",
          phone_no: "",
          address: "", 
          CNIC: "",
        });
        setErrors({});
        setLoading(false);
      }, 2000); 
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${adduserimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          zIndex: 1,
          backgroundColor: "white",
          borderRadius: 2,
          padding: { xs: 2, sm: 4 },
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: { xs: 2, sm: 3 } }}>
          Add User
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
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
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
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
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
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
                type="text"
                value={formData.phone_no}
                onChange={handleChange}
                error={!!errors.phone_no}
                helperText={errors.phone_no}
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
                Address
              </Typography>
              <TextField
                label="Address"
                name="address"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="text"
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
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
                type="text"
                value={formData.CNIC}
                onChange={handleChange}
                error={!!errors.CNIC}
                helperText={errors.CNIC}
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
      </Container>
    </Box>
  );
}

export default AddUsers;
