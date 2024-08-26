import React, { useEffect } from "react";
import { Tooltip, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import avatar from "../data/SS-Pro-img4.png";
import { useStateContext } from "../contexts/ContextProvider";
import { UserProfile } from ".";

const Navbar = ({ title }) => {
  const { handleClick, isClicked, setScreenSize } = useStateContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const languageOpen = Boolean(languageAnchorEl);
  const currentColor = '#0171BE';

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLanguageAnchorEl(null);
  };

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <Typography variant="h6" style={{ color: currentColor }}>
        {title}
      </Typography>
      <div className="flex items-center gap-2">
        <Tooltip title="Notifications" arrow>
          <IconButton
            size="small"
            onClick={handleNotificationClick}
          >
            <NotificationsIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '300px',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Notification 1</MenuItem>
          <MenuItem onClick={handleClose}>Notification 2</MenuItem>
        </Menu>
        
        <Tooltip title="Language" arrow>
          <IconButton
            size="small"
            onClick={handleLanguageClick}
          >
            <LanguageIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={languageAnchorEl}
          open={languageOpen}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '150px',
            },
          }}
        >
          <MenuItem onClick={handleClose}>English</MenuItem>
          <MenuItem onClick={handleClose}>Arabic</MenuItem>
        </Menu>

        <Tooltip title="Profile" arrow>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
          </div>
        </Tooltip>
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
