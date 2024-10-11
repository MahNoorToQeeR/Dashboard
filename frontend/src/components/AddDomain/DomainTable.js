import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllDomains, deleteDomains, updateDomain } from "../../api/axiosInterceptors";

const DomainTable = ({ onAddDomain }) => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedDomainId, setSelectedDomainId] = useState(null);
  const [selectedDomainData, setSelectedDomainData] = useState({ name: '', link: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const fetchDomains = async () => {
    try {
      const res = await getAllDomains();
      const fetchedDomains = res?.data?.data || [];
      const mappedDomains = fetchedDomains.map((domain, index) => ({
        no: index + 1,
        ...domain,
      }));
      setDomains(mappedDomains);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching domains: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  const handleOpenDeleteDialog = (id) => {
    setSelectedDomainId(id);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedDomainId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      if (selectedDomainId) {
        const res = await deleteDomains(selectedDomainId);
        if (res?.status === 200) {
          setDomains((prevDomains) =>
            prevDomains.filter((domain) => domain._id !== selectedDomainId)
          );
          setSnackbarMessage('Domain deleted successfully');
        } else {
          setSnackbarMessage('Error deleting domain');
        }
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error deleting domain:", error);
      setSnackbarMessage('Error deleting domain');
      setSnackbarOpen(true);
    } finally {
      handleCloseDeleteDialog();
      fetchDomains();  
    }
  };

  const handleOpenEditDialog = (domain) => {
    setSelectedDomainData({ name: domain.name, link: domain.link });
    setSelectedDomainId(domain._id);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedDomainId(null);
    setSelectedDomainData({ name: '', link: '' });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedDomainData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirmEdit = async () => {
    try {
      if (selectedDomainId) {
        // Prepare the updated data
        const updatedData = {
          name: selectedDomainData.name,
          link: selectedDomainData.link,
        };

        // Make the update API call
        const res = await updateDomain(selectedDomainId, updatedData);

        if (res?.status === 200) {
          setSnackbarMessage("Domain updated successfully");
          setSnackbarOpen(true);

          // Update table data by updating the modified domain in the list
          setDomains((prevDomains) =>
            prevDomains.map((domain) =>
              domain._id === selectedDomainId ? { ...domain, ...updatedData } : domain
            )
          );
        } else {
          setSnackbarMessage(res?.data?.message || "Error updating domain");
          setSnackbarOpen(true);
        }
      }
    } catch (error) {
      console.error("Error updating domain:", error);
      setSnackbarMessage("Error updating domain");
      setSnackbarOpen(true);
    } finally {
      handleCloseEditDialog(); // Close the edit dialog
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
      field: "link",
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
            onClick={() => handleOpenEditDialog(params.row)}
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
        <Typography sx={{ color: "#fff" }}>Domains</Typography>
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
            onClick={onAddDomain}
          >
            Add Domain
          </Button>
        </Box>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={domains}
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
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: "#0171BE", color: "#fff" }}>{"Delete Domain"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{mt: 5, textAlign: "center", fontSize: "20px", color: "black"}}>
            Are you sure you want to delete this domain?
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

      {/* Edit Dialog */}
      <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        aria-labelledby="edit-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="edit-dialog-title" sx={{ backgroundColor: "#0171BE", color: "#fff" }}>{"Edit Domain"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Domain Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={selectedDomainData.name}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            id="link"
            label="Domain Link"
            type="text"
            fullWidth
            variant="standard"
            name="link"
            value={selectedDomainData.link}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleCloseEditDialog}
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
            color="primary"
            onClick={handleConfirmEdit}
            sx={{
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Card>
  );
};

export default DomainTable;
