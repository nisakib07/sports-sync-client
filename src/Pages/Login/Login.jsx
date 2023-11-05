import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { userSignIn, googleSignIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then(() => {
        toast.success("Logged In Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="min-h-screen max-w-2xl mx-auto mt-10">
        <div className="flex-col">
          <div className="w-full rounded-2xl shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter you email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-teal-500 hover:bg-teal-400">
                  Login
                </button>
              </div>
              <p className="text-center mt-5 text-lg">
                New Here?
                <span className="text-orange-600">
                  <Link to="/register"> Register</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
