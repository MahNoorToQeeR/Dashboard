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
import { CreateLandingData } from "../../api/axiosInterceptors";

const LandingModel = ({ open, onClose }) => {
  const [websiteName, setWebsiteName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [errors, setErrors] = useState({ websiteName: "", websiteURL: "" });

  const handleSubmit = async (e)  => {
    e.preventDefault();
    let hasError = false;
    if (!websiteName) {
      setErrors((prev) => ({ ...prev, websiteName: "Website Name is required" }));
      hasError = true;
    }

    if (!websiteURL) {
      setErrors((prev) => ({ ...prev, websiteURL: "Website URL is required" }));
      hasError = true;
    }

    if (!hasError) {
      try {
        debugger;
        const res = await CreateLandingData({
          name: websiteName,
          url: websiteURL,
        });
        console.log("API Response: ", res.data);
        handleCancel(); 
      } catch (error) {
        console.error("Error submitting form: ", error.message);
      }
    }
  };
  const handleCancel = () => {
    setWebsiteName("");
    setWebsiteURL("");
    setErrors({ websiteName: "", websiteURL: "" });
    onClose(); 
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="add-landing-dialog-title"
      aria-describedby="add-landing-dialog-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        id="add-landing-dialog-title"
        sx={{ backgroundColor: "#0171BE", color: "#fff" }}
      >
        Add Landing Page
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Website Name
                </Typography>
                <TextField
                  label="Enter Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={websiteName}
                  onChange={(e) => {
                    setWebsiteName(e.target.value);
                    setErrors((prev) => ({ ...prev, websiteName: "" }));
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 32,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 14px",
                    },
                  }}
                  error={!!errors.websiteName}
                  helperText={errors.websiteName}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Website URL
                </Typography>
                <TextField
                  label="Enter URL"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={websiteURL}
                  onChange={(e) => {
                    setWebsiteURL(e.target.value);
                    setErrors((prev) => ({ ...prev, websiteURL: "" }));
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 32,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 14px",
                    },
                  }}
                  error={!!errors.websiteURL}
                  helperText={errors.websiteURL}
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

export default LandingModel;
