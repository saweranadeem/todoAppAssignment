import React from "react";
import { EditNote, DeleteOutline } from "@mui/icons-material";
import "./ComponentStyling.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useParams, useNavigate } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Todo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const goToCreate = (id) => {
    navigate("editTodo/123");
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiPaper-root": {
            width: "498px",
            maxWidth: "100%",
            position: "absolute",
            top: 50,
          },
        }}
      >
        <DialogTitle
          sx={{
            borderBottom: "1px solid rgb(210, 213, 219)",
            fontSize: "20px",
            color: "#212529",
          }}
        >
          {"Are You Sure?"}
        </DialogTitle>
        <DialogContent
          sx={{
            borderBottom: "1px solid rgb(210, 213, 219)",
            marginTop: "15px",
          }}
        >
          <DialogContentText id="alert-dialog-slide-description">
            You want to delete this Todo?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            marginTop: "15px",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#6c757d",
              color: "white",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#0d6efd",
              color: "white",
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <div className="tableDiv">
        <h2 className="tableHeading">Your to do's</h2>
        <table className="table tableContainter">
          <thead className="tableHeader">
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
                  <EditNote className="notesIcon" onClick={goToCreate} />
                </div>
                <div>
                  <DeleteOutline
                    className="deleteIcon"
                    onClick={handleClickOpen}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>sdfghjhgfd</td>
              <td>looking</td>
              <td>User</td>
              <td>12-3-4</td>
              <td className="d-flex gap-1">
                <div>
                  <EditNote className="notesIcon" onClick={goToCreate} />
                </div>
                <div>
                  <DeleteOutline
                    className="deleteIcon cursor-pointer"
                    onClick={handleClickOpen}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Todo;
