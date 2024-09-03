import React, { useState } from "react";
import { Box, Card, Typography, TextField } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import TodayIcon from "@mui/icons-material/Today";
import BarChartIcon from "@mui/icons-material/BarChart";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DataCards = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const cardData = [
    {
      color: "#FFCDD2",
      icon: (
        <BarChartIcon
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        />
      ),
      count: "120",
      percentage: { label: "Today", color: "#F44336" },
      iconColor: "#B71C1C",
    },
    {
      color: "#BBDEFB",
      icon: (
        <SignalCellularAltIcon
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        />
      ),
      count: "1,200",
      percentage: { label: "Yesterday", color: "#2196F3" },
      iconColor: "#0D47A1",
    },
    {
      color: "#C8E6C9",
      icon: (
        <TodayIcon
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        />
      ),
      count: "$34,000",
      percentage: { label: "This Month", color: "green" },
      iconColor: "#1B5E20",
    },
    {
      color: "#D1C4E9",
      count: "5,000",
      percentage: { label: "Last Month", color: "purple" },
    },
    {
      color: "#D1C4E9",
      count: "5,000",
      percentage: { label: "All Time", color: "#6759b1" },
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" gap="0.5rem" flexWrap="nowrap" alignItems="center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 calc(20% - 0.5rem)", 
              padding: "0.5rem",
              backgroundColor: "transparent",
              border: `1px solid ${card.percentage.color}`, 
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="caption" display="flex" alignItems="center">
                  <Typography
                    component="span"
                    variant="caption"
                    fontWeight="bold"
                    style={{ color: card.percentage.color }}
                  >
                    {card.percentage.label}
                  </Typography>
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="body2" fontSize="0.8rem">
                  {card.count}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
        <Box flex="1 1 auto" display="flex" justifyContent="flex-end">
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default DataCards;
