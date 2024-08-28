import React from "react";
import { Box, Typography, Button, Card, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Line, Bar, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AllReportsDetailTable = () => {
  const navigate = useNavigate();

  const handleClickReports = () => {
    navigate("/Clicks Report");
  };

  const handleTodayReport = () => {
    navigate("/Today Report");
  };

  const handleYesterdayReport = () => {
    navigate("/Yesterday Report");
  };

  const handleDayReport = () => {
    navigate("/Day Report");
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Report Data",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <Card>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          backgroundColor: "rgb(1, 113, 190)",
          padding: "10px",
          gap: "5px",
        }}
      >
        <Typography sx={{ color: "#fff" }}>
          All Reports Detail in Charts
        </Typography>
        <Box display="flex" justifyContent="end" sx={{ gap: "5px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleClickReports}
          >
            Clicks Report
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleTodayReport}
          >
            Today Report
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleYesterdayReport}
          >
            Yesterday Report
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              height: "25px",
              fontSize: "10px",
            }}
            onClick={handleDayReport}
          >
            Day Report
          </Button>
        </Box>
      </Box>
      <Paper sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "45px",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "300px",
              p: 2,
              backgroundColor: "white",
              border: 1, 
              borderColor: "#00000021", 
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Clicks Report (Line Chart)
            </Typography>
            <Box sx={{ height: "80%", width: "100%" }}>
              <Line data={chartData} options={chartOptions} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "500px",
              height: "300px",
              p: 2,
              backgroundColor: "white",
              border: 1,
              borderColor: "#00000021", 
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Today Report (Bar Chart)
            </Typography>
            <Box sx={{ height: "80%", width: "100%" }}>
              <Bar data={chartData} options={chartOptions} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "45px",
            marginTop: "25px",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "300px",
              p: 2,
              backgroundColor: "white",
              border: 1,
              borderColor: "#00000021", 
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Yesterday Report (Pie Chart)
            </Typography>
            <Box sx={{ height: "80%", width: "100%" }}>
              <Pie data={chartData} options={chartOptions} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "500px",
              height: "300px",
              p: 2,
              backgroundColor: "white",
              border: 1, 
              borderColor: "#00000021", 
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Day Report (Radar Chart)
            </Typography>
            <Box sx={{ height: "80%", width: "100%" }}>
              <Radar data={chartData} options={chartOptions} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Card>
  );
};

export default AllReportsDetailTable;
