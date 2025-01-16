import React from "react";
import logo from "../assets/logo.svg";
import formFilling from "../assets/formik.svg";
import "./AccountsStyling.css";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Values:", values);
      formik.resetForm();
    },
  });

  return (
    <div className="d-flex containerUnits">
      <div className="w-50 h-100 padding">
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3"
        >
          <img src={logo} className="logo" alt="Logo" />
          <h2 className="loginHeading">Forgot Password!</h2>
          <p className="forgotpara">
            Enter your email for the verification process. We will send a
            4-digit code to your email.
          </p>
          <div>
            <label htmlFor="email" className="d-flex flex-column gap-2">
              Email Address
              <TextField
                placeholder="example@example.com"
                sx={{
                  "& .MuiInputBase-input::placeholder": { color: "#adb5bd" },
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
                id="email"
                variant="outlined"
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-100 bg-white rounded"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="errorMsgs">{formik.errors.email}</p>
              ) : null}
            </label>
          </div>
          <button
            type="submit"
            className="bgButton loginButton"
            disabled={!formik.isValid || !formik.dirty}
          >
            Continue
          </button>
        </form>
      </div>
      <div className="w-50 h-100">
        <img
          src={formFilling}
          className="w-100 h-100 ContainerImage"
          alt="Form Filling Illustration"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
