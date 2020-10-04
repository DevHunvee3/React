import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { useParams } from "react-router-dom";
import provider from "../provider"

export default function ArticlePage() {
  let { id } = useParams();
  const [article, setArticle] = useState({})

  useState(() => {
    provider.getPost(id)
    .then((response) => setArticle(response))
    .catch((err) => setArticle({title: 'Error', body: 'No se pudo cargar el articulo :('}) )
  })
  
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container direction="column" xs={6} spacing={2}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Grid container justify="center" alignItems="center">
            <Grid item container direction="column" spacing={2}>
              <Grid item>{article.title}</Grid>
              <Grid item>{article.body}</Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
