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
import { CreateDomain } from "../../api/axiosInterceptors";


const DomainModel = ({ open, onClose }) => {
  const [domainName, setDomainName] = useState("");
  const [domainURL, setDomainURL] = useState("");
  const [errors, setErrors] = useState({ domainName: "", domainURL: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    if (!domainName) {
      setErrors((prev) => ({ ...prev, domainName: "Domain Name is required" }));
      hasError = true;
    }

    if (!domainURL) {
      setErrors((prev) => ({ ...prev, domainURL: "Domain URL is required" }));
      hasError = true;
    }

    if (!hasError) {
      try {
        const response = await CreateDomain({
          name: domainName,
          link: domainURL,
        });
        console.log("API Response: ", response.data);
        handleCancel(); 
      } catch (error) {
        console.error("Error submitting form: ", error.message);
      }
    }
  };

  const handleCancel = () => {
    setDomainName("");
    setDomainURL("");
    setErrors({ domainName: "", domainURL: "" });
    onClose(); 
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="add-domain-dialog-title"
      aria-describedby="add-domain-dialog-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        id="add-domain-dialog-title"
        sx={{ backgroundColor: "#0171BE", color: "#fff" }}
      >
        Add Domain Page
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Domain Name
                </Typography>
                <TextField
                  label="Enter Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={domainName}
                  onChange={(e) => {
                    setDomainName(e.target.value);
                    setErrors((prev) => ({ ...prev, domainName: "" }));
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 32,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 14px",
                    },
                  }}
                  error={!!errors.domainName}
                  helperText={errors.domainName}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="left" gutterBottom>
                  Domain URL
                </Typography>
                <TextField
                  label="Enter URL"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={domainURL}
                  onChange={(e) => {
                    setDomainURL(e.target.value);
                    setErrors((prev) => ({ ...prev, domainURL: "" }));
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 32,
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "6px 14px",
                    },
                  }}
                  error={!!errors.domainURL}
                  helperText={errors.domainURL}
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
