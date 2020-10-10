import React from 'react'
import {Grid} from '@material-ui/core'
import {connect} from 'react-redux'

const CartDisplay = ({cartCount}) => {
    return (
        <Grid item>Carrito: {cartCount}</Grid>
    )
}

const mapStateToProps = state=>({
    cartCount: state.cart.products.length
})

export default connect(mapStateToProps,null)(CartDisplay);
