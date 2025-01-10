import React from "react";
import SideBar from "../pages/SideBar";
import Header from "../pages/Header";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="homeContainer" >
      <div>
        <Header />
      </div>
      <div className="d-flex homeBody">
        <div>
          <SideBar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
