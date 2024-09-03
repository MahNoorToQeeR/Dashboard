import React, { useState } from "react";
import { Box, Card, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import TodayIcon from "@mui/icons-material/Today";

const DataCards = () => {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const cardData = [
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
      percentage: { label: "Total Signup", color: "#2196F3" },
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
      percentage: { label: "Divert Signup", color: "green" },
      iconColor: "#1B5E20",
    },
    {
      color: "#D1C4E9",
      count: "5,000",
      percentage: { label: "User Amount", color: "purple" },
    },
    {
      color: "#D1C4E9",
      count: "5,000",
      percentage: { label: "Divert Amount", color: "#6759b1" },
    },
    {
      color: "#D1C4E9",
      count: "5,000",
      percentage: { label: "Total Amount", color: "#6759b1" },
    },
  ];

  return (
    <Box>
      <Box mb={2}>
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel>Month Invoice</InputLabel>
          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            label="Month Invoice"
          >
            <MenuItem value={"January"}>January</MenuItem>
            <MenuItem value={"February"}>February</MenuItem>
            <MenuItem value={"March"}>March</MenuItem>
            <MenuItem value={"April"}>April</MenuItem>
            <MenuItem value={"May"}>May</MenuItem>
            <MenuItem value={"June"}>June</MenuItem>
            <MenuItem value={"July"}>July</MenuItem>
            <MenuItem value={"August"}>August</MenuItem>
            <MenuItem value={"September"}>September</MenuItem>
            <MenuItem value={"October"}>October</MenuItem>
            <MenuItem value={"November"}>November</MenuItem>
            <MenuItem value={"December"}>December</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
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
      </Box>
    </Box>
  );
};

export default DataCards;
