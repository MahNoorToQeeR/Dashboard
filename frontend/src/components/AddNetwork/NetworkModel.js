import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { AddNetwork } from "../../api/axiosInterceptors";

const NetworkModel = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    network_name: "",
    network_url: "",
    pramameter_1: "",
    pramameter_2: "",
  });
  const [errors, setErrors] = useState({
    network_name: "",
    network_url: "",
    pramameter_1: "",
    pramameter_2: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear the corresponding error message
    setErrors({ ...errors, [name]: "" });

    // Update form data
    setFormData({ ...formData, [name]: value });
  };
  const resetForm = () => {
    setFormData({
      network_name: "",
      network_url: "",
      pramameter_1: "",
      pramameter_2: "",
    });
    setErrors({ // Clear errors on reset
      network_name: "",
      network_url: "",
      pramameter_1: "",
      pramameter_2: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.network_name) {
      newErrors.network_name = "Network name is required.";
    }
    if (!formData.network_url) {
      newErrors.network_url = "Network URL is required.";
    }
    return newErrors;
  };

  const onSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return; 
    }
    try {
      await AddNetwork(formData);
      handleCancel();
    } catch (error) {
      console.error("Error submitting network data:", error);
    }
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="add-network-dialog-title"
      aria-describedby="add-network-dialog-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        id="add-network-dialog-title"
        sx={{ backgroundColor: "#0171BE", color: "#fff" }}
      >
        Add Network Page
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Network Name
                </Typography>
                <TextField
                  id="network_name"
                  name="network_name"
                  label="Enter Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={formData.network_name}
                  onChange={handleInputChange}
                  error={Boolean(errors.network_name)}
                  helperText={errors.network_name}
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
                  Network URL
                </Typography>
                <TextField
                  id="network_url"
                  name="network_url"
                  label="Enter URL"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={formData.network_url}
                  onChange={handleInputChange}
                  error={Boolean(errors.network_url)}
                  helperText={errors.network_url}
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
                  Parameter 1
                </Typography>
                <TextField
                  id="pramameter_1"
                  name="pramameter_1"
                  label="Enter Parameter 1"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={formData.pramameter_1}
                  onChange={handleInputChange}
                  error={Boolean(errors.pramameter_1)}
                  helperText={errors.pramameter_1}
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
                  Parameter 2
                </Typography>
                <TextField
                  id="pramameter_2"
                  name="pramameter_2"
                  label="Enter Parameter 2"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={formData.pramameter_2}
                  onChange={handleInputChange}
                  error={Boolean(errors.pramameter_2)}
                  helperText={errors.pramameter_2}
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
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit} 
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
          onClick={handleCancel} 
          sx={{
            color: "#0171be",
            borderColor: "#0171be",
            height: "25px",
            fontSize: "10px",
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NetworkModel;
