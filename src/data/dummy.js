import React from 'react';
import {
  FiShoppingBag,
  FiSettings,
  FiLogIn,
  FiUser,
  FiClipboard,
  FiTrendingUp,
  FiDollarSign,
  FiBarChart2,
  FiGlobe,
  FiUserCheck,
  FiClock,
  FiCalendar,
  FiCreditCard,
} from 'react-icons/fi';
import {BsCurrencyDollar, BsShield,} from 'react-icons/bs';
export const links = [
  {
    links: [
      {
        name: 'dashboard',
        icon: <FiShoppingBag />,
      },
      {
        name: 'Assignoffer',
        icon: <FiClipboard />,
      },
      {
        name: 'addoffer',
        icon: <FiClipboard />,
      },
      {
        name: 'adddomain',
        icon: <FiGlobe />,
      },
      {
        name: 'LanddingPages',
        icon: <FiGlobe />,
      },
      {
        name: 'UserReport',
        icon: <FiUser />,
      },
      {
        name: 'OfferReport',
        icon: <FiClipboard />,
      },
      {
        name: 'AllOffers',
        icon: <FiClipboard />,
      },
      {
        name: 'NetworkReport',
        icon: <FiTrendingUp />,
      },
      {
        name: 'AllUserOffers',
        icon: <FiUserCheck />,
      },
      {
        name: 'ClickReport',
        icon: <FiBarChart2 />,
      },
      {
        name: 'TodayReport',
        icon: <FiClock />,
      },
      {
        name: 'YesterdayReport',
        icon: <FiClock />,
      },
      {
        name: 'DayReport',
        icon: <FiCalendar />,
      },
      {
        name: 'Salary',
        icon: <FiDollarSign />,
      },
      {
        name: 'Settings',
        icon: <FiSettings />,
      },
      {
        name: 'Login',
        icon: <FiLogIn />,
      },
    ],
  },
];
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