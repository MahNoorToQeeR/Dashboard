import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllLandingData, deleteLandingPage } from "../../api/axiosInterceptors";


const LandingTable = ({ onAddLandingPage }) => {
  const [landingPages, setLandingPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedLandingPageId, setSelectedLandingPageId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const fetchLandingData = async () => {
    try {
      const res = await getAllLandingData();
      const fetchedLandingData = res?.data?.data || [];
      const mappedLandingPages = fetchedLandingData.map((landing, index) => ({
        no: index + 1,
        ...landing,
      }));
      setLandingPages(mappedLandingPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching landing pages: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLandingData();
  }, []);

  const handleOpenDeleteDialog = (id) => {
    setSelectedLandingPageId(id);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedLandingPageId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      if (selectedLandingPageId) {
        const res = await deleteLandingPage(selectedLandingPageId);
        if (res?.status === 200) {
          setLandingPages((prevLandingPages) =>
            prevLandingPages.filter((page) => page._id !== selectedLandingPageId)
          );
          setSnackbarMessage("Landing Page deleted successfully");
          setSnackbarOpen(true);
        } else {
          setSnackbarMessage("Error deleting Landing Page");
          setSnackbarOpen(true);
        }
      }
    } catch (error) {
      console.error("Error deleting landing page:", error);
      setSnackbarMessage("Error deleting Landing Page");
      setSnackbarOpen(true);
    } finally {
      handleCloseDeleteDialog();
      fetchLandingData(); 
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const columns = [
    { field: "no", headerName: "No", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "url",
      headerName: "Link",
      width: 250,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton
            color="primary"
       
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleOpenDeleteDialog(params.row._id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];
  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "#0171be", padding: "10px", gap: "5px" }}
      >
        <Typography sx={{ color: "#fff" }}>Landing Pages</Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="end"
          sx={{ gap: "5px" }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={onAddLandingPage}
          >
            Add Landing Page
          </Button>
        </Box>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={landingPages}
            columns={columns}
            getRowId={(row) => row._id}
            loading={loading}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Landing Page"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this landing page?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleCloseDeleteDialog}
            sx={{
              color: "#0171be",
              borderColor: "#0171be",
              height: "25px",
              fontSize: "10px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirmDelete}
            sx={{
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for success or error message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Card>
  );
};

export default LandingTable;
