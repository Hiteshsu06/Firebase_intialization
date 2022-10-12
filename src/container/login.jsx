import React, { useState } from "react";
import { Link } from "react-router-dom";
import './register.css';

const Login = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [loginInput,setLoginInput]=useState({});
const [error,setError]=useState("");

// Submit button handler
const loginSubmitHandler=(e)=>{
e.preventDefault();
if(!email || !password){
setError("*please fill the data")
}
else{setError("")}
}

//input field handler
const handleInput=(e)=>{
if(e.target.name==="email"){
setEmail(e.target.value)
}
if(e.target.name==="password"){
setPassword(e.target.value)
}
setLoginInput({...loginInput,[e.target.name]: e.target.value})
console.log("login form data here:",loginInput);
}

  return (
    <div className="registerform">
      <form onSubmit={loginSubmitHandler}>
        <div>
          <h2>Login</h2>
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={email}
            onChange={(e)=>handleInput(e)}
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e)=>handleInput(e)}
          />
        </div>
        <div>
          <h6>{error}</h6>
        </div>
          <Link className="btn btn-primary" to="/taskpage">
            LOGIN
          </Link>
      </form>
      <br />
      <br />
      <div>
        <span>Not a member</span>
        <span>
            <Link className="signbtn" to="/signup">
              Signup
            </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
