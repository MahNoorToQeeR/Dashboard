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

const DomainModel = ({ open, onClose }) => {
  const [networkName, setNetworkName] = useState("");
  const [networkURL, setNetworkURL] = useState("");
  const [errors, setErrors] = useState({ networkName: "", networkURL: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    // Validation
    if (!networkName) {
      setErrors((prev) => ({ ...prev, networkName: "Network Name is required" }));
      hasError = true;
    }

    if (!networkURL) {
      setErrors((prev) => ({ ...prev, networkURL: "Network URL is required" }));
      hasError = true;
    }

    if (!hasError) {
      // Log data to console
      console.log({
        networkName,
        networkURL,
      });
      // Optionally close the dialog here
      handleCancel(); // Close the dialog and reset form
    }
  };

  const handleCancel = () => {
    // Clear the form and errors
    setNetworkName("");
    setNetworkURL("");
    setErrors({ networkName: "", networkURL: "" });
    onClose(); // Close the dialog
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
                  label="Enter Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={networkName}
                  onChange={(e) => {
                    setNetworkName(e.target.value);
                    setErrors((prev) => ({ ...prev, networkName: "" }));
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 32,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 14px",
                    },
                  }}
                  error={!!errors.networkName}
                  helperText={errors.networkName}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Network URL
                </Typography>
                <TextField
                  label="Enter URL"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={networkURL}
                  onChange={(e) => {
                    setNetworkURL(e.target.value);
                    setErrors((prev) => ({ ...prev, networkURL: "" }));
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 32,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 14px",
                    },
                  }}
                  error={!!errors.networkURL}
                  helperText={errors.networkURL}
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

export default DomainModel;
