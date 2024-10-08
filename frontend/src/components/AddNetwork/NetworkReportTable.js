import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  TextField,
  Paper,
  IconButton,
  Button,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import SwitchWithLabel from "../SwitchWithLabel";
import { GetAllNetworks, DeleteNetwork, UpdateNetwork } from "../../api/axiosInterceptors";

const NetworkReportTable = ({ onAddNetwork }) => {
  const [search, setSearch] = useState("");
  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [networkToDelete, setNetworkToDelete] = useState(null);

  // States for edit dialog
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedNetworkData, setSelectedNetworkData] = useState({
    network_name: "",
    network_url: "",
    pramameter_1: "",
    pramameter_2: "",
  });

  const fetchAllNetworks = async () => {
    try {
      const res = await GetAllNetworks();
      const fetchNetworks = res?.data?.data || [];
      const mappedNetworks = fetchNetworks.map((network, index) => ({
        no: index + 1,
        ...network,
      }));
      setNetworks(mappedNetworks);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching domains: ", error);
      setLoading(false);
      setSnackbarMessage("Failed to load networks.");
      setSnackbarOpen(true);
    }
  };

  useEffect(() => {
    fetchAllNetworks();
  }, []);

  const handleEditOpen = (network) => {
    setSelectedNetworkData(network);
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
  };

  const handleEditChange = (e) => {
    setSelectedNetworkData({
      ...selectedNetworkData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmEdit = async () => {
    debugger;
    try {
      await UpdateNetwork(selectedNetworkData._id, selectedNetworkData);
      setSnackbarMessage("Network updated successfully.");
      setSnackbarOpen(true);
      fetchAllNetworks();
    } catch (error) {
      setSnackbarMessage("Failed to update network.");
      setSnackbarOpen(true);
    }
    handleEditClose();
  };

  const handleDelete = (id) => {
    setNetworkToDelete(id);
    setDialogOpen(true);
  };

  const handelDeleteNetwork = async () => {
    try {
      await DeleteNetwork(networkToDelete);
      setSnackbarMessage("Network deleted successfully.");
      setSnackbarOpen(true);
      fetchAllNetworks();
    } catch (error) {
      setSnackbarMessage("Failed to delete network.");
      setSnackbarOpen(true);
    }
    setDialogOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "network_name", headerName: "Network Name", width: 150 },
    { field: "network_url", headerName: "Network Link", width: 150 },
    { field: "pramameter_1", headerName: "Parameter 1", width: 150 },
    { field: "pramameter_2", headerName: "Parameter 2", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton
            color="primary"
            onClick={() => handleEditOpen(params.row)} // Pass the entire row data
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleDelete(params.row._id)}
          >
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
        <Typography sx={{ color: "#fff" }}>Network Reports</Typography>
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
            onClick={onAddNetwork}
          >
            Add Networks
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
            rows={networks}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />

      {/* Edit Dialog */}
      <Dialog
        open={openEditDialog}
        onClose={handleEditClose}
        aria-labelledby="edit-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          id="edit-dialog-title"
          sx={{ backgroundColor: "#0171BE", color: "#fff" }}
        >
          Edit Network
        </DialogTitle>
        <DialogContent>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="network_name"
              label="Network Name"
              type="text"
              fullWidth
              variant="standard"
              name="network_name"
              value={selectedNetworkData.network_name}
              onChange={handleEditChange}
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
          <TextField
            margin="dense"
            id="network_url"
            label="Network Link"
            type="text"
            fullWidth
            variant="standard"
            name="network_url"
            value={selectedNetworkData.network_url}
            onChange={handleEditChange}
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
          <TextField
            margin="dense"
            id="pramameter_1"
            label="Parameter 1"
            type="text"
            fullWidth
            variant="standard"
            name="pramameter_1"
            value={selectedNetworkData.pramameter_1}
            onChange={handleEditChange}
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
          <TextField
            margin="dense"
            id="pramameter_2"
            label="Parameter 2"
            type="text"
            fullWidth
            variant="standard"
            name="pramameter_2"
            value={selectedNetworkData.pramameter_2}
            onChange={handleEditChange}
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
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleEditClose}
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
              color: "#fff",
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
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="confirm-delete-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          id="add-network-dialog-title"
          sx={{ backgroundColor: "#0171BE", color: "#fff" }}
        >
          Confirm Delete Network Model
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{mt: 5, textAlign: "center", color: "black", fontSize: "20px"}}>
            Are you sure you want to delete this network?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          variant="contained"
          color="error"
            onClick={handelDeleteNetwork}
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
          color="primary"
          onClick={() => setDialogOpen(false)}
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
    </Card>
  );
};

export default NetworkReportTable;
