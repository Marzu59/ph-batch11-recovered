
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/home/Home";
import Register from "../Pages/register/Register";
import Signin from "../Pages/signin/Signin";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/signin',
        Component: Signin
      }
    ]
  },
]);



export default Router;