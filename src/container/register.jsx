import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
const [userName,setUsername]=useState("");
const [userEmail,setUseremail]=useState("");
const [userPassword,setUserpassword]=useState("");
const [userInput,setUserinput]=useState({});

const userHandlechange=(e)=>{
  if(e.target.name==="userName"){
    setUsername(e.target.value)
    }
  if(e.target.name==="userEmail"){
    setUseremail(e.target.value)
    }
  if(e.target.name==="userPassword"){
    setUserpassword(e.target.value)
    }
    setUserinput({...userInput,[e.target.name]: e.target.value})
    console.log("register form data here:",userInput)
}
  return (
    <div className="registerform">
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="userName"
            value={userName}
            onChange={(e)=>userHandlechange(e)}
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
            value={userEmail}
            onChange={(e)=>userHandlechange(e)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="userPassword"
            value={userPassword}
            onChange={(e)=>userHandlechange(e)}
          />
        </div>
        <Link className="btn btn-primary" to="/">
          Register
        </Link>
      </form>
      <span>Already have an account?</span>
      <span>
        <Link className="signbtn" to="/">
          Signin
        </Link>
      </span>
    </div>
  );
};

export default Register;
