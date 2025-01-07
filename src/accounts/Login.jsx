import React from "react";
import logo from "../assets/logo.svg";
import formFilling from "../assets/formik.svg";
import "./AccountsStyling.css";
import { TextField } from "@mui/material";
import { Facebook, Twitter, Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginRouter = useNavigate();
  const goToSignup = () => {
    loginRouter("/signup");
  };
  const gotoForgot = () => {
    loginRouter("/forgotPassword");
  };
  return (
    <>
      <div className="d-flex containerUnits">
        <div className="w-50 h-100 padding">
          <div className="d-flex flex-column gap-3">
            <img src={logo} className="logo" />

            <h2 className="loginHeading">
              Welcome Back!<div>Enter your info to log in.</div>
            </h2>
            <div>
              <label
                htmlFor="EmailAdddress"
                className="d-flex flex-column gap-2 "
              >
                Email Address
                <TextField
                  placeholder="abcdef@gmail.com"
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      color: "#adb5bd",
                    },

                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                  id="EmailAddress"
                  variant="outlined"
                  type="email"
                  className="w-100 bg-white rounded"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="Password"
                className="d-flex gap-2 flex-column w-100"
              >
                Password
                <TextField
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      color: "#adb5bd",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                  }}
                  id="Password"
                  placeholder="Password"
                  variant="outlined"
                  className=" bg-white rounded "
                  type="password"
                />
              </label>
            </div>
            <button className="bgButton loginButton">Login</button>
          </div>
          <div className="d-flex justify-content-between loginPara">
            <div>or login with:</div>
            <div className="cursor" onClick={gotoForgot}>
              Forgot Password?
            </div>
          </div>
          <div className="login-icon">
            <div className="icon-circle">
              <Facebook sx={{ fontSize: "28px" }} />
            </div>
            <div className="icon-circle">
              <Twitter sx={{ fontSize: "28px" }} />
            </div>
            <div className="icon-circle">
              <Google sx={{ fontSize: "28px" }} />
            </div>
          </div>
          <p className="paraStyle">
            Don't have an Account?
            <span className="spanText " onClick={goToSignup}>
              Sign Up
            </span>
          </p>
        </div>
        <div className="w-50 h-100">
          <img src={formFilling} className="w-100 h-100 ContainerImage" />
        </div>
      </div>
    </>
  );
};

export default Login;
