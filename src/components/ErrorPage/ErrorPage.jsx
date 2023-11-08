import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" bg-cyan-700 min-h-screen flex flex-col items-center justify-center">
      <img
        className="max-w-[400px]"
        src="https://i.ibb.co/myrMBN7/404-removebg-preview.png"
        alt=""
      />

      <Link className="mt-10" to="/">
        <button className="btn bg-cyan-500 border-none hover:bg-cyan-400">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
