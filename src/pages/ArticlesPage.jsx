import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

export default function ArticlesPage() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container direction="column" xs={6} spacing={2}>
        <Grid item>
          <Article article={{ id:1,title: "Item1" }} />
        </Grid>
        <Grid item>
          <Article article={{ id:2, title: "Item2" }} />
        </Grid>
        <Grid item>
          <Article article={{ id:3,title: "Item3" }} />
        </Grid>
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
