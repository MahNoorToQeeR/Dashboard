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
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import SwitchWithLabel from "../SwitchWithLabel";

const UserReportTable = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const rows = [
    {
      no: 1,
      name: "User 1",
      totalClicks: 120,
      totalSignup: 45,
      totalDiverts: 10,
    },
    {
      no: 2,
      name: "User 2",
      totalClicks: 98,
      totalSignup: 32,
      totalDiverts: 7,
    },
    {
      no: 3,
      name: "User 3",
      totalClicks: 150,
      totalSignup: 67,
      totalDiverts: 20,
    },
    {
      no: 4,
      name: "User 4",
      totalClicks: 120,
      totalSignup: 45,
      totalDiverts: 10,
    },
  ];
  const totalClicks = rows.reduce((acc, row) => acc + row.totalClicks, 0);
  const totalSignup = rows.reduce((acc, row) => acc + row.totalSignup, 0);
  const totalDiverts = rows.reduce((acc, row) => acc + row.totalDiverts, 0);

  const handleUserDR = () => {
    navigate("/");
  };

  const handleOfferDR = () => {
    navigate("/");
  };

  const handleEdit = (no) => {
    console.log(`Edit row with id: ${no}`);
  };

  const handleDelete = (no) => {
    console.log(`Delete row with id: ${no}`);
  };

  const handleSearch = (no) => {
    console.log(`Search row with id: ${no}`);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Report");
    XLSX.writeFile(workbook, "UserReport.xlsx");
  };

  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "name", headerName: "User Name", width: 150 },
    { field: "totalClicks", headerName: "Total Clicks", width: 150 },
    { field: "totalSignup", headerName: "Total Signup", width: 150 },
    { field: "totalDiverts", headerName: "Total Diverts", width: 150 },
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
              onClick={() => handleSearch(params.row.no)}
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
        <Typography sx={{ color: "#fff" }}>User Reports</Typography>
        <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleUserDR}
          >
            User D/R
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleOfferDR}
          >
            Offer D/R
          </Button>
          <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            height: "25px",
            fontSize: "10px",
          }}
            onClick={exportToExcel}
          >
            Export to Excel
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
            rows={[
              ...rows,
              { no: "Total", name: "", totalClicks, totalSignup, totalDiverts },
            ]}
            columns={columns}
            getRowId={(row) => row.no || "total"}
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

export default UserReportTable;
