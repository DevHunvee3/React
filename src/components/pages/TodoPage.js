import React, { useState } from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import TodoItem from "../common/TodoItem";
import TodoForm from "../common/TodoForm";

let fakeData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
];

const TodoPage = () => {
  const [formOpened, setFormOpened] = useState(false);
  const [data, setData] = useState(fakeData);

  const handleToggle = (todo) => {
    const newValue = !todo.completed;
    const newData = data.map((_todo) => {
      return {
        ..._todo,
        completed: _todo.id === todo.id ? newValue : _todo.completed,
      };
    });
    setData(newData);
  };

  const handleFormOpened = () => {
    setFormOpened(true);
  };
  const handleFormClosed = () => {
    setFormOpened(false);
  };

  const handleSubmit = (value) =>{
    //TAREA: COMO HACER PARA INCLUIR EL VALOR EN EL ARREGLO DATA
  }

  return (
    <Grid container>
      <TodoForm
        open={formOpened}
        handleClose={handleFormClosed}
        handleSubmit={handleSubmit}
      />

      <Grid item xs={12} style={{ padding: "5rem 10vw" }}>
        <Paper style={{ padding: "2rem" }}>
          <Grid container direction="column" spacing={1}>
            <Grid item style={{ alignSelf: "flex-end" }}>
              <IconButton
                color="primary"
                aria-label="add"
                onClick={handleFormOpened}
              >
                <AddCircleOutline />
              </IconButton>
            </Grid>
            {data.map((todo, index) => (
              <TodoItem todo={todo} onToggle={() => handleToggle(todo)} />
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TodoPage;
