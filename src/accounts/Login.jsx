import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import formFilling from "../assets/formik.svg";
import "./AccountsStyling.css";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import {
  Facebook,
  Twitter,
  Google,
  VisibilityOff,
  Visibility,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../contextApi/AuthContext";

// Validation Schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const goToSignup = () => {
    navigate("/signup");
  };

  const gotoForgot = () => {
    navigate("/forgotPassword");
  };
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async () => {
      const { email, password } = formik.values; // Correct usage of formik values
      if (email === "itsawaira@gmail.com" && password === "12345678") {
        login("dummy-auth-token");
        formik.resetForm(); // Reset the form after successful login
      } else {
        alert("Invalid credentials");
      }
    },
  });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="d-flex containerUnits">
      <div className="w-50 h-100 padding">
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3"
        >
          <img src={logo} className="logo" alt="logo" />
          <h2 className="loginHeading">
            Welcome Back! <div>Enter your info to log in.</div>
          </h2>
          <div>
            <label htmlFor="email" className="d-flex flex-column gap-2">
              Email Address
              <TextField
                placeholder="example@example.com"
                sx={{
                  "& .MuiInputBase-input::placeholder": { color: "#adb5bd" },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                }}
                id="email"
                variant="outlined"
                type="email"
                name="email"
                className="w-100 bg-white rounded"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="errorMsgs">{formik.errors.email}</p>
              ) : null}
            </label>
          </div>

          <div>
            <label
              htmlFor="password"
              className="d-flex gap-2 flex-column w-100"
            >
              Password
              <TextField
                placeholder="Password"
                sx={{
                  "& .MuiInputBase-input::placeholder": { color: "#adb5bd" },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                }}
                id="password"
                variant="outlined"
                className="bg-white rounded"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="errorMsgs">{formik.errors.password}</p>
              ) : null}
            </label>
          </div>
          <button
            type="submit"
            className="bgButton loginButton"
            disabled={!formik.isValid || !formik.dirty}
          >
            Login
          </button>
          <div className="d-flex justify-content-between loginPara">
            <div>or login with:</div>
            <div className="cursor-pointer" onClick={gotoForgot}>
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
            Don't have an Account?{" "}
            <span className="spanText" onClick={goToSignup}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
      <div className="w-50 h-100">
        <img
          src={formFilling}
          className="w-100 h-100 ContainerImage"
          alt="formFilling"
        />
      </div>
    </div>
  );
};

export default Login;
