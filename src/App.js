import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './custom.scss';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import TheHeader from "./components/TheHeader";
import HomePage from "./pages/HomePage";
import TheFooter from "./components/TheFooter";
import Menu from "./pages/menus";
import Product from "./pages/products";
import CartPreview from "./pages/cart/PreviewPage";
import Counter from "./pages/counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/menus/:menu",
    element: <Menu />,
  },
  {
    path: "/products/:menu/:product",
    element: <Product />,
  },
  {
    path: "/cart/preview",
    element: <CartPreview />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);
const App = () => {
  return (
    <>
      <TheHeader />
      <RouterProvider router={router} />
      <TheFooter />
    </>
  );
}

export default App;
