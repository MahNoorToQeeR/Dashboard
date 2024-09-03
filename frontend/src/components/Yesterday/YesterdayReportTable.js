import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  TextField,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as XLSX from "xlsx";

const TodatReportTable = () => {
  const rows = [
    {
      no: 1,
      subid: "Sub001",
      user: "User 1",
      country: "USA",
      city: "New York",
      region: "NY",
      location: "40.7128, -74.0060",
      postal: "10001",
      organization: "Org 1",
      hostman: "Hostman 1",
      device: "Desktop",
      browser: "Chrome",
      os: "Windows",
      ip: "192.168.1.1",
      proxy: "No",
      comment: "First comment",  
      matchWith: "Criteria 1",
      dateTime: "2024-08-25 12:00:00",
    },
    {
      no: 2,
      subid: "Sub002",
      user: "User 2",
      country: "Canada",
      city: "Toronto",
      region: "ON",
      location: "43.651070, -79.347015",
      postal: "M5H 2N2",
      organization: "Org 2",
      hostman: "Hostman 2",
      device: "Mobile",
      browser: "Safari",
      os: "iOS",
      ip: "192.168.1.2",
      proxy: "Yes",
      comment: "Second comment",  
      matchWith: "Criteria 2",
      dateTime: "2024-08-25 12:05:00",
    },
  ];
  
  const downloadReport = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Click Report");
    XLSX.writeFile(workbook, "ClickReport.xlsx");
  };

  const columns = [
    { field: "no", headerName: "No", width: 90 },
    { field: "user", headerName: "User", width: 150 },
    { field: "subid", headerName: "SubID", width: 150 },
    { field: "ip", headerName: "IP", width: 150 },
    { field: "organization", headerName: "Organization", width: 150 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    { field: "region", headerName: "Region", width: 150 },
    { field: "hostman", headerName: "Hostman", width: 150 },
    { field: "device", headerName: "Device", width: 150 },
    { field: "browser", headerName: "Browser", width: 150 },
    { field: "os", headerName: "OS", width: 150 },
    { field: "proxy", headerName: "Proxy", width: 150 },
    { field: "matchWith", headerName: "Match With", width: 150 },
    { field: "dateTime", headerName: "Date Time", width: 150 },
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
        <Typography sx={{ color: "#fff" }}>Click Reports</Typography>
        <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={downloadReport}
          >
            Download Report
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

export default TodatReportTable;
