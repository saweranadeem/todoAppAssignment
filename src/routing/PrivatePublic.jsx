import React, { useContext } from "react";
import Signup from "../accounts/SignUp";
import Login from "../accounts/Login";
import ForgotPassword from "../accounts/ForgotPassword";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Todo from "../components/Todo";
import MyFlows from "../components/MyFlows";
import CreateTodo from "../components/CreateTodo";
import { AuthContext } from "../contextApi/AuthContext";
const PrivateRoute = ({ children }) => {
  const { isLogin } = useContext(AuthContext);
  return isLogin ? children : <Navigate to="/login" />;
};
const PublicRoute = ({ children }) => {
  const { isLogin } = useContext(AuthContext);
  return !isLogin ? children : <Navigate to="/home" />;
};
const PrivatePublic = () => {
  return (
    <div>
      <Routes>
        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route index element={<Todo />} />
          <Route path="myFlows" element={<MyFlows />} />
          <Route path="createTodo" element={<CreateTodo />} />
          <Route path="editTodo/:id" element={<CreateTodo />} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              {" "}
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/forgotPassword"
          element={
            <PublicRoute>
              {" "}
              <ForgotPassword />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default PrivatePublic;
