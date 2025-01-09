import React from "react";
import { EditNote, DeleteOutline } from "@mui/icons-material";
import "./ComponentStyling.css";
const Todo = () => {
  return (
    <div>
      <h2 className="tableHeading">Your to do's</h2>
      <table class="table tableContainter">
        <thead class="tableHeader">
          <tr>
            <th>ID</th>
            <th>Bottleneck</th>
            <th>Improvement</th>
            <th>Name ( User / Guest )</th>
            <th>END-Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>sdfghjhgfd</td>
            <td>looking</td>
            <td>User</td>
            <td>12-3-4</td>

            <td className="d-flex gap-1">
              <div>
                <EditNote className="notesIcon" />
              </div>
              <div>
                <DeleteOutline className="deleteIcon" />
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>sdfghjhgfd</td>
            <td>looking</td>
            <td>User</td>
            <td>12-3-4</td>

            <td className="d-flex gap-1">
              <div>
                <EditNote className="notesIcon" />
              </div>
              <div>
                <DeleteOutline className="deleteIcon" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
