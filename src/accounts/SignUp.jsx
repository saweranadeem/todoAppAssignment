import React from "react";
import logo from "../assets/logo.svg";
import formFilling from "../assets/formik.svg";
import "./AccountsStyling.css";
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

const Signup = () => {
  return (
    <>
      <div className="d-flex justify-content-between  gap-5">
        <div className="w-50 d-flex flex-column gap-2 p-5 justify-content-center vh-100">
          <div>
            <img src={logo} className="w-25" />
          </div>
          <h1>Good News! We're here Let's Create your account.</h1>
          <div>
            <TextField
              id="EmailAddress"
              label="Email Address"
              variant="outlined"
              className="w-100"
            />
          </div>
          <div className="d-flex gap-3 mt-1 ">
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              className="w-50"
            />
            <TextField
              id="ConfirmPassword"
              label="Confirm Password"
              variant="outlined"
              className="w-50"
            />
          </div>

          <div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I have read the Privacy Policy and agree to the Terms of Services"
              />
            </FormGroup>
          </div>
          <div>
            <Button variant="contained" className="w-100">
              Sign Up
            </Button>
          </div>
          <div className="text-center mt-5">
            <p>
              Already a member?<span className="text-primary">Login</span>
            </p>
          </div>
        </div>
        <div>
          <img src={formFilling} className="form-image" />
        </div>
      </div>
    </>
  );
};

export default Signup;
