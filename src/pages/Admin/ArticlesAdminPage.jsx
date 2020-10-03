import React from "react";
import { Button, Grid } from "@material-ui/core";
import MuiTable from "../../components/MuiTable";

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
const rows = [
  {
    id: 1,
    title: "Articulo 1",
    body: "Esto es un articulo",
  },
  {
    id: 2,
    title: "Articulo 2",
    body: "Esto es un articulo 2",
  },
];

export default function ArticlesAdminPage() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container direction="column" xs={6} spacing={2}>
        <Grid item >
            <h1>Articulos</h1>
        </Grid>
        <Grid item style={{alignSelf:"end"}}>
            <Button variant="outlined" color="primary">Crear</Button>
        </Grid>
        <Grid item>
          <MuiTable rows={rows} columns={columns} />
        </Grid>
      </Grid>
    </Grid>
  );
}
