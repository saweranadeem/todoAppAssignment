import React from "react";
import logo from "../assets/logo.svg";
import formFilling from "../assets/formik.svg";
import "./AccountsStyling.css";
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const Signup = () => {
  return (
    <>
      <div className="d-flex containerUnits">
        <div className="w-50 h-100 padding">
          <div className="d-flex flex-column gap-3">
            <img src={logo} className="logo" />

            <h1>Good news! We are here Let’s create your account.</h1>
            <div>
              <label
                htmlFor="EmailAdddress"
                className="d-flex flex-column gap-2"
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

            <div className="d-flex gap-4  ">
              <label
                htmlFor="Password"
                className="d-flex gap-2 flex-column w-50"
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
                  className=" bg-white rounded w-100"
                  type="password"
                />
              </label>
              <label
                htmlFor="confirmPassword"
                className="d-flex  gap-2 flex-column w-50"
              >
                Confirm password
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
                  id="confirmPassword"
                  placeholder="Confirm password"
                  variant="outlined"
                  type="password"
                  className=" bg-white rounded w-100  "
                />
              </label>
            </div>

            <div className="checkbox">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <span className="checkboxText">
                      I have read the{" "}
                      <a href="/privacy-policy" target="_blank">
                        {" "}
                        Privacy Policy{" "}
                      </a>{" "}
                      and agree to the{" "}
                      <a href="/terms-of-service" target="_blank">
                        {" "}
                        Terms of Services
                      </a>
                      .
                    </span>
                  }
                />
              </FormGroup>
            </div>
            <div>
              <button className="bgButton">Sign Up</button>
            </div>
            <div className="text-left">
              <p className="paraStyle">
                Already a member?<span className="spanText  ">Log In</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-50 h-100">
          <img src={formFilling} className="w-100 h-100 ContainerImage" />
        </div>
      </div>
      
      {/* <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-2 col-xxl-2 border">1</div>
        <div className="col-sm-12 col-md-3 col-lg-2 col-xxl-2 border">2</div>
        <div className="col-sm-12 col-md-3 col-lg-2 col-xxl-2 border">3</div>
        <div className="col-sm-12 col-md-3 col-lg-2 col-xxl-2 border">4</div>
        <div className="col-sm-12 col-md-3 col-lg-2 col-xxl-2 border">5</div>
        <div className="col-sm-12 col-md-3 col-lg-2 col-xxl-2 border">6</div>
      </div> */}
    </>
  );
};

export default Signup;
