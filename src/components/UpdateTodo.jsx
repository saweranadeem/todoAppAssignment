import React from "react";
import { TextField } from "@mui/material";
const UpdateTodo = () => {
  return (
    <div className="createTodoContainer ">
      <h2 className="tableHeading">Create New Todo</h2>
      <div className="createTodoForm">
        <div className="d-flex gap-4 ">
          <label htmlFor="id" className="d-flex gap-2 flex-column w-50">
            ID
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
              id="id"
              placeholder="45ew23gdrjgt"
              variant="outlined"
              className=" bg-white rounded w-100"
              type="text"
            />
          </label>
          <label htmlFor="userName" className="d-flex  gap-2 flex-column w-50">
            User Name
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
              id="userName"
              placeholder="User Name"
              variant="outlined"
              type="text"
              className=" bg-white rounded w-100  "
            />
          </label>
        </div>
        <div>
          <label htmlFor="date" className="d-flex flex-column gap-2 mt-3">
            End Date
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
              id="date"
              variant="outlined"
              type="date"
              className="w-100 bg-white rounded"
            />
          </label>
        </div>
        <div className="d-flex gap-4  mt-3">
          <div className="w-50">
            <label for="exampleFormControlTextarea1" className="form-label">
              Bottleneck
            </label>
            <textarea
              placeholder="Bottleneck"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
          </div>
          <div className="w-50">
            <label for="exampleFormControlTextarea1" className="form-label">
              Improvement
            </label>
            <textarea
              placeholder="Bottleneck"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;
