import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";

function CardComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Login
        </Typography>
        <form Validate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12}>
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
            <Grid item md={12}>
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
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default CardComponent;
