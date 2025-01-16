import React, { useState, useContext } from "react";
import headerLogo from "../assets/logo.svg";
import { AuthContext } from "../contextApi/AuthContext";

import { Search, NotificationsNone, Menu } from "@mui/icons-material";
const Header = () => {
  const { logOut } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const handleMenu = () => {
    setShowLogout(!showLogout);
  };
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="d-flex justify-content-center navigation ">
      <div className="headerLogo ">
        <img src={headerLogo} />
      </div>

      <div className="d-flex header">
        <div className="d-flex">
          <div className="headerInput">
            <input
              type="text"
              className="ps-4"
              placeholder="Search Board here..."
            />
          </div>
          <div>
            <Search className=" searchBar" />
          </div>
        </div>
        <div className="d-flex gap-4 ms-2">
          <button className="headerButton">
            <span className="me-2">+</span>Invite
          </button>

          <div className="headerIcons d-flex  ">
            <div className="icons  ">
              <NotificationsNone />
            </div>
            <div className="icons ">
              <Menu onClick={handleMenu} />
              {showLogout && (
                <button
                  className="bg-white rounded text-black position-absolute logoutButton"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
