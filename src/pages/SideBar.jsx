import React from "react";
import "./PageStyling.css";
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  return (
    <div className="sideBar">
      <div>
        <button className="sidebarButton">Create Todo</button>
      </div>
      <div className="sidebarLists">
        <ul className="d-flex flex-column justify-content-center">
          <li>
            <Link to="/home">To do's</Link>
          </li>
          <li>
            <Link to="myFlows">My Flows</Link>
          </li>
          <li>
            <Link to="createTodo">Other Flows</Link>
          </li>
          <li>
            <Link to="deleteTodo">Play4Flow</Link>
          </li>
          <li>
            <Link to="updateTodo">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
