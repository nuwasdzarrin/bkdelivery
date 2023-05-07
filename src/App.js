import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './custom.scss';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import TheHeader from "./components/TheHeader";
import Home from "./pages/Home";
import TheFooter from "./components/TheFooter";
import Detail from "./pages/Detail";
import Menu from "./pages/menus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menus/:menu",
    element: <Menu />,
  },
  {
    path: "/detail",
    element: <Detail />,
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
