import React, { useState } from "react";
import logo from "../assets/logo.svg";
import formFilling from "../assets/formik.svg";
import "./AccountsStyling.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from "../accounts/SignupValidation";
import { VisibilityOff, Visibility} from "@mui/icons-material";

import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";

const Signup = () => {
  const signupRouter = useNavigate();
  const goToLogin = () => {
    signupRouter("/login");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="d-flex containerUnits">
        <div className="w-50 h-100 padding">
          <form
            onSubmit={formik.handleSubmit}
            className="d-flex flex-column gap-3 form-Container"
          >
            <img src={logo} className="logo" />
            <h1>Good news! We are here Let’s create your account.</h1>
            <div>
              <label
                htmlFor="emailAddress"
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
                  id="emailAddress"
                  variant="outlined"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  className="w-100 bg-white rounded"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="errorMsgs">{formik.errors.email}</p>
                ) : null}
              </label>
            </div>

            <div className="d-flex gap-4">
              <label htmlFor="password" className="d-flex gap-2 flex-column w-50">
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
                  id="password"
                  placeholder="Password"
                  variant="outlined"
                  className="bg-white rounded w-100"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ?<Visibility />:  <VisibilityOff /> }
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="errorMsgs">{formik.errors.password}</p>
                ) : null}
              </label>

              <label
                htmlFor="confirmPassword"
                className="d-flex gap-2 flex-column w-50"
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
                  type={showConfirmPassword ? "text" : "password"}
                  className="bg-white rounded w-100"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <Visibility />   
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p className="errorMsgs">{formik.errors.confirmPassword}</p>
                ) : null}
              </label>
            </div>

            <div className="checkbox">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="termsOfService"
                      checked={formik.values.termsOfService}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  }
                  label={
                    <span className="checkboxText">
                      I have read the{" "}
                      <a href="/privacy-policy" target="_blank">
                        Privacy Policy
                      </a>{" "}
                      and agree to the{" "}
                      <a href="/terms-of-service" target="_blank">
                        Terms of Services
                      </a>
                      .
                    </span>
                  }
                />
              </FormGroup>
            </div>

            <div>
              <button
                type="submit"
                className="bgButton"
                disabled={!formik.isValid || !formik.dirty}
              >
                Sign Up
              </button>
            </div>
            <div className="text-left">
              <p className="paraStyle">
                Already a member?
                <span className="spanText " onClick={goToLogin}>
                  Log In
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="w-50 h-100">
          <img src={formFilling} className="w-100 h-100 ContainerImage" />
        </div>
      </div>
    </>
  );
};

export default Signup;
