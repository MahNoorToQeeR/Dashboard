import { Box } from "@mui/material";
import React from "react";
import DataCards from "../components/OfferReport/DataCards";
import OfferReportTable from "../components/OfferReport/OfferReportTable";

const OfferReport = () => {
  return (
    <Box sx={{ margin: "20px" }}>
      <DataCards/>
      <OfferReportTable/>
    </Box>
  );
};

export default OfferReport;
