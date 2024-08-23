import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { useStateContext } from '../contexts/ContextProvider';
import { links } from '../data/dummy';
import logo from '../data/logo-image1.png';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const currentColor = '#0171BE';

  const activeLinkStyle = {
    backgroundColor: currentColor,
    color: '#fff',
  };

  const drawerWidth = 240;

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
          <img src={logo} alt="logo" className="w-10 h-10" />
          {activeMenu && <span className="text-3xl font-extrabold">Media</span>}
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
            {item.links.map((link)=> (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                className={({ isActive }) =>
                  isActive ? 'text-gray-700 dark:text-gray-200 hover:bg-light-gray' : ''
                }
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                <ListItem button>
                  <ListItemIcon style={{ color: currentColor }}>
                    {link.icon}
                  </ListItemIcon>
                  {activeMenu && (
                    <ListItemText primary={link.name} className="capitalize" />
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