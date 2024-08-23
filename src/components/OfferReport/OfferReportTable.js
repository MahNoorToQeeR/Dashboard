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
import  XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import SwitchWithLabel from "../SwitchWithLabel";

const OfferReportTable = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([
    {
      no: 1,
      name: "User 1",
      offernetwork: "Network 1",
      offerlink: "Link 1",
      totalClicks: 120,
      totalSignup: 45,
      totalDiverts: 10,
      status: "Active",
    },
    {
      no: 2,
      name: "User 2",
      offernetwork: "Network 2",
      offerlink: "Link 2",
      totalClicks: 98,
      totalSignup: 32,
      totalDiverts: 7,
      status: "",
    },
    {
      no: 3,
      name: "User 3",
      offernetwork: "Network 3",
      offerlink: "Link 3",
      totalClicks: 150,
      totalSignup: 67,
      totalDiverts: 20,
      status: "Active",
    },
    {
      no: 4,
      name: "User 4",
      offernetwork: "Network 4",
      offerlink: "Link 4",
      totalClicks: 120,
      totalSignup: 45,
      totalDiverts: 10,
      status: "Active",
    },
  ]);
  const totalClicks = rows.reduce((acc, row) => acc + row.totalClicks, 0);
  const totalSignup = rows.reduce((acc, row) => acc + row.totalSignup, 0);
  const totalDiverts = rows.reduce((acc, row) => acc + row.totalDiverts, 0);

  const handleOfferStatus = () => {
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
  const handleDeleteSelectedRows = () => {
    setRows(rows.filter((row) => !selectedRows.includes(row.no)));
  };

  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "name", headerName: "Offer Name", width: 150 },
    { field: "offernetwork", headerName: "Offer Network", width: 150 },
    { field: "offerlink", headerName: "Offer Link", width: 150 },
    { field: "totalClicks", headerName: "Total Clicks", width: 150 },
    { field: "totalSignup", headerName: "Total Signup", width: 150 },
    { field: "totalDiverts", headerName: "Total Diverts", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
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
              onClick={() => handleSearch(`Search row with id: ${params.row.no}`)}
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
        <Typography sx={{ color: "#fff" }}>Offer Reports</Typography>
        <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleOfferStatus}
          >
            Offer Status
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
            Pakistan
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
            USA
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
            onClick={handleDeleteSelectedRows}
          >
            Delete Selected
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
           Show Fields
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

export default OfferReportTable;
