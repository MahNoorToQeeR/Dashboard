import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  Card,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DataCards from "../../components/DataCards";
import { DataGrid } from "@mui/x-data-grid"; 
import SearchIcon from "@mui/icons-material/Search";

const ViewModel = ({ open, onClose, userData }) => {
  const [search, setSearch] = useState(""); // State for search input
  const row = [
    // Sample data: replace this with your actual data
    { id: 1, name: "Offer 1", email: 150, password: 10, phone_no: "link1.com", address: "$100", CNIC: "Result 1" },
    { id: 2, name: "Offer 2", email: 200, password: 20, phone_no: "link2.com", address: "$200", CNIC: "Result 2" },
    // Add more rows as needed
  ]; 

  const columns = [
    { field: "name", headerName: "Offer Name", width: 150 },
    { field: "email", headerName: "Clicks", width: 200 },
    { field: "password", headerName: "Conversations", width: 150 },
    { field: "phone_no", headerName: "Offer Link", width: 150 },
    { field: "address", headerName: "PayOut", width: 150 },
    { field: "CNIC", headerName: "Offer Result", width: 150 },
    {
      field: "Report",
      headerName: "Actions",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton color="primary" onClick={() => handleViewDetails(params.row)}>
            <SearchIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  // Function to handle viewing details
  const handleViewDetails = (rowData) => {
    console.log("Viewing details for:", rowData);
    // You can navigate or open another modal with more details about the offer
  };

  // Filtered rows based on search input
  const filteredRows = row.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <DialogTitle
        sx={{ backgroundColor: "#0171BE", color: "#fff", position: "relative" }}
      >
        {userData?.name} Details
        <Button
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#fff",
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </Button>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <DataCards />
        </Box>
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
              {userData?.name} Offers Details
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="end" sx={{ gap: "5px" }}>
              <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff", height: "25px", fontSize: "10px" }}>
                Signup Reports
              </Button>
              <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff", height: "25px", fontSize: "10px" }}>
                Click Reports
              </Button>
              <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff", height: "25px", fontSize: "10px" }}>
                Salary
              </Button>
              <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff", height: "25px", fontSize: "10px" }}>
                LogOut
              </Button>
            </Box>
          </Box>
            <Box style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={filteredRows} 
                columns={columns}
                getRowId={(row) => row.id}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Box>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ViewModel;
