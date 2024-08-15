import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, LogoutOutlined, RiseOutlined, UserAddOutlined } from '@ant-design/icons';
import './Sidebar.css'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const buttonNames = [
    {
      heading: "Dashboard",
      icon: <HomeOutlined />,
      path: '/DashboardPage'
    },
    {
      heading: "Staff Entry",
      icon: <UserAddOutlined />,
      path: '/StaffEntryPage'
    },
    {
      heading: "Customer Adding",
      icon: <UserAddOutlined />,
      path: '/CustomerAddingPage',
    },
    {
      heading: "Payment",
      icon: <RiseOutlined />,
      path: "/SalaryManagementPage"
    },
    {
      heading: "Logout",
      icon: <LogoutOutlined />,
      path: "/logout"
    },
  ];

  return (
    <div className='Sidebutton'>
      <div className='menu'>
        {buttonNames.map((item, index) => (
          <div
            className={selected === index ? 'menuItem active' : 'menuItem'}
            key={index}
            onClick={() => {
              if (item.path === "/logout") {
                localStorage.clear();
                window.location.href = "/";
              } else {
                setSelected(index);
                navigate(item.path);
              }
            }}
          >
            {item.icon}
            <span>{item.heading}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
