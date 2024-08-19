import React, { useState } from "react";
import { Box, Typography, Button, Card, TextField, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import SwitchWithLabel from "../SwitchWithLabel";

const CardComponent = () => {
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();

  const offers = [
    { id: 1, name: "Offer 1" },
    { id: 2, name: "Offer 2" },
    { id: 3, name: "Offer 3" },
  ];

  const filteredOffers = offers.filter((offer) =>
    offer.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddOffer = () => {
    navigate("/addoffer");
  };

  const handleAssignOffer = () => {
    navigate("/assignoffer");
  };

  const columns = [
    { field: "id", headerName: "No", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "actions",
      headerName: "Action",
      width: 300,
      renderCell: (params) => (
        <Box display="flex" gap="20px" alignItems="center">
          <SearchIcon sx={{ color: "green" }} />
          <EditIcon sx={{ color: "#03A9F4" }} />
          <DeleteIcon sx={{ color: "red" }} />
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
            rows={filteredOffers}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 25]}
            pagination
          />
        </Box>
      </Paper>
    </Card>
  );
};

export default CardComponent;
