import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-r min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>

      <ToastContainer pauseOnHover={false} autoClose={2000}></ToastContainer>
    </div>
  );
};

export default MainLayout;
