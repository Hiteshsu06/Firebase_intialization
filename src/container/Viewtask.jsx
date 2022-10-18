import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/Viewtask.css";
import { MdOutlineArrowBack } from "react-icons/md";

const Viewtask = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backarrowHandler = () => {
    navigate("/tasks");
  };
  const data = location.state;
  return (
    <div className="inputContainer">
      <div id="taskHeader">
      <h3>Task Details</h3>
      </div>
      <div id="viewtaksName">
        <div>
          <label className="viewformLabel">Name:</label>
        </div>
        <div id="viewformData1">{data.name}</div>
      </div>
      <div id="viewtaskDescription">
        <div>
          <label className="viewformLabel">Description:</label>
        </div>
        <div id="viewformData2">{data.description}</div>
      </div>
      <button onClick={backarrowHandler} id="backbutton">
        <MdOutlineArrowBack />
      </button>
    </div>
  );
};

export default Viewtask;
