import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import provider from "../provider"


export default function ArticlesPage() {
  const [articles, setArticles] = useState([])

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
        {articles.map((article) => {
          return (
            <Grid item key={article.id}>
              <Article article={article} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  );
}
function Article({article}) {
  const history = useHistory();
  const handleClick = ()=>{    
    history.push(`/articles/${article.id}`)
  }

  return (    
      <Paper elevation={2} style={{ padding: "2rem" }} onClick={handleClick}>
        {article.title}
      </Paper>
    
    // <Link to={`/articles/${article.id}`}>
    //   <Paper elevation={2} style={{ padding: "2rem" }}>
    //     {article.title}
    //   </Paper>
    // </Link>
  );
}
