import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress,
  Avatar,
  IconButton,
} from "@mui/material";
import adduserimage from "../../data/adduser-bg-imag.jpg";
import { useNavigate } from "react-router-dom";
import { Register } from "../../api/axiosInterceptors";
import { useForm } from "react-hook-form";

function AddUsers() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();


  const handleRegister = async (data) => {
    setLoading(true);
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone_no: data.phone_no,
      CNIC: data.CNIC,
      status: data.status,
      address: data.address,
      type: data.role,
    };
    try {
      const res = await Register(body);
      console.log(res.data);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
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
        <form autoComplete="off" onSubmit={handleSubmit(handleRegister)}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="body1" align="left" gutterBottom>
                Name
              </Typography>
              <TextField
                label="Name"
                name="name"
                id="name"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
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
                id="email"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
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
                id="password"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
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
                id="phone_no"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="number"
                {...register("phone_no", {
                  required: {
                    value: true,
                    message: "phone no is required",
                  },
                })}
                error={Boolean(errors.phone_no)}
                helperText={errors.phone_no?.message}
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
                id="address"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="text"
                {...register("address", {
                  required: {
                    value: true,
                    message: "address is required",
                  },
                })}
                error={Boolean(errors.address)}
                helperText={errors.address?.message}
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
                id="CNIC"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                type="text"
                {...register("CNIC", {
                  required: {
                    value: true,
                    message: "CNIC is required",
                  },
                })}
                error={Boolean(errors.CNIC)}
                helperText={errors.CNIC?.message}
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
