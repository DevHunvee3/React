import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

export function addProduct(products, product) {
  return function (dispatch) {
    console.log("Dispatch Action " + ADD_PRODUCT)
    dispatch({ type: ADD_PRODUCT, payload: [...products, product] });
  };
}

export function removeProduct(products, product) {
  return function (dispatch) {
    console.log("Dispatch Action " + REMOVE_PRODUCT)
    dispatch({
      type: REMOVE_PRODUCT,
      payload: products.filter((p) => p.id !== product.id),
    });
  };
}
