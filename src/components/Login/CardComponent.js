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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log(formData);
      setFormData({ email: "", password: "" });
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: { xs: 3, sm: 4 },
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.9)", 
          textAlign: "center",
          backdropFilter: "blur(10px)", 
        }}
      >
        <Typography variant="h5" sx={{ mb: { xs: 2, sm: 3 } }}>
          Login
        </Typography>
        <form Validate autoComplete="off" onSubmit={handleSubmit}>
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
                {loading ? <CircularProgress size={18} color="inherit" /> : "Login"}
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
    </Container>
  );
}

export default CardComponent;
