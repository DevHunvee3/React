import React, { Fragment } from "react";
import Product from "../components/Product";
import { Grid } from "@material-ui/core";
import CartDisplay from '../components/CartDisplay';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "producto1", price: "123" },
  { id: 2, name: "producto2", price: "321" },
];

const ProductsPage = () => {
  return (
    <Fragment>
      <Link to="/cart" style={{padding:"3rem"}}>Cart</Link>
      <CartDisplay/>
      {products.map((p) => (
        <Grid item key={p.id}>
          <Product product={p} buttons={["add"]}></Product>
        </Grid>
      ))}
    </Fragment>
  );
};

export default ProductsPage;
