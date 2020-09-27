import React, { useEffect, useState, memo } from "react";
import { Grid, Paper, IconButton } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import TodoItem from "../common/TodoItem";
import TodoForm from "../common/TodoForm";
import provider from "../../servicios/TodoProvider";

const fakeData = [
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

const TodoList = memo((props) => (
  <Grid
    item
    xs={12}
    style={{
      padding: "5rem 10vw",
    }}
  >
    <Paper
      style={{
        padding: "2rem",
      }}
    >
      <Grid container direction="column" spacing={1}>
        <Grid
          item
          style={{
            alignSelf: "flex-end",
          }}
        >
          <IconButton
            color="primary"
            aria-label="add"
            onClick={props.handleFormOpened}
          >
            <AddCircleOutline />
          </IconButton>
        </Grid>
        {props.data.map((todo, index) => (
          <TodoItem
            todo={todo}
            onToggle={() => props.handleUpdate(todo)}
            onDelete={() => props.handleDelete(todo)}
            onEdit={() => props.handleEdit(todo)}
            key={todo.id}
          />
        ))}
      </Grid>
    </Paper>
  </Grid>
));

const TodoPage = () => {
  const [formOpened, setFormOpened] = useState(false);
  const [data, setData] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState({})

  const refresh = () => {
    provider.all().then((response) => {
      setData(response);
    });
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleSubmit = (value) => {
    setFormOpened(false);

    if(Object.keys(todoToEdit).length === 0 && todoToEdit.constructor === Object){
      provider
        .create({
          userId: 1,
          title: value,
          completed: false,
        })
        .then((response) => {
          refresh();
          // setData([
          //   response,
          //   ...data
          // ]);
        });
    } else {
      console.log('hola')
      provider
      .update(todoToEdit.id, {
        ...todoToEdit,
        title: value
      })
      .then((response) => {
        console.log(response)
        refresh();
      });
    }
  };

  const handleUpdate = (todo) => {
    provider
      .update(todo.id, { ...todo, completed: !todo.completed })
      .then((response) => {
        refresh()
      })
      .catch(() => {});
  };

  const handleDelete = (todo) => {
    provider.delete(todo.id).then(() => {      
      refresh();
    });
  };

  const handleEdit = (todo) => {
    setTodoToEdit(todo)
    setFormOpened(true);
  }

  const handleFormOpened = () => {
    setTodoToEdit({})
    setFormOpened(true);
  };
  const handleFormClosed = () => {
    setFormOpened(false);
  };

  return (
    <Grid container>
      <TodoForm
        open={formOpened}
        todoToEdit={todoToEdit}
        handleClose={handleFormClosed}
        handleSubmit={handleSubmit}
      />

      <TodoList
        data={data}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleFormOpened={handleFormOpened}
      ></TodoList>
    </Grid>
  );
};
export default TodoPage;
