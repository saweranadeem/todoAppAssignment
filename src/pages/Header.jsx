import React from "react";
import headerLogo from "../assets/logo.svg";

import { Search, NotificationsNone, Menu } from "@mui/icons-material";
const Header = () => {
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
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
