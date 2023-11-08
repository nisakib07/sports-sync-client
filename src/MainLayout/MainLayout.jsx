import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-r min-h-screen  bg-cyan-200">
      <div>
        <div className="max-w-screen-xl mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer pauseOnHover={false} autoClose={2000}></ToastContainer>
      </div>
    </div>
  );
};

export default MainLayout;
