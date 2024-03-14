import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PatientDashboardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyles = `
    .sidebar {
      width: 115%;
      height: 50px;
      top:60px;
      background-color: #c8deff;
      position: fixed;
      margin-left:-40px;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      cursor: pointer;
      z-index: 1;
    }

    .bar {
      width: 30px;
      height: 2px;
      
      align-items:left;
      justify-content:center;
      background-color: black;
      margin: 3px 0;
      margin-left: 10px;
      transition: 0.4s;
    }

    .open .bar:nth-child(1) {
      transform: rotate(-50deg) translate(-9px, 7px);
    }

    .open .bar:nth-child(2) {
      opacity: 0;
    }

    .open .bar:nth-child(3) {
      transform: rotate(50deg) translate(-8px, -8px);
    }
  `;

  const menuContentStyles = `
  .dashboard-menu-content {
    position: fixed;
    top: 60px; /* Adjusted top position */
    left: ${isOpen ? "0px" : "-400px"};
    width: 345px;
    height: 100%;
    background-color: #91bafb;
    transition: 0.5s;
    z-index: 99;
  }

  .dashboard-name {
    color: white;
    margin-left: 10px;
    padding: 20px 0; /* Added padding */
    text-align: left; /* Center the dashboard name */
    background-color: #91bafb; /* Background color for the dashboard name */
  }

  .list-group-item {
    color: black;
    padding: 10px 20px;
    text-decoration: none;
  }

  .list-group-item:hover {
    background-color: #15172d;
  }
`;
  return (
    
    <div>
      <style>{sidebarStyles}</style>
      <style>{menuContentStyles}</style>
      <div className={`sidebar ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`dashboard-menu-content ${isOpen ? "open" : ""}`}>
      <div className="dashboard-name">Dashboard</div>
        <div className="list-group">
        <NavLink
            exact
            to="/patient-profile"
            className="list-group-item"
            activeClassName="active"
          >
            Your Profile
          </NavLink>
          <NavLink
            exact
            to="/appointments"
            className="list-group-item"
            activeClassName="active"
          >
            View Appointments
          </NavLink>
        </div>
      </div>
    </div>
  
  );
};

export default PatientDashboardMenu;