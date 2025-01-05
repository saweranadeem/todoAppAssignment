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

            <h1>Good News! We're here Let's Create your account.</h1>
            <div>
              <label
                htmlFor="EmailAdddress"
                className="d-flex flex-column gap-2"
              >
                Email Address
                <TextField
                  placeholder="abcdef@gmail.com"
                  sx={{
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

            <div className="d-flex gap-5  ">
              <label
                htmlFor="Password"
                className="d-flex gap-2 flex-column w-50"
              >
                Password
                <TextField
                  sx={{
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

            <div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <>
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
                    </>
                  }
                />
              </FormGroup>
            </div>
            <div>
              <button className="text-white border-0 rounded w-100 bgButton btnHeight">Sign Up</button>
            </div>
            <div className="text-left">
              <p className="fs-5 mt-5">
                Already a member?<span className="spanText ms-3 ">Login</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-50 h-100">
          <img src={formFilling} className="w-100 h-100 ContainerImage" />
        </div>
      </div>
    </>
  );
};

export default Signup;
