import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const emptyArticle = {
  title: "",
  date:"",
  body: "",
};

export default function ArticlesFormPage() {
  const [article, setArticle] = useState(emptyArticle);
  const history = useHistory();
  const handleChange = (e) => {    
    setArticle({ ...article, [e.target.name]: e.target.value });
  };
  const handleCreate = ()=>{
    //mandamos peticion de creacion
    history.push("/admin/articles")
  }
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container direction="column" xs={6} spacing={2}>
        <Grid item>
          <TextField
            value={article.title}
            label="Título"
            fullWidth
            name="title"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            value={article.body}
            label="Contenido"
            name="body"
            multiline
            rows={20}
            fullWidth
            onChange={handleChange}
          />
        </Grid>
        <Grid item style={{ alignSelf: "end" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleCreate}
          >
            Crear
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
