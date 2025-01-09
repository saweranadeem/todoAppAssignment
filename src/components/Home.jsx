import React from "react";
import SideBar from "../pages/SideBar";
import Header from "../pages/Header";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
        <div>
          <Header />
        </div>
<div className="d-flex">
  <div><SideBar/></div>
  <div className="flex-1">
  <Outlet/>
  </div>
</div>      
     
    </div>
  );
};

export default Home;
