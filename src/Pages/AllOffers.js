import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Paper,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const AllOffers = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate(); // Initialize navigate

  // Sample data
  const offers = [
    { id: 1, name: "Offer 1" },
    { id: 2, name: "Offer 2" },
    { id: 3, name: "Offer 3" },
    // Add more offers here
  ];

  const filteredOffers = offers.filter((offer) =>
    offer.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Navigate to Add Offer page
  const handleAddOffer = () => {
    navigate("/addoffer"); // Change this to your Add Offer route
  };

  // Navigate to Assign Offer page
  const handleAssignOffer = () => {
    navigate("/assignoffer"); // Change this to your Assign Offer route
  };

  return (
    <Box sx={{ margin: "20px" }}>
      <Typography
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "30px",
        }}
      >
        All Offers
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          backgroundColor: "rgb(103, 160, 205)",
          padding: "10px",
          gap: "5px",
        }}
      >
        <Typography sx={{ color: "#fff" }}>All Offers</Typography>
        <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff" }}
            onClick={handleAddOffer} // Add onClick handler
          >
            Add Offer
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff" }}
            onClick={handleAssignOffer} // Add onClick handler
          >
            Assign Offer
          </Button>
        </Box>
      </Box>
      <Paper sx={{ padding: "16px" }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              height: 40,
            },
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px",
            },
            width: "50%",
            float: "inline-end",
          }}
        />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOffers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((offer, index) => (
                  <TableRow key={offer.id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{offer.name}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Action
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={filteredOffers.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default AllOffers;
