import React, { useState } from "react";
import { Box } from "@mui/material";
import NetworkReportTable from "./NetworkReportTable";
import NetworkModel from "../AddNetwork/NetworkModel";

const DomainManagement = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <NetworkReportTable onAddNetwork={handleOpen} />
      <NetworkModel open={open} onClose={handleClose} />
    </Box>
  );
};

export default DomainManagement;
