import React from "react";
import {
  Box,
  Card,
  Divider,
  Icon,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TodayIcon from "@mui/icons-material/Today";
import BarChartIcon from "@mui/icons-material/BarChart";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import { Start } from "@mui/icons-material";

const Dashboard = () => {
  const cardData = [
    {
      color: "#FFCDD2",
      icon: <BarChartIcon />,
      count: "120",
      percentage: { label: "Today Signup", color: "#F44336" },
      iconColor: "#B71C1C",
    },
    {
      color: "#BBDEFB",
      icon: <SignalCellularAltIcon />,
      count: "1,200",
      percentage: { label: "Yesterday Signup", color: "#2196F3" },
      iconColor: "#0D47A1",
    },
    {
      color: "#C8E6C9",
      icon: <TodayIcon />,
      count: "$34,000",
      percentage: { label: "This Month Signup", color: "green" },
      iconColor: "#1B5E20",
    },
    {
      color: "#D1C4E9",
      icon: <CalendarMonthIcon />,
      count: "5,000",
      percentage: { label: "Last Month Signup", color: "purple" },
      iconColor: "#4A148C",
    },
  ];

  const columns = [
    { id: "no", label: "No", minWidth: 50 },
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
      align: "right",
    },
    {
      id: "password",
      label: "Password",
      minWidth: 170,
      align: "right",
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
      align: "right",
    },
  ];

  function createData(no, name, email, password, ...actions) {
    return { no, name, email, password, actions };
  }

  const rows = [
    createData(
      1,
      "User One",
      "user1@example.com",
      "*****",
      <Button size="small"><SearchIcon sx={{ color: "green" }} /></Button>,
      <Button size="small"><EditIcon sx={{ color: "#03A9F4" }} /></Button>,
      <Button size="small"><DeleteIcon sx={{ color: "red" }} /></Button>,
      <Button size="small"><RemoveRedEyeIcon sx={{ color: "#009688" }} /></Button>,
      <Button size="small"><InsertPageBreakIcon sx={{ color: "#3F51B5" }} /></Button>
    ),
    createData(
      2,
      "User Two",
      "user2@example.com",
      "*****",
      <Button size="small"><SearchIcon sx={{ color: "green" }} /></Button>,
      <Button size="small"><EditIcon sx={{ color: "#03A9F4" }} /></Button>,
      <Button size="small"><DeleteIcon sx={{ color: "red" }} /></Button>,
      <Button size="small"><RemoveRedEyeIcon sx={{ color: "#009688" }} /></Button>,
      <Button size="small"><InsertPageBreakIcon sx={{ color: "#3F51B5" }} /></Button>
    ),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ margin: "20px" }}>
      <Box display="flex" gap="1rem" flexWrap="wrap">
        {cardData.map((card, index) => (
          <Card
            key={index}
            style={{ flex: "1 1 calc(25% - 1rem)", padding: "1rem" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                textAlign="center"
                bgcolor={card.color}
                borderRadius="50%"
                width="4rem"
                height="4rem"
              >
                <Icon style={{ fontSize: "40px", color: card.iconColor }}>
                  {card.icon}
                </Icon>
              </Box>
              <Box textAlign="right">
                <Typography variant="h4">{card.count}</Typography>
              </Box>
            </Box>
            <Divider style={{ margin: "1rem 0" }} />
            <Box>
              <Typography variant="button" display="flex" alignItems="center">
                <Typography
                  component="span"
                  variant="button"
                  fontWeight="bold"
                  style={{ color: card.percentage.color }}
                >
                  {card.percentage.label}
                </Typography>
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>

      <Box mt={4}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ backgroundColor: "rgb(103, 160, 205)", padding: "10px", gap: "5px" }}
        >
          <Typography sx={{ color: "#fff" }}>All Users</Typography>
          <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
            <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
              Add Domain
            </Button>
            <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
              Add User
            </Button>
            <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
              Add Offer
            </Button>
            <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
              Add Network
            </Button>
          </Box>
        </Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth,
                        alignItems: "Start"
                       }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "action" ? (
                              <Box display="flex" gap="10px">
                                {row.actions}
                              </Box>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
