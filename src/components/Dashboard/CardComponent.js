import React, { useState } from "react";
import { Box, Button, Card, Typography, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Navigate, useNavigate } from "react-router-dom";


const rows = [
  { id: 1, name: "User One", email: "user1@example.com", password: "*****" },
  { id: 2, name: "User Two", email: "user2@example.com", password: "*****" },
];

const columns = [
  { field: "id", headerName: "No", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "password", headerName: "Password", width: 150 },
  {
    field: "actions",
    headerName: "Action",
    width: 300,
    renderCell: (params) => (
      <Box display="flex" gap="10px">
        <SearchIcon sx={{ color: "green", fontSize: "20px" }} />
        <EditIcon sx={{ color: "#03A9F4", fontSize: "20px" }} />
        <DeleteIcon sx={{ color: "red", fontSize: "20px" }} />
        <InsertDriveFileIcon sx={{ color: "#3F51B5", fontSize: "20px" }} />
        <RemoveRedEyeIcon sx={{ color: "#3F51B5", fontSize: "20px" }} />
      </Box>
    ),
  },
];

const CardComponent = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleAddOffer = () => {
    navigate("/addoffer");
  };
  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          backgroundColor: "rgb(1, 113, 190)",
          padding: "8px",
          gap: "5px",
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "16px" }}>
          All Users
        </Typography>
        <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
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
          >
            Add User
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
          >
            Add Network
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
            pageSize={5}
            rowsPerPageOptions={[5, 10, 25]}
            disableSelectionOnClick
          />
        </Box>
      </Box>
    </Card>
  );
};

export default CardComponent;
