import React, { useState } from "react";
import { Box } from "@mui/material";
import LanddingTable from "../LanddingPages/LanddingTable";
import LanddingModel from "../LanddingPages/LanddingModel";

const LanddingPagesManage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <LanddingTable onAddLandingPage={handleOpen} />
      <LanddingModel open={open} onClose={handleClose} />
    </Box>
  );
};

export default LanddingPagesManage;
