import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required."),
  termsOfService: Yup.boolean().oneOf([true],"Follow the Terms And Condition"),
});
export default validationSchema;
