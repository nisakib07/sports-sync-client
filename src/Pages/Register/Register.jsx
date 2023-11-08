import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, userProfileUpdate } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/.*[A-Z].*/.test(password)) {
      toast.error("Password must have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\\-/]/.test(password)) {
      toast.error("Password must have a special character");
      return;
    }

    createUser(email, password)
      .then(() => {
        userProfileUpdate(name, photo);
        toast.success("Successfully Registered");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
        form.reset();
      });
  };

  return (
    <div>
      <Helmet>
        <title>SportsSync | Register</title>
      </Helmet>
      <div className="min-h-screen max-w-2xl mx-auto mt-10">
        <div className="flex-col">
          <div className="w-full rounded-2xl shadow-2xl bg-base-100">
            <form
              className="card-body bg-cyan-200 rounded-lg"
              onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>

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
              <div className="form-control">
                <label className="label">
                  <span className="text-lg">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Photo URL"
                  className="input input-bordered"
                  name="photo"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-teal-500 hover:bg-teal-400">
                  Register
                </button>
              </div>

              <p className="text-center mt-5 text-lg">
                Already have an account?
                <span className="text-orange-600">
                  <Link to="/login"> Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
