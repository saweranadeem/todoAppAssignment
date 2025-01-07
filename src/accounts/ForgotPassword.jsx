import React from "react";
import logo from "../assets/logo.svg";
import formFilling from "../assets/formik.svg";
import "./AccountsStyling.css";
import { TextField } from "@mui/material";

const ForgotPassword = () => {
  return (
    <>
      <div className="d-flex containerUnits">
        <div className="w-50 h-100 padding">
          <div className="d-flex flex-column gap-3">
            <img src={logo} className="logo" />

            <h2 className="loginHeading">Forgot Password!</h2>
            <p className="forgotpara">
              Enter Your Email For verification Process. We will send 4 digits
              code on your email.
            </p>
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

            <button className="bgButton loginButton">Continue</button>
          </div>
        </div>
        <div className="w-50 h-100">
          <img src={formFilling} className="w-100 h-100 ContainerImage" />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
