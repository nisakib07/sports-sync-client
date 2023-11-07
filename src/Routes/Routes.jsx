import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyServices from "../Pages/MyServices/MyServices";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddServices from "../Pages/AddServices/AddServices";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myServices",
        element: <MyServices></MyServices>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
