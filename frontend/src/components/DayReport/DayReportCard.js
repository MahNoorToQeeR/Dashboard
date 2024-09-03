import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
  TextField,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SwitchWithLabel from "../SwitchWithLabel";
import * as XLSX from "xlsx";

const DayReportCard = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [rows, setRows] = useState([
    {
      date: "2024-01-01",
      clicks: 120,
      signup: 45,
      user: "User 1",
    },
    {
      date: "2024-01-02",
      clicks: 98,
      signup: 32,
      user: "User 2",
    },
    {
      date: "2024-01-03",
      clicks: 150,
      signup: 67,
      user: "User 3",
    },
    {
      date: "2024-01-04",
      clicks: 120,
      signup: 45,
      user: "User 1",
    },
  ]);

  const totalClicks = rows.reduce((acc, row) => acc + row.clicks, 0);
  const totalSignup = rows.reduce((acc, row) => acc + row.signup, 0);

  const handleEdit = (date) => {
    console.log(`Edit row with date: ${date}`);
  };

  const handleDelete = (date) => {
    console.log(`Delete row with date: ${date}`);
  };

  const handleSearch = () => {
    // Filter rows based on the selected user
    if (selectedUser) {
      const filtered = rows.filter((row) => row.user === selectedUser);
      setRows(filtered);
    } else {
      // If no user is selected, reset to original rows
      setRows([
        {
          date: "2024-01-01",
          clicks: 120,
          signup: 45,
          user: "User 1",
        },
        {
          date: "2024-01-02",
          clicks: 98,
          signup: 32,
          user: "User 2",
        },
        {
          date: "2024-01-03",
          clicks: 150,
          signup: 67,
          user: "User 3",
        },
        {
          date: "2024-01-04",
          clicks: 120,
          signup: 45,
          user: "User 1",
        },
      ]);
    }
  };
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Day Report");
    XLSX.writeFile(workbook, "DayReport.xlsx");
  };
  const columns = [
    { field: "date", headerName: "Date", width: 150 },
    { field: "clicks", headerName: "Clicks", width: 150 },
    { field: "signup", headerName: "Signup", width: 150 },
    {
      field: "user",
      headerName: "User",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) =>
        params.row.date === "Total" ? null : (
          <Box>
            <IconButton
              color="primary"
              onClick={() => handleEdit(params.row.date)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(params.row.date)}
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
        sx={{
          backgroundColor: "#0171be",
          color: "#fff",
          padding: "10px",
          gap: "5px",
        }}
      >
        <Typography
          variant="body1"
          align="left"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Select Users
        </Typography>
        <TextField
          select
          label="Please select user"
          variant="outlined"
          fullWidth
          size="small"
          margin="normal"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          sx={{
            backgroundColor: "#fff",
            "& .MuiInputBase-root": {
              height: 32,
            },
            "& .MuiOutlinedInput-input": {
              padding: "6px 14px",
            },
          }}
        >
          <MenuItem value="User 1">User 1</MenuItem>
          <MenuItem value="User 2">User 2</MenuItem>
          <MenuItem value="User 3">User 3</MenuItem>
        </TextField>
        <Button
          variant="outlined"
          onClick={handleSearch}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            height: "25px",
            fontSize: "10px",
          }}
        >
          Search
        </Button>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        display="flex"
       justifyContent="end"
        sx={{
          backgroundColor: "#fff",
          padding: "10px",
          gap: "5px",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#0171be",
            borderColor: "#0171be",
            height: "25px",
            fontSize: "10px",
          }}
            onClick={exportToExcel}
          >
            Export to Excel
          </Button>
      </Box>
        <Box style={{ height: 400, width: "100%", padding: "10px" }}>
          <DataGrid
            rows={[
              ...rows,
              {
                date: "Total",
                clicks: totalClicks,
                signup: totalSignup,
                user: "",
              },
            ]}
            columns={columns}
            getRowId={(row) => row.date || "total"}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            onRowSelectionModelChange={(newSelection) => {
              setSelectedRows(newSelection);
            }}
          />
        </Box>
      </Paper>
    </Card>
  );
};

export default DayReportCard;
