import React, {  useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../style/Createtask.css";

const Createtask = () => {
const navigate=useNavigate();
const taskArray=JSON.parse(localStorage.getItem("creatTaskData"));
const lastItem=  taskArray ? taskArray[taskArray.length - 1 ].id :  0  ; //ID setup here

  const intialValue = {
    id:(lastItem + 1) ,
    name: "",
    description: "",
    status: "",
  };
  const [taskDetails, setTaskDetails] = useState(intialValue);

  // Handle onchange event in input
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  //  submit Handling event in form
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (localStorage.getItem("creatTaskData")) {
        let enteries = [];
        enteries = JSON.parse(localStorage.getItem("creatTaskData"));
        enteries.push(taskDetails);
        localStorage.setItem("creatTaskData", JSON.stringify(enteries));
      } else {
        localStorage.setItem("creatTaskData", JSON.stringify([taskDetails]));
      }
      setTaskDetails(intialValue);
      toast.success("Task successfull created", { autoClose: 1000 });
      navigate("/tasks");
  };

  // reset Handler event in form
  const onResetHandler = () => {
    setTaskDetails(intialValue);
  };

  return (
    <div className="inputContainer">
      <form onSubmit={onSubmitHandler} id="myForm">
        <div>
          <h2>Create Task</h2>
        </div>
        <div className="inputName">
          <label className="formLabel">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="formcontrol1"
            placeholder="Name"
            value={taskDetails.name}
            onChange={onChangeHandler}
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
            value={taskDetails.description}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div name="status" id="inputStatus" value={taskDetails.status}>
          <label className="statusHeader">Status</label>
          <div>
            <input
              type="radio"
              id="status1"
              name="status"
              value="pending"
              onChange={onChangeHandler}
              checked={taskDetails.status === "pending"}
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
              checked={taskDetails.status === "completed"}
              onChange={onChangeHandler}
            />
            <label className="form-check-label" id="radiolabel">
              Completed
            </label>
          </div>
        </div>
        <button className="btn btn-outline-success" id="sumbitButton">
          Submit
        </button>
      </form>
      <ToastContainer />
      <button
        className="btn btn-outline-danger"
        id="resetButton"
        onClick={onResetHandler}
      >
        Reset
      </button>
      <button className="btn btn-outline-secondary" id="createTaskBackButton">
        <Link
         id="createTaskBackButtonLink" to="/tasks"
        >
          Back
        </Link>
      </button>
    </div>
  );
};

export default Createtask;
