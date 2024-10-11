import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SwitchWithLabel from "../SwitchWithLabel";
import { All, GetAllOffer } from "../../api/axiosInterceptors";

const AllUserOffers = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState([]);
  const [allOffers, setAllOffers] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  // Fetch offers
  const fetchOfferData = async () => {
    try {
      const res = await GetAllOffer();
      setAllOffers(res?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch users
  const fetchData = async () => {
    try {
      const res = await All();
      setUserList(res?.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 // Combine offers and users data
const combineOfferAndUser = () => {
  const mergedData = allOffers.map((offer) => {
    const user = userList.find((u) => u._id === offer.user_id); // match user with offer by user_id
    return {
      ...offer,
      user: user && user.name ? user.name : offer.user_id ? "Unknown User" : "", // Show "Unknown User" if user_id exists but user isn't found, otherwise empty string
    };
  });
  setCombinedData(mergedData);
};


  useEffect(() => {
    fetchData();
    fetchOfferData();
  }, []);

  useEffect(() => {
    if (userList.length && allOffers.length) {
      combineOfferAndUser();
    }
  }, [userList, allOffers]);

  const handleActiveOffers = () => {
    navigate("/");
  };

  const handleDeactiveOffers = () => {
    navigate("/");
  };

  // Define the columns for the DataGrid
  const columns = [
    {
      field: "user",
      headerName: "User",
      width: 150,
    },
    { field: "offer_name", headerName: "Offer", width: 150 },
    { field: "network", headerName: "Network", width: 150 },
    { field: "offer_rate", headerName: "Rate", width: 150 },
    { field: "status", headerName: "Offer Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) =>
        params.row ? (
          <Box>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
            <SwitchWithLabel />
          </Box>
        ) : null,
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
            onClick={handleActiveOffers}
          >
            Active Offer
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleDeactiveOffers}
          >
            Deactive Offer
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
            Delete Selected
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
            rows={combinedData}  // Use the combined data
            columns={columns}
            getRowId={(row) => row._id}  
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

export default AllUserOffers;
