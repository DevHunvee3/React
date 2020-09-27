import React, {memo} from "react";
import { Grid, Paper, Checkbox, IconButton } from "@material-ui/core";
import { DeleteForever, Edit } from "@material-ui/icons";

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <Grid item>
      <Paper elevation={5}>
        <Grid container style={{ padding: "1rem" }} alignItems="center">
          <Grid item xs={10}>
            {todo.title}
          </Grid>
          <Grid item xs={2}>
            <Checkbox
              color="primary"
              checked={todo.completed}
              onChange={onToggle}
            />
            <IconButton aria-label="edit" color="default" onClick={onEdit}>
              <Edit />
            </IconButton>
            <IconButton aria-label="delete" color="secondary" onClick={onDelete}>
              <DeleteForever />
            </IconButton>
          </Grid>
          
        </Grid>
      </Paper>
    </Grid>
  );
};

export default memo(TodoItem);
