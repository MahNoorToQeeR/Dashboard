import React from "react";
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
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
                        Domain URL
                      </Typography>
                      <TextField
                        label="Enter URL"
                        variant="outlined"
                        size="small"
                        fullWidth
                        margin="normal"
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
          type="submit"
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
          type="submit"
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
