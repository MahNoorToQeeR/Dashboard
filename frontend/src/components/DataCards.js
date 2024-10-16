import React, { useState } from "react";
import { Box, Card, Divider, Typography, IconButton } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TodayIcon from "@mui/icons-material/Today";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Arrow icon
import CountUp from 'react-countup';

const DataCards = () => {
  const [clickCounts, setClickCounts] = useState([20, 150, 300, 80]);

  const handleClick = (index) => {
    const newClickCounts = [...clickCounts];
    newClickCounts[index] += 1; 
    setClickCounts(newClickCounts);
  };

  const cardData = [
    {
      color: "#FFCDD2",
      icon: BarChartIcon,
      count: 120,
      percentage: { label: "Today Signup", color: "#F44336" },
      iconColor: "#B71C1C",
      clicksLabel: "Today Clicks",
    },
    {
      color: "#BBDEFB",
      icon: SignalCellularAltIcon,
      count: 1200,
      percentage: { label: "Yesterday Signup", color: "#2196F3" },
      iconColor: "#0D47A1",
      clicksLabel: "Yesterday Clicks",
    },
    {
      color: "#C8E6C9",
      icon: TodayIcon,
      count: 34000,
      percentage: { label: "This Month Signup", color: "green" },
      iconColor: "#1B5E20",
      clicksLabel: "This Month Clicks",
    },
    {
      color: "#D1C4E9",
      icon: CalendarMonthIcon,
      count: 5000,
      percentage: { label: "Last Month Signup", color: "purple" },
      iconColor: "#4A148C",
      clicksLabel: "Last Month Clicks",
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
                  <CountUp
                    start={0}
                    end={card.count}
                    duration={2.5} 
                    separator=","
                    prefix={card.count > 10000 ? '$' : ''}
                  />
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ margin: "0.5rem 0" }} />
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="caption" display="flex" alignItems="center">
                <Typography
                  component="span"
                  variant="caption"
                  fontWeight="bold"
                  sx={{ color: card.percentage.color }}  
                >
                  {card.percentage.label}
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: "12px", marginLeft: "4px", }} />
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
              <Typography variant="caption" display="block" sx={{ color: card.percentage.color }}>  
                {card.clicksLabel}
              </Typography>
              <Typography
                variant="caption"
                fontWeight="bold"
                sx={{ cursor: "pointer",}} 
                onClick={() => handleClick(index)}
              >
                <CountUp
                  start={0}
                  end={clickCounts[index]}
                  duration={1.5}
                />
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default DataCards;
