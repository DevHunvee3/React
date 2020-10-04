import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import MuiTable from "../../components/MuiTable";
import provider from "../../provider";
import { useHistory } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';

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
  {
    title: "",
    align: "center",
    name: "edit"
  }
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
          <MuiTable 
            rows={articulos.map((articulo) => {
              return {...articulo, 'edit': (
              <IconButton 
                aria-label="Editar" 
                onClick={ () => history.push(`/admin/articles/edit/` + articulo.id) }>
                 <EditIcon /> 
              </IconButton>)} 
            })} 
            columns={columns} 
          />
        </Grid>      
      </Grid>
    </Grid>
  );
}
