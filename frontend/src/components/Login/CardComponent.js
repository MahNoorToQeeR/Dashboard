import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Login } from "../../api/axiosInterceptors";

function CardComponent() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const handleLogin = async (data) => {
    setLoading(true); 
    const body = {
      email: data.email,
      password: data.password,
      type: data.role,
    };
    try {
      const res = await Login(body);
      if(res.data.status === 1){
        navigate("/dashboard");
        setSnackbarMessage("Login successful!");
        setSnackbarSeverity("success");
      }else{
        setSnackbarMessage(res.error || "Login failed");
        setSnackbarSeverity("error");
      }
    } catch (error) {
      console.log("error", error.response?.data?.message || "Login failed");
      setSnackbarMessage(error.response?.data?.message || "Login failed");
      setSnackbarSeverity("error");
    } finally {
      setLoading(false); 
      setSnackbarOpen(true); 
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
        textAlign: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          marginBottom: 4,
          marginLeft: "105px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {"WELCOME TO SS MEDIA".split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            style={{
              color: "#fff",
              display: "inline-block",
              margin: "0 2px",
              fontSize: "70px",
              fontWeight: "bold",
            }}
          >
            {char}
          </motion.span>
        ))}
      </Box>
      <motion.div variants={cardAnimation} initial="hidden" animate="visible">
        <Box
          sx={{
            width: { xs: "90%", sm: "400px", md: "500px" },
            padding: { xs: 3, sm: 5 },
            boxShadow: 3,
            borderRadius: "1.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: { xs: 2, sm: 3 } }}>
            Login
          </Typography>
          <form autoComplete="off" role="form" onSubmit={handleSubmit(handleLogin)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  error={Boolean(errors.email)} // set error prop
                  helperText={errors.email?.message}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "8px 14px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                  error={Boolean(errors.password)} // set error prop
                  helperText={errors.password?.message}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "8px 14px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <label>
                    <input
                      type="radio"
                      value="admin"
                      {...register('role', { required: 'This field is required' })}
                    />
                    Admin
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="user"
                      {...register('role', { required: 'This field is required' })}
                    />
                    User
                  </label>
                </Box>
                {errors.role && <p>{errors.role.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    color: "#fff",
                    height: "35px",
                    fontSize: "14px",
                    mt: 2,
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Link href="#" underline="none" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </motion.div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        action={
          <Button color="inherit" onClick={() => setSnackbarOpen(false)}>
            Close
          </Button>
        }
        sx={{ zIndex: 1300 }} 
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CardComponent;
