import React, { useState, useEffect } from "react";
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
import { All, Delete, Update } from "../../api/axiosInterceptors";

const CardComponent = () => {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await All();
      setUserList(res?.data?.data);
      console.log(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (_id) => {
    console.log(`Edit row with id: ${_id}`);
  };

  const handleDelete = async (email) => {
    debugger;
    try {
      const res = await Delete({ email: email });
      if (res?.status === 200) {
        console.log(`Deleted user with id: ${email}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      fetchData();
    }
  };

  const handleSearch = (_id) => {
    console.log(`Search row with id: ${_id}`);
    // Add your search functionality here
  };

  const handleInsertDriveFileIcon = (_id) => {
    console.log(`Insert File row with id: ${_id}`);
    // Add your file handling functionality here
  };

  const handleRemoveRedEyeIcon = (_id) => {
    console.log(`View row with id: ${_id}`);
    // Add your view functionality here
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
          <IconButton
            color="primary"
            onClick={() => handleSearch(params.row._id)}
          >
            <SearchIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => handleEdit(params.row._id)}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleDelete(params.row.email)}
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

  const handleAddOffer = () => {
    navigate("/add offer");
  };

  const handleAddUser = () => {
    navigate("/add user");
  };

  const handleAddDomain = () => {
    navigate("/add domain");
  };

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
            rows={userList}
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
      </Box>
    </Card>
  );
};

export default CardComponent;
