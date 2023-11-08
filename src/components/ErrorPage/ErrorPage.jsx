import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../../../src/assets/Animation - 1699449850618.json";

const ErrorPage = () => {
  return (
    <div className=" bg-cyan-700 min-h-screen flex flex-col items-center justify-center">
      <Lottie animationData={animationData}></Lottie>

      <Link className="mt-10" to="/">
        <button className="btn bg-cyan-500 border-none hover:bg-cyan-400">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
