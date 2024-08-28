import React, { useEffect } from "react";
import { Tooltip, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import { toast } from "react-toastify";
import avatar from "../data/SS-Pro-img4.png";
import { useStateContext } from "../contexts/ContextProvider";
import { UserProfile } from ".";

const Navbar = ({ title }) => {
  const { handleClick, isClicked, setScreenSize } = useStateContext();
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const languageOpen = Boolean(languageAnchorEl);
  const currentColor = "#0171BE";

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setLanguageAnchorEl(null);
  };

  const showNotification = () => {
    toast("New Notification!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <Typography variant="h6" style={{ color: currentColor }}>
        {title}
      </Typography>
      <div className="flex items-center gap-2">
        <Tooltip title="Notifications" arrow>
          <IconButton size="small" color="primary" onClick={showNotification}>
            <NotificationsIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Language" arrow>
          <IconButton size="small" color="secondary" onClick={handleLanguageClick}>
            <LanguageIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={languageAnchorEl}
          open={languageOpen}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "150px",
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
