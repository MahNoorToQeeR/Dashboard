import React from "react";
import { Box, Card, Divider, Typography } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TodayIcon from "@mui/icons-material/Today";
import BarChartIcon from "@mui/icons-material/BarChart";

const DataCards = () => {
  const cardData = [
    {
      color: "#FFCDD2",
      icon: BarChartIcon,
      count: "120",
      percentage: { label: "Today Signup", color: "#F44336" },
      iconColor: "#B71C1C",
    },
    {
      color: "#BBDEFB",
      icon: SignalCellularAltIcon,
      count: "1,200",
      percentage: { label: "Yesterday Signup", color: "#2196F3" },
      iconColor: "#0D47A1",
    },
    {
      color: "#C8E6C9",
      icon: TodayIcon,
      count: "$34,000",
      percentage: { label: "This Month Signup", color: "green" },
      iconColor: "#1B5E20",
    },
    {
      color: "#D1C4E9",
      icon: CalendarMonthIcon,
      count: "5,000",
      percentage: { label: "Last Month Signup", color: "purple" },
      iconColor: "#4A148C",
    },
  ];

  return (
    <Box display="flex" gap="1rem" flexWrap="wrap">
      {cardData.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <Card
            key={index}
            sx={{
              flex: "1 1 calc(25% - 1rem)",
              padding: "1rem",
              backgroundColor: "#fff",
              border: "1px solid transparent", 
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
              "@media (max-width: 600px)": {
                flex: "1 1 100%",
              },
            }}
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
                width="2.5rem" 
                height="2.5rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <IconComponent
                  sx={{
                    fontSize: "1.5rem", 
                    color: card.iconColor,
                  }}
                />
              </Box>
              <Box textAlign="right">
                <Typography variant="h6" fontSize="26px">
                  {card.count}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ margin: "0.5rem 0" }} />
            <Box>
              <Typography variant="caption" display="flex" alignItems="center">
                <Typography
                  component="span"
                  variant="caption"
                  fontWeight="bold"
                  sx={{ color: card.percentage.color }}
                >
                  {card.percentage.label}
                </Typography>
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default DataCards;
