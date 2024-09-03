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
import SwitchWithLabel from "../SwitchWithLabel";

const AllUserOffers = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([
    {
      no: 1,
      user: "User 1",
      offer: "Offer 1",
      network: "Network 1",
      rate: "$10",
      status: "Active",
    },
    {
      no: 2,
      user: "User 2",
      offer: "Offer 2",
      network: "Network 2",
      rate: "$15",
      status: "Inactive",
    },
    {
      no: 3,
      user: "User 3",
      offer: "Offer 3",
      network: "Network 3",
      rate: "$20",
      status: "Active",
    },
    {
      no: 4,
      user: "User 4",
      offer: "Offer 4",
      network: "Network 4",
      rate: "$25",
      status: "Inactive",
    },
  ]);

  const handleActiveOffers = () => {
    navigate("/");
  };

  const handleDeactiveOffers = () => {
    navigate("/");
  };

  const handleEdit = (no) => {
    console.log(`Edit row with id: ${no}`);
  };

  const handleDelete = (no) => {
    console.log(`Delete row with id: ${no}`);
  };

  const handleDeleteSelectedRows = () => {
    setRows(rows.filter((row) => !selectedRows.includes(row.no)));
  };

  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "user", headerName: "User", width: 150 },
    { field: "offer", headerName: "Offer", width: 150 },
    { field: "network", headerName: "Network", width: 150 },
    { field: "rate", headerName: "Rate", width: 150 },
    { field: "status", headerName: "Offer Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) =>
        params.row.no === "Total" ? null : (
          <Box>
            <IconButton
              color="primary"
              onClick={() => handleEdit(params.row.no)}
            >
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
            onClick={handleActiveOffers}
          >
            Active Offer
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleDeactiveOffers}
          >
            Deactive Offer
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleDeleteSelectedRows}
          >
            Delete Selected
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
            checkboxSelection
            onRowSelectionModelChange={(newSelection) => {
              setSelectedRows(newSelection);
            }}
          />
        </Box>
      </Paper>
    </Card>
  );
};

export default AllUserOffers;
