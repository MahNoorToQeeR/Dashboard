import React from "react";
import { Box, Card, Divider, Icon, Typography } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TodayIcon from "@mui/icons-material/Today";
import BarChartIcon from "@mui/icons-material/BarChart";

const DataCards = () => {
  const cardData = [
    {
      color: "#FFCDD2",
      icon: (
        <BarChartIcon
          sx={{
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        />
      ),
      count: "120",
      percentage: { label: "Today Signup", color: "#F44336" },
      iconColor: "#B71C1C",
    },
    {
      color: "#BBDEFB",
      icon: (
        <SignalCellularAltIcon
          sx={{
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        />
      ),
      count: "1,200",
      percentage: { label: "Yesterday Signup", color: "#2196F3" },
      iconColor: "#0D47A1",
    },
    {
      color: "#C8E6C9",
      icon: (
        <TodayIcon
          sx={{
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        />
      ),
      count: "$34,000",
      percentage: { label: "This Month Signup", color: "green" },
      iconColor: "#1B5E20",
    },
    {
      color: "#D1C4E9",
      icon: (
        <CalendarMonthIcon
          sx={{
            display: " flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        />
      ),
      count: "5,000",
      percentage: { label: "Last Month Signup", color: "purple" },
      iconColor: "#4A148C",
    },
  ];

  return (
    <Box display="flex" gap="0.5rem" flexWrap="wrap">
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            flex: "1 1 calc(25% - 0.5rem)",
            padding: "0.5rem",
            backgroundColor: "transparent", 
            border: `1px solid ${card.percentage.color}`, 
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
              width="1.5rem"
              height="1.5rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon style={{ fontSize: "16px", color: card.iconColor }}>
                {card.icon}
              </Icon>
            </Box>
            <Box textAlign="right">
              <Typography variant="body2" fontSize="0.8rem">
                {card.count}
              </Typography>
            </Box>
          </Box>
          <Divider style={{ margin: "0.5rem 0" }} />
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
        </Card>
      ))}
    </Box>
  );
};

export default DataCards;
