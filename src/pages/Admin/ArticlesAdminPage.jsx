import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import MuiTable from "../../components/MuiTable";
import provider from "../../provider";
import { useHistory } from "react-router-dom";

const columns = [
  {
    title: "Id",
    align: "center",
    name: "id",
  },
  {
    title: "Título",
    align: "center",
    name: "title",
  },
  {
    title: "Contenido",
    align: "left",
    name: "body",
  },
];
// const rows = [
//   {
//     id: 1,
//     title: "Articulo 1",
//     body: "Esto es un articulo",
//   },
//   {
//     id: 2,
//     title: "Articulo 2",
//     body: "Esto es un articulo 2",
//   },
// ];

export default function ArticlesAdminPage() {
  const [articulos, setArticles] = useState([])
  const history = useHistory();

  const refresh = () => {
    provider.allPosts()
    .then((response) => setArticles(response))
    .catch(() => setArticles([{id:1, title:'No se pudo cargar' }]))
  }
  
  useEffect(() => {
    refresh()
  }, [])


  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container direction="column" xs={6} spacing={2}>
        <Grid item >
            <h1>Articulos</h1>
        </Grid>
        <Grid item style={{alignSelf:"end"}}>
            <Button variant="outlined" color="primary" onClick={() => history.push(`/admin/articles/create`) }>Crear</Button>
        </Grid>
        <Grid item>
          <MuiTable rows={articulos} columns={columns} />
        </Grid>
      </Grid>
    </Grid>
  );
}
