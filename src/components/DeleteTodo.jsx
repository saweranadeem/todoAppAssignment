import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function DeleteTodo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>
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
            fontSize:"20px",
            color:"#212529",
          }}
        >
          {"Are You Sure?"}
        </DialogTitle>
        <DialogContent
          sx={{
            borderBottom: "1px solid rgb(210, 213, 219)",
        marginTop:"15px"
          }}
        >
          <DialogContentText id="alert-dialog-slide-description">
            You want to delete this Todo?
          </DialogContentText>
        </DialogContent>
        <DialogActions
        sx={{
            marginTop:"15px"
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
    </React.Fragment>
  );
}

export default DeleteTodo;
