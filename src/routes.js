import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const routes = [
  {
    url: "/",
    exact: true,
    component: ProductsPage,
  },
  {
    url: "/cart",
    exact: true,
    component: CartPage,
  },
];

export default routes;
