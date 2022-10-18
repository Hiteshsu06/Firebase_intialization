import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Register.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  //Change Handler
  const loginChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  //Submit Handler
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginInput.email, loginInput.password)
      .then((userCredential) => {
        localStorage.setItem("token", userCredential._tokenResponse.idToken);
        navigate("/tasks");
        localStorage.setItem("res", "success");
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
            value={loginInput.email}
            onChange={loginChangeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={loginInput.password}
            onChange={loginChangeHandler}
            required
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      <ToastContainer />
      <br />
      <br />
      <div>
        <span>Not a member</span>
        <span> </span>
        <span>
          <Link className="signUpButton" to="/register">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
