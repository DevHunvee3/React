import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import provider from "../../provider";

const emptyArticle = {
  title: "",
  date:"",
  body: "",
};

export default function ArticlesFormPage() {
  const [article, setArticle] = useState(emptyArticle);
  const history = useHistory();
  let { id } = useParams();

  const handleChange = (e) => {    
    setArticle({ ...article, [e.target.name]: e.target.value });
  };
  const handleCreate = ()=>{
    //mandamos peticion de creaciond
    provider.appendPost(article)

    history.push("/admin/articles")
  }

  const handleEdit = (id) => {
    provider.editPost(article)

    history.push("/admin/articles")
  }

  useEffect(() => {
    if(id !== undefined && typeof id === 'string'){
      provider.getPost(id)
      .then((response) => setArticle(response))
      .catch((err) => setArticle({title: 'Error', body: 'No se pudo cargar el articulo :('}) )
    }
  },[id])

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
            onClick={id !== undefined && typeof id === 'string' ? handleEdit : handleCreate }
          >
            {id !== undefined && typeof id === 'string' ? 'Guardar Edicion' : 'Crear'}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
