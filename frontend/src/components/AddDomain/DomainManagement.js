import React, { useState } from "react";
import { Box } from "@mui/material";
import DomainTable from "../AddDomain/DomainTable";
import DomainModel from "../AddDomain/DomainModel";

const DomainManagement = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <DomainTable onAddDomain={handleOpen} />
      <DomainModel open={open} onClose={handleClose} />
    </Box>
  );
};

export default DomainManagement;
