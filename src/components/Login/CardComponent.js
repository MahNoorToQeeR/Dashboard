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
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function CardComponent() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const validate = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;

    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
      isValid = false;
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        console.log(formData);
        setFormData({ email: "", password: "", role: "user" });
        setLoading(false);
        setSnackbarMessage("Login successful!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        navigate("/dashboard");
      }, 2000);
    } else {
      setSnackbarMessage("Please fix the errors in the form.");
      setSnackbarSeverity("error");
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
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        animate="visible"
      >
        <Box
          sx={{
            width: { xs: '90%', sm: '400px', md: '500px' },
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
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                  error={Boolean(errors.email)}
                  helperText={errors.email}
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
                  required
                  value={formData.password}
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
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
                <RadioGroup
                  name="role"
                  value={formData.role}
                  onChange={handleRoleChange}
                  row
                  sx={{ justifyContent: "center", mt: 2 }}
                >
                  <FormControlLabel
                    value="admin"
                    control={<Radio />}
                    label="Admin"
                  />
                  <FormControlLabel
                    value="user"
                    control={<Radio />}
                    label="User"
                  />
                </RadioGroup>
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
        sx={{ zIndex: 1300 }}  // Ensure it's above other elements
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default CardComponent;
