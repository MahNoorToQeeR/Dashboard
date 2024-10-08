import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import SwitchWithLabel from "../SwitchWithLabel";

const CardComponent = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const rows = [
    { no: 1, name: "Offer 1", status: "active" },
    { no: 2, name: "Offer 2", status: "inactive" },
    { no: 3, name: "Offer 3", status: "active" },
  ];

  const handleAddOffer = () => {
    navigate("/add offer");
  };

  const handleAssignOffer = () => {
    navigate("/assign offer");
  };
  const handleEdit = (no) => {
    console.log(`Edit row with id: ${no}`);
  };
  const handleDelete = (no) => {
    console.log(`Edit row with id: ${no}`);
  };
  const handleSearch = (no) => {
    console.log(`Edit row with id: ${no}`);
  };
  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton
            color="primary"
            onClick={() => handleSearch(params.row.no)}
          >
            <SearchIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => handleEdit(params.row.no)}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleDelete(params.row.no)}
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
      </Paper>
    </Card>
  );
};

export default CardComponent;
