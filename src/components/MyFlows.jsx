import React from "react";
import "./ComponentStyling.css";
const MyFlows = () => {
  return (
    <div className="myFlows">
      <h2 className="tableHeading">My Flows</h2>
      <div className="myFlowsContainer d-flex flex-column text-white justify-content-center align-items-center ">
        <div className="myFlowsAdd">+</div>
        <div className="myFlowsPara">Create New Flow</div>
      </div>
    </div>
  );
};

export default MyFlows;
