import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  function changePages() {
    navigate("home");
  }
  return (
    <div className="container">
      <div className="body">
        <div className="head">
          <h2 className="headerTxt">Login here</h2>
        </div>
        <div className="form">
          <div className="formWrapper">
            <label className="frmLabel">User Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="frmInput"
              maxLength={30}
            />
            <label className="frmLabel">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="frmInput"
              maxLength={20}
            />
            <button type="submit" className="frmButton" onClick={changePages}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
