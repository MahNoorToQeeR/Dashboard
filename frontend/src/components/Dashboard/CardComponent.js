import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { All, Delete, UserUpdate } from "../../api/axiosInterceptors";

const CardComponent = () => {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await All();
      setUserList(res?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleEdit = (rowData) => {
    setSelectedRowData(rowData); 
    setUpdatedUserData(rowData); 
    setOpenEditModal(true); 
  };
  const handleDelete = async () => {
    try {
      const res = await Delete({ email: rowToDelete?.email });
      if (res?.status === 200) {
        console.log(`Deleted user with email: ${rowToDelete?.email}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setOpenDeleteModal(false); 
      fetchData();
    }
  };
  const handleUpdate = async () => {
    try {
      const res = await UserUpdate(updatedUserData);
      if (res?.status === 200) {
        console.log("User updated successfully:", updatedUserData);
        setOpenEditModal(false); 
        fetchData();
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  const handleInputChange = (e) => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.name]: e.target.value,
    });
  };
  const handleInsertDriveFileIcon = (_id) => {
    console.log(`Insert File for row with id: ${_id}`);
  };
  const handleRemoveRedEyeIcon = (_id) => {
    console.log(`View row with id: ${_id}`);
  };
  const handleOpenDeleteModal = (rowData) => {
    setRowToDelete(rowData); 
    setOpenDeleteModal(true);
  };
  const handleAddOffer = () => {
    navigate("/add offer");
  };
  const handleAddUser = () => {
    navigate("/add user");
  };
  const handleAddDomain = () => {
    navigate("/add domain");
  };
  const handleAddNetwork = () => {
    navigate("/Network Report");
  };
  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "password", headerName: "Password", width: 150 },
    { field: "phone_no", headerName: "Phone No", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "CNIC", headerName: "CNIC", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton color="primary" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleOpenDeleteModal(params.row)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => handleInsertDriveFileIcon(params.row._id)}
          >
            <InsertDriveFileIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => handleRemoveRedEyeIcon(params.row._id)}
          >
            <RemoveRedEyeIcon />
          </IconButton>
        </Box>
      ),
    },
  ];
  return (
    <Card sx={{ mt: 5 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        sx={{
          backgroundColor: "rgb(1, 113, 190)",
          padding: "8px",
          gap: "5px",
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "16px" }}>
          All Users
        </Typography>
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
            onClick={handleAddDomain}
          >
            Add Domain
          </Button>
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
            onClick={handleAddNetwork}
          >
            Add Network
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleAddUser}
          >
            Add User
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            "& .MuiInputBase-root": { height: 32 },
            "& .MuiOutlinedInput-input": { padding: "6px 14px" },
          }}
        />
        <Box style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={userList}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Box>

      {/* Modal for Editing */}
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}   
      fullWidth
        maxWidth="md">
        <DialogTitle sx={{ backgroundColor: "#0171BE", color: "#fff" }}>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={updatedUserData?.name || ""}
            onChange={handleInputChange}
             variant="standard"
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
            margin="dense"
            label="Email"
            name="email"
            fullWidth
            value={updatedUserData?.email || ""}
            onChange={handleInputChange}
            variant="standard"
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
            margin="dense"
            label="password"
            name="password"
            fullWidth
            value={updatedUserData?.password || ""}
            onChange={handleInputChange}
            variant="standard"
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
            margin="dense"
            label="Phone No"
            name="phone_no"
            fullWidth
            value={updatedUserData?.phone_no || ""}
            onChange={handleInputChange}
            variant="standard"
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
            margin="dense"
            label="CNIC"
            name="CNIC"
            fullWidth
            value={updatedUserData?.CNIC || ""}
            onChange={handleInputChange}
            variant="standard"
            sx={{
              "& .MuiInputBase-root": {
                height: 32,
              },
              "& .MuiOutlinedInput-input": {
                padding: "6px 14px",
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)}  variant="outlined"
            color="primary" sx={{
              color: "#0171be",
              borderColor: "#0171be",
              height: "25px",
              fontSize: "10px",
            }}>
            Cancel
          </Button>
          <Button onClick={handleUpdate}  variant="contained"
            color="primary"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal for Delete Confirmation */}
      <Dialog
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ backgroundColor: "#0171BE", color: "#fff" }}>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography sx={{mt: 5, textAlign: "center", color: "black", fontSize: "20px"}}>
            Are you sure you want to delete the user with email:{" "}
            {rowToDelete?.email}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteModal(false)} color="secondary" sx={{
              color: "#0171be",
              borderColor: "#0171be",
              height: "25px",
              fontSize: "10px",
            }}>
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error"  sx={{
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}>
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};
export default CardComponent;
