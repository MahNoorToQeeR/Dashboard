import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import SwitchWithLabel from "../SwitchWithLabel";

const NetworkReportTable = () => {
  const [search, setSearch] = useState("");
  const rows = [
    {
      no: 1,
      name: "Network 1",
      networklink: "Link 1",
      paramter1: "Value 1",
      paramter2: "Value 2",
    },
    {
      no: 2,
      name: "Network 2",
      networklink: "Link 2",
      paramter1: "Value 3",
      paramter2: "Value 4",
    },
    {
      no: 3,
      name: "Network 3",
      networklink: "Link 3",
      paramter1: "Value 5",
      paramter2: "Value 6",
    },
    {
      no: 4,
      name: "Network 4",
      networklink: "Link 4",
      paramter1: "Value 7",
      paramter2: "Value 8",
    },
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

  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "name", headerName: "Network Name", width: 150 },
    { field: "networklink", headerName: "Network Link", width: 150 },
    { field: "paramter1", headerName: "Parameter 1", width: 150 },
    { field: "paramter2", headerName: "Parameter 2", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton
            color="primary"
            onClick={() =>
              handleSearch(`Search row with id: ${params.row.no}`)
            }
          >
            <SearchIcon />
          </IconButton>
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
        <Typography sx={{ color: "#fff" }}>Network Reports</Typography>
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

export default NetworkReportTable;
