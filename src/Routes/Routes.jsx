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
import UpdateUserService from "../Pages/UpdateUserService/UpdateUserService";
import MySchedules from "../Pages/MySchedules/MySchedules";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
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
      {
        path: "/updateUserService/:id",
        element: (
          <PrivateRoute>
            <UpdateUserService></UpdateUserService>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignmentb8-11-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/mySchedules",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
