import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faBars, faGauge } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import "./css/custom.css";

const SideBar = () => {
  const [navWidth, setNavWidth] = useState(0);

  const openNav = () => {
    setNavWidth(250);
  };

  const closeNav = () => {
    setNavWidth(0);
  };
  return (
    <>
      <div className="col-md-1 p-0 bg-lightBlack text-light">
        {/* Sidebar */}
        <div id="mySidenav" class="sidenav" style={{ width: navWidth }}>
          <NavLink to="" className="closebtn" onClick={closeNav}>
            &times;
          </NavLink>
          <NavLink to="/DashBoard">
            <FontAwesomeIcon icon={faGauge} style={{ marginRight: "12px" }} />
            DashBoard
          </NavLink>
          <NavLink to="/DashboardOrder">
            <FontAwesomeIcon
              icon={faFileLines}
              style={{ marginRight: "12px" }}
            />
            Order
          </NavLink>
        </div>
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ margin: "12px 20px", fontSize: "40px" }}
          />
        </span>
        {/* Sidebar */}
      </div>
    </>
  );
};

export default SideBar;
