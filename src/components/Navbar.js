import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <Grid container className="navbar">
            <Grid item container direction="column" xs={6} spacing={2}>
                <h1>POSTS</h1>
            </Grid>
            <Grid item container direction="row" justify="flex-end" alignItems="center" xs={4} >
                <Link to="/articles" className="link">
                    Articulos
                </Link>
                <Link to="/admin/articles" className="link">
                    Admin Articulos
                </Link>
                <Link to="/admin/articles/create" className="link">
                    Crear Articulos
                </Link>
            </Grid>
        </Grid>
    )
}

export default Navbar
