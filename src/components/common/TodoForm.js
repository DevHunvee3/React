import React, { useEffect, useState, memo} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const TodoForm=({ open, todoToEdit, handleClose, handleSubmit  })=>{
  const [value, setValue] = useState("");

  useEffect(() => {
    if(Object.keys(todoToEdit).length === 0 && todoToEdit.constructor === Object){ // dentro del if verifica si el objeto todoToEdit esta vacio
      setValue("");
    } else {
      setValue(todoToEdit.title);
    }
    
  }, [open]); //deps [] === componentDidMount

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {Object.keys(todoToEdit).length === 0 && todoToEdit.constructor === Object ? "New Todo" : "Edit Todo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Enter a todo text:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="todo"
            label="Todo"
            type="text"
            fullWidth
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Discard
          </Button>
          <Button onClick={() => handleSubmit(value)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default memo(TodoForm);