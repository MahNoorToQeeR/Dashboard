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
} from "@mui/material";

const AllOffers = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  return (
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ backgroundColor: "rgb(103, 160, 205)", padding: "10px", gap: "5px" }}
        >
    <Paper sx={{ padding: "16px" }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
