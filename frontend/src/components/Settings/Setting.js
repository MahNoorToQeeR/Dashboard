import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Report as ReportIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const Settings = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear error when user starts typing
    });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleUpdate = () => {
    if (validate()) {
      console.log("Update clicked", formData);
    }
  };

  const handleCancel = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "#0171be", padding: "10px", gap: "5px" }}
      >
        <Typography sx={{ color: "#fff" }}>Settings</Typography>
        <Box>
          <Button
            variant="outlined"
            startIcon={<SettingsIcon />}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
          >
            Counter
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            startIcon={<ReportIcon />}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
          >
            Login Reports
          </Button>
        </Box>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden", padding: "16px" }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            error={!!errors.username}
            helperText={errors.username}
            sx={{
              "& .MuiInputBase-root": {
                height: 32,
              },
              "& .MuiOutlinedInput-input": {
                padding: "6px 14px",
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
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
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
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
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            sx={{
              "& .MuiInputBase-root": {
                height: 32,
              },
              "& .MuiOutlinedInput-input": {
                padding: "6px 14px",
              },
            }}
          />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            onClick={handleCancel}
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
      </Paper>
    </Card>
  );
};

export default Settings;
