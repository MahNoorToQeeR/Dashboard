import React from "react";
import {
  Box,
  Typography,
  Card,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const columns = [
  { field: "no", headerName: "No", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "link",
    headerName: "Link",
    width: 250,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <Box>
        <IconButton color="primary" onClick={() => handleEdit(params.row.no)}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => handleDelete(params.row.no)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    ),
  },
];

const rows = [
  { no: 1, name: "Snow", link: "http://example.com/snow" },
  { no: 2, name: "Lannister", link: "http://example.com/lannister" },
  { no: 3, name: "Stark", link: "http://example.com/stark" },
  { no: 4, name: "Targaryen", link: "http://example.com/targaryen" },
  { no: 5, name: "Melisandre", link: "http://example.com/melisandre" },
];

const handleEdit = (no) => {
  console.log(`Edit row with id: ${no}`);
};

const handleDelete = (no) => {
  console.log(`Delete row with id: ${no}`);
};

const LanddingTable = ({ onAddLandingPage }) => {
  return (
    <Card sx={{ mt: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "#0171be", padding: "10px", gap: "5px" }}
      >
        <Typography sx={{ color: "#fff" }}>Landding Pages</Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="end"
          sx={{ gap: "5px" }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={onAddLandingPage}
          >
            Add Landing Pages
          </Button>
        </Box>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box sx={{ height: 400, width: "100%" }}>
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

export default LanddingTable;
