import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      userInput.userEmail,
      userInput.userPassword
    )
      .then((res) => {
        navigate("/");
        if (userInput.userEmail && userInput.userPassword) {
          toast.success("Successfully registered, Please login!");
        }
      })
      .catch((error) => {
        let errorCode = error.code.split("auth/")[1];
        if (errorCode) {
          toast.warn(errorCode);
        }
      });
  };

  return (
    <div className="registerform">
      <form onSubmit={submitHandler}>
        <h3>Register</h3>
        <br />
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="First Name"
            name="userFirstName"
            value={userInput.userFirstName}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Last Name"
            name="userLastName"
            value={userInput.userLastName}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="userEmail"
            value={userInput.userEmail}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="userPassword"
            value={userInput.userPassword}
            onChange={changeHandler}
            required
          />
        </div>
        <br />
        <button className="btn btn-primary">Signup</button>
      </form>
      <ToastContainer />
      <span>Already have an account?</span>
      <span> </span>
      <span>
        <Link className="signbtn" to="/">
          Signin
        </Link>
      </span>
    </div>
  );
};

export default Register;
