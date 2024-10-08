import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { useStateContext } from '../contexts/ContextProvider';
import { links } from '../data/dummy';
import logo from '../data/logo-image11.png';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const currentColor = '#0171BE';

  const activeLink = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '16px',
    margin: '8px',
    backgroundColor: currentColor,
  };

  const normalLink = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    borderRadius: '8px',
    fontSize: '16px',
    color: 'gray',
    margin: '8px',
  };

  const drawerWidth = 240;

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('isAuthenticated');
    navigate("/Login"); 
  };

  return (
    <Drawer
      variant="permanent"
      open={activeMenu}
      sx={{
        width: activeMenu ? drawerWidth : 72,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: activeMenu ? drawerWidth : 72,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
          overflowX: 'hidden',
        },
      }}
    >
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-3 ml-3">
          <img src={logo} alt="logo" style={{
            width: "100%",
            height: "85px",
            display: "block",
            objectFit: "cover",
          }} />
        </div>
        <Tooltip title="Toggle Drawer" placement="right">
          <IconButton
            onClick={() => setActiveMenu(!activeMenu)}
            style={{ color: currentColor }}
          >
            {activeMenu ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
          </IconButton>
        </Tooltip>
      </div>

      <List>
        {links.map((item) => (
          <div key={item.title}>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                style={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                <ListItem button onClick={link.name === 'Logout' ? handleLogout : null}>
                  <ListItemIcon
                    style={{ color: link.isActive ? "#fff" : '' }}
                  >
                    {link.icon}
                  </ListItemIcon>
                  {activeMenu && (
                    <ListItemText
                      primary={link.name}
                      className="capitalize"
                      style={{ color: link.isActive ? '#fff' : '' }}
                    />
                  )}
                </ListItem>
              </NavLink>
            ))}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
