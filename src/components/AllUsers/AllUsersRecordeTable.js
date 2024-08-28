import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";

const rows = [
  { no: 1, name: "User One", email: "user1@example.com", password: "*****" },
  { no: 2, name: "User Two", email: "user2@example.com", password: "*****" },
];

const handleEdit = (no) => {
  console.log(`Edit row with id: ${no}`);
};

const handleDelete = (no) => {
  console.log(`Delete row with id: ${no}`);
};

const handleSearch = (no) => {
  console.log(`Search row with id: ${no}`);
};

const handleInsertDriveFileIcon = (no) => {
  console.log(`Insert File row with id: ${no}`);
};

const handleRemoveRedEyeIcon = (no) => {
  console.log(`View row with id: ${no}`);
};

const columns = [
  { field: "no", headerName: "No", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "password", headerName: "Password", width: 150 },
  { field: "phone", headerName: "Phone No", width: 150 },
  { field: "address", headerName: "Address", width: 150 },
  { field: "cnic", headerName: "CNIC", width: 150 },
  {
    field: "actions",
    headerName: "Actions",
    width: 250,
    sortable: false,
    renderCell: (params) => (
      <Box>
        <IconButton color="primary" onClick={() => handleSearch(params.row.no)}>
          <SearchIcon />
        </IconButton>
        <IconButton color="primary" onClick={() => handleEdit(params.row.no)}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => handleDelete(params.row.no)}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          color="primary"
          onClick={() => handleInsertDriveFileIcon(params.row.no)}
        >
          <InsertDriveFileIcon />
        </IconButton>
        <IconButton
          color="primary"
          onClick={() => handleRemoveRedEyeIcon(params.row.no)}
        >
          <RemoveRedEyeIcon />
        </IconButton>
      </Box>
    ),
  },
];

const AllUsersRecordeTable = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/add user"); 
  };

  return (
    <Card sx={{ mt: 4 }}>
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
        <Typography sx={{ color: "#fff", fontSize: "16px" }}>All Users</Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="end" sx={{ gap: "5px" }}>
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
            rows={rows}
            columns={columns}
            getRowId={(row) => row.no}
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
      </Box>
    </Card>
  );
};

export default AllUsersRecordeTable;
