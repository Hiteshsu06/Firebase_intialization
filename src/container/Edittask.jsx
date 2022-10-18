import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../style/Edittask.css";

const Edittask = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  console.log("location",location);
  console.log("params",params);
  const dataId = location.state;
  const myArray = JSON.parse(localStorage.getItem("creatTaskData"));
  const eobject = myArray.filter((x) => x.id === dataId); //sorting out object from an array
  const editedIntiallData = {    // Intiall data here 
    id: eobject[0].id,
    name: eobject[0].name,
    description: eobject[0].description,
    status: eobject[0].status,
  };
  const [editedObject, setEditedObject] = useState(editedIntiallData); 
 
  // on Change Handler
  const editChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditedObject({ ...editedObject, [name]: value });
  };

  // Update Button Handler    
  const updateButtonHandler = (e) => {
    e.preventDefault();
    const getArray = JSON.parse(localStorage.getItem("creatTaskData"));
    const updatedArray = getArray.map((elem) => {
      if (elem.id === editedObject.id) {
        return {
          ...elem,
          name: editedObject.name,
          description: editedObject.description,
          status: editedObject.status,
        };
      }
      return elem;
    });
    localStorage.setItem("creatTaskData", JSON.stringify(updatedArray)); //Updating array here
    navigate("/tasks");
  };
  return (
    <div className="inputContainer">
      <form onSubmit={updateButtonHandler} id="myForm">
        <div>
          <h2>Update Task</h2>
        </div>
        <div className="inputName">
          <label className="formLabel">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="formcontrol1"
            placeholder="Name"
            value={editedObject.name}
            onChange={editChangeHandler}
            required
          />
        </div>
        <div className="inputDescription">
          <label className="formLabel">Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="formcontrol2"
            placeholder="Description"
            value={editedObject.description}
            onChange={editChangeHandler}
            required
          />
        </div>
        <div name="status" id="inputStatus" value={editedObject.status}>
          <label className="statusHeader">Status</label>
          <div>
            <input
              type="radio"
              id="status1"
              name="status"
              value="pending"
              onChange={editChangeHandler}
              checked={editedObject.status === "pending"}
            />
            <label className="form-check-label" id="radiolabel1">
              Pending
            </label>
          </div>
          <div>
            <input
              className="form-check-input2"
              type="radio"
              id="status"
              name="status"
              value="completed"
              checked={editedObject.status === "completed"}
              onChange={editChangeHandler}
            />
            <label className="form-check-label" id="radiolabel">
              Completed
            </label>
          </div>
        </div>
        <button className="btn btn-outline-success" id="updatebutton">
          Update
        </button>
      </form>
      <button className="btn btn-outline-secondary" id="editbackbutton">
        <Link className="linkbutton" to="/tasks">
          Back
        </Link>
      </button>
    </div>
  );
};

export default Edittask;
