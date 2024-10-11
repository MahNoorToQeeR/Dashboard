import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  TextField,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SwitchWithLabel from "../SwitchWithLabel"; 
import { GetAllOffer, UpdateOffers, DeleteOffers } from "../../api/axiosInterceptors"; 

const CardComponent = () => {
  const [search, setSearch] = useState("");
  const [allOffers, setAllOffers] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState({});
  const [updatedOfferName, setUpdatedOfferName] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const navigate = useNavigate();

  const fetchOfferData = async () => {
    try {
      const res = await GetAllOffer();
      setAllOffers(res?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchOfferData();
  }, []);

  const handleAddOffer = () => {
    navigate("/add offer");
  };

  const handleAssignOffer = () => {
    navigate("/assign offer");
  };

  const handleEdit = (offer) => {
    setSelectedOffer(offer);
    setUpdatedOfferName(offer.offer_name);
    setUpdatedStatus(offer.status);
    setOpenEdit(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEdit(false);
    setSelectedOffer({});
  };

  const handleUpdate = async () => {
    const updatedData = {
      offer_name: updatedOfferName,
      status: updatedStatus,
    };
    try {
      await UpdateOffers(selectedOffer._id, updatedData);
      fetchOfferData();
      handleCloseEditDialog();
      setSnackbarMessage("Offer updated successfully");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error updating offer:", error);
    }
  };

  const handleDelete = (offer) => {
    setSelectedOffer(offer);
    setOpenDelete(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDelete(false);
    setSelectedOffer({});
  };

  const handleConfirmDelete = async () => {
    debugger;
    try {
      if (selectedOffer._id) {
        const res = await DeleteOffers(selectedOffer._id ); 
        if (res?.status === 200) {
          setAllOffers((prevOffers) =>
            prevOffers.filter((offer) => offer._id !== selectedOffer._id)
          );
          setSnackbarMessage('Offer deleted successfully');
        } else {
          setSnackbarMessage('Error deleting offer');
        }
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error deleting offer:", error);
      setSnackbarMessage('Error deleting offer');
      setSnackbarOpen(true);
    } finally {
      handleCloseDeleteDialog();
      fetchOfferData(); 
    }
  };
  

  const columns = [
    { field: "offer_name", headerName: "Name", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton color="primary" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row)}>
            <DeleteIcon />
          </IconButton>
          <SwitchWithLabel />
        </Box>
      ),
    },
  ];

  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          backgroundColor: "rgb(1, 113, 190)",
          padding: "10px",
          gap: "5px",
        }}
      >
        <Typography sx={{ color: "#fff" }}>All Offers</Typography>
        <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleAddOffer}
          >
            Add Offer
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleAssignOffer}
          >
            Assign Offer
          </Button>
        </Box>
      </Box>

      <Paper sx={{ padding: "16px" }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              height: 32,
            },
            "& .MuiOutlinedInput-input": {
              padding: "6px 14px",
            },
          }}
        />

        <Box style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={allOffers}
            columns={columns}
            getRowId={(row) => row._id}
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

      {/* Edit Dialog */}
      <Dialog
        open={openEdit}
        onClose={handleCloseEditDialog}
        aria-labelledby="edit-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle
          id="edit-dialog-title"
          sx={{ backgroundColor: "#0171BE", color: "#fff" }}
        >
          {"Edit Offers"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Offer Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={updatedOfferName}
            onChange={(e) => setUpdatedOfferName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="status"
            label="Status"
            type="text"
            fullWidth
            variant="standard"
            name="status"
            value={updatedStatus}
            onChange={(e) => setUpdatedStatus(e.target.value)}
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
            onClick={handleUpdate}
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

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDelete}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="delete-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="delete-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this offer?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Card>
  );
};

export default CardComponent;
