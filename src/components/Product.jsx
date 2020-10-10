import React from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { AddCircleRounded, RemoveCircleOutline } from "@material-ui/icons";
import { connect } from "react-redux";
import { addProduct, removeProduct } from '../redux/actions/cartActions';

const Product = ({ product, buttons, addProduct, removeProduct, cartProducts }) => (
  <Paper
    style={{
      padding: "10px",
    }}
    elevation={3}
  >
    <Grid container justify="space-between">
      <Grid item>{product.name}</Grid>
      <Grid item>${product.price}</Grid>
      <Grid item>
        {buttons.map((b, i) =>
          b === "add" ? (
            <IconButton aria-label="delete" key={i} onClick={()=>{addProduct(cartProducts, product)}}>
              <AddCircleRounded />
            </IconButton>
          ) : (
            <IconButton aria-label="delete" key={i} onClick={()=>{removeProduct(cartProducts, product)}}>
              <RemoveCircleOutline />
            </IconButton>
          )
        )}
      </Grid>
    </Grid>
  </Paper>
);

const mapStateToProps = state => {
  return {
    cartProducts : state.cart.products
  }
}


export default connect(mapStateToProps,{addProduct, removeProduct})(Product);
