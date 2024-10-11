import React from 'react';
import {
  FiSettings,
  FiLogIn,
  FiUser,
  FiClipboard,
  FiTrendingUp,
  FiDollarSign,
  FiBarChart2,
  FiGlobe,
  FiUserCheck,
  FiCreditCard,
} from 'react-icons/fi';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SalaryIcon from '@mui/icons-material/MonetizationOn'; 
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';

import {BsCurrencyDollar, BsShield,} from 'react-icons/bs';
export const links = [
  {
    title: 'General',
    links: [
      { name: 'dashboard', icon: <DashboardIcon />, isActive: false },
      { name: 'salary', icon: <SalaryIcon />, isActive: false },
      { name: 'settings', icon: <SettingsIcon />, isActive: false },
      { name: 'login', icon: <LoginIcon />, isActive: false },
    ],
  },
  {
    title: 'Admin',
    links: [
      { name: 'dashboard', icon: <DashboardIcon />, isActive: false },
      { name: 'All Offers', icon: <FiClipboard /> },
      { name: 'All Users', icon: <FiClipboard /> },
      { name: 'add domain', icon: <FiGlobe /> },
      { name: 'landding pages', icon: <FiGlobe /> },
      { name: 'User Report', icon: <FiUser /> },
      { name: 'Offer Report', icon: <FiClipboard /> },
      { name: 'Network Report', icon: <FiTrendingUp /> },
      { name: 'All User Offers', icon: <FiUserCheck /> },
      { name: 'All Reports', icon: <FiBarChart2 /> },
      { name: 'Salary', icon: <FiDollarSign /> },
      { name: 'Settings', icon: <FiSettings /> },
      { name: 'Login', icon: <FiLogIn /> },
    ],
  },
];
// export const links = [
//   {
//     links: [
//       {
//         name: 'dashboard',
//         icon: <FiShoppingBag />,
//       },
//       {
//         name: 'All Offers',
//         icon: <FiClipboard />,
//       },
//       {
//         name: 'All Users',
//         icon: <FiClipboard />,
//       },
//       {
//         name: 'add domain',
//         icon: <FiGlobe />,
//       },
//       {
//         name: 'Landding Pages',
//         icon: <FiGlobe />,
//       },
//       {
//         name: 'User Report',
//         icon: <FiUser />,
//       },
//       {
//         name: 'Offer Report',
//         icon: <FiClipboard />,
//       },
//       {
//         name: 'Network Report',
//         icon: <FiTrendingUp />,
//       },
//       {
//         name: 'All User Offers',
//         icon: <FiUserCheck />,
//       },
//       {
//         name: 'All Reports',
//         icon: <FiBarChart2 />,
//       },
//       {
//         name: 'Salary',
//         icon: <FiDollarSign />,
//       },
//       {
//         name: 'Settings',
//         icon: <FiSettings />,
//       },
//       {
//         name: 'Login',
//         icon: <FiLogIn />,
//       }
//     ],
//   },
// ];
export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];