import React, {Fragment} from "react";
import { Grid, Paper } from "@material-ui/core";
import Product from '../components/Product';
import { connect } from 'react-redux';


const CartPage = ({cartProducts}) => {
  return (
    <Fragment>
      {cartProducts.map((p, i) => (
        <Grid item key={i}>
          <Product product={p} buttons={['remove']}></Product>
        </Grid>
      ))}
    </Fragment>
  );
};

const mapStateToProps = state=>({
  cartProducts : state.cart.products
})

export default connect(mapStateToProps,null)(CartPage);
