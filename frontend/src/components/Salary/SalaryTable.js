import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as XLSX from "xlsx";

const SalaryTable = () => {
  const [search, setSearch] = useState("");
  const rows = [
    {
      no: 1,
      user: "User 1",
      signup: 45,
      divert: 10,
      rate: 1.5,
      useramount: 67.5, 
      divertamount: 15, 
    },
    {
      no: 2,
      user: "User 2",
      signup: 32,
      divert: 7,
      rate: 2.0,
      useramount: 64, 
      divertamount: 14,
    },
    {
      no: 3,
      user: "User 3",
      signup: 67,
      divert: 20,
      rate: 1.8,
      useramount: 120.6, 
      divertamount: 36, 
    },
    {
      no: 4,
      user: "User 4",
      signup: 45,
      divert: 10,
      rate: 2.5,
      useramount: 112.5, 
      divertamount: 25, 
    },
  ];
  const totalSignup = rows.reduce((acc, row) => acc + row.signup, 0);
  const totalDivert = rows.reduce((acc, row) => acc + row.divert, 0);
  const totalUserAmount = rows.reduce((acc, row) => acc + row.useramount, 0);
  const totalDivertAmount = rows.reduce((acc, row) => acc + row.divertamount, 0);

  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "user", headerName: "User", width: 150 },
    { field: "signup", headerName: "Signup", width: 150 },
    { field: "divert", headerName: "Divert", width: 150 },
    { field: "rate", headerName: "Rate", width: 150 },
    { field: "useramount", headerName: "User Amount", width: 150 },
    { field: "divertamount", headerName: "Divert Amount", width: 150 },
  ];

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Salary Details");
    XLSX.writeFile(workbook, "salaryslip.xlsx");
  };
  return (
    <div>
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
          <Typography sx={{ color: "#fff" }}>Salary Details</Typography>
          
        <Button
          variant="outlined"
          onClick={handleExport}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            height: "25px",
            fontSize: "10px",
          }}
        >
          Export to Excel
        </Button>
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
                {
                  no: "Total",
                  user: "",
                  signup: totalSignup,
                  divert: totalDivert,
                  rate: "",
                  useramount: totalUserAmount,
                  divertamount: totalDivertAmount,
                },
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
    </div>
  );
};

export default SalaryTable;
