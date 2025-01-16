import React from "react";
import "./PageStyling.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const gotoCreatePage = () => {
    navigate("createTodo");
  };

  return (
    <div className="sideBar">
      <div>
        <button className="sidebarButton" onClick={gotoCreatePage}>
          Create Todo
        </button>
      </div>
      <div className="sidebarLists">
        <ul className="d-flex flex-column justify-content-center">
          <li>
            <Link to="/home">To do's</Link>
          </li>
          <li>
            <Link to="myFlows">My Flows</Link>
          </li>
          <li>Other Flows</li>
          <li>Play4Flow</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
