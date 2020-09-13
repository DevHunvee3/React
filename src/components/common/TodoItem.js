import React from "react";
import { Grid, Paper, Checkbox } from "@material-ui/core";

export const TodoItem = ({ todo, onToggle }) => {    
  return (
    <Grid item>
      <Paper elevation={5}>
        <Grid container style={{ padding: "1rem" }} alignItems="center">
          <Grid item xs={11}>
            {todo.title}
          </Grid>
          <Grid item xs={1}>
            <Checkbox color="primary" checked={todo.completed} onChange={onToggle} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TodoItem;
