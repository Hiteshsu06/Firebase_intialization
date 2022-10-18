import React, { useEffect, useState } from "react";
import "../style/Tasks.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { TbDirectionsOff } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'reactjs-popup/dist/index.css';


const Tasks = () => {
  const navigate = useNavigate();
  const [tasksArray, setTasksArray] = useState([]);
  const createTaskButtonHandler = () => {
    navigate("/createtask");
  };
  useEffect(() => {
    const dataRetrieve = localStorage.getItem("creatTaskData");
    const array = JSON.parse(dataRetrieve);
    const tokenRetrive = localStorage.getItem("res");
    if (tokenRetrive === "success") {
      toast.success("Sucessfully login");
      localStorage.setItem("res", "");
    }
    if (array != null) {
      setTasksArray(array);
    } else {
      setTasksArray([]);
    }
  }, []);

  // Delete Button Handler
  const deleteButtonHandler = (mapElementid) => {
    confirmAlert({
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => { 
            const deleteData = tasksArray.filter((elementId) => {
            return elementId.id !== mapElementid;
          });
          setTasksArray(deleteData);
          localStorage.setItem("creatTaskData", JSON.stringify(deleteData));}
        },
        {
          label: 'No'
        }
      ]
    })
   
  };
  // Swap Button Handler
  const swapButtonHandler = (mapElementData) => {
    if (mapElementData.status === "pending") {
      mapElementData["status"] = "completed"; //putting new value to status
      const swapArray = tasksArray.map(
        (obj) => [mapElementData].find((o) => o.id === obj.id) || obj
      );
      localStorage.setItem("creatTaskData", JSON.stringify(swapArray)); //setting up swap method
      setTasksArray(swapArray);
    } else {
      mapElementData["status"] = "pending"; //putting new value to status
      const swapArray = tasksArray.map(
        (obj) => [mapElementData].find((o) => o.id === obj.id) || obj
      );
      localStorage.setItem("creatTaskData", JSON.stringify(swapArray)); //setting up swap method
      setTasksArray(swapArray);
    }
  };


  //Pending data count
  const countPending=  
    tasksArray.filter((filterElement) => {
      return filterElement.status === "pending";
    }).length
  
  // Complete data count
  const countComplete= 
    tasksArray.filter((filterElement) => {
      return filterElement.status === "completed";
    }).length


  return (
    <div id="wholeContainer">
      <div>
        <h1>Statistics</h1>
      </div>
      <div id="staticsBoxes">
        <div className="staticBox">
          <div>
            <h4>Pending</h4>
          </div>
          <div>
           {countPending}
          </div>
        </div>
        <div className="staticBox">
          <div>
            <h4>Completed</h4>
          </div>
          <div>
           {countComplete}
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={createTaskButtonHandler}
          className="btn btn-outline-danger"
          id="taskbutton"
        >
          Create Task
        </button>
      </div>
      <div id="heading1">
        <h3>Pending Task</h3>
      </div>
      <div className="customTable">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th className="thead">Name</th>
                <th className="thead">Description</th>
                <th colSpan="4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasksArray
                .filter((filterElement) => {
                  return filterElement.status === "pending";
                })
                .map((mapElement, index) => {
                  return (
                    <tr key={index}>
                      <td align="left" className="name">
                        {mapElement.name}
                      </td>
                      <td align="left" className="description">
                        {mapElement.description}
                      </td>
                      <td>
                        <button
                          className="buttonHandler"
                        >
                          <Link
                            className="statisticsButtonLink"
                            to={`/edit/${mapElement.id}`}
                            state={mapElement.id}
                          >
                           <AiOutlineEdit />
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          className="buttonHandler"
                          onClick={() => deleteButtonHandler(mapElement.id)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </td>
                      <td>
                        <button
                          className="buttonHandler"
                          onClick={() => swapButtonHandler(mapElement)}
                        >
                          <TbDirectionsOff />
                        </button>
                      </td>
                      <td>
                        <button className="buttonHandler">
                          <Link
                            className="statisticsButtonLink"
                            to={`/viewtask/${mapElement.id}`}
                            state={mapElement}
                          >
                            <BsEye />
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div id="heading2">
        <h3>Completed Task</h3>
      </div>
      <div className="customTable">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th className="thead">Name</th>
                <th className="thead">Description</th>
                <th colSpan="4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasksArray
                .filter((filterElement) => {
                  return filterElement.status === "completed";
                })
                .map((mapElement, index) => {
                  return (
                    <tr key={index}>
                      <td align="left" className="name">
                        {mapElement.name}
                      </td>
                      <td align="left" className="description">
                        {mapElement.description}
                      </td>
                      <td>
                        <button
                          className="buttonHandler"
                        >
                          <Link
                            className="statisticsButtonLink"
                            to={`/edit/${mapElement.id}`}
                            state={mapElement.id}
                          >
                           <AiOutlineEdit />
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          className="buttonHandler"
                          onClick={() => deleteButtonHandler(mapElement.id)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </td>
                      <td>
                        <button
                          className="buttonHandler"
                          onClick={() => swapButtonHandler(mapElement)}
                        >
                          <TbDirectionsOff />
                        </button>
                      </td>
                      <td>
                        <button className="buttonHandler">
                          <Link
                            to={`/viewtask/${mapElement.id}`}
                            state={mapElement}
                            className="statisticsButtonLink"
                          >
                            <BsEye />
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
