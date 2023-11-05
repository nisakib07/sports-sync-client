const Register = () => {
  return (
    <div>
      <div className="min-h-screen max-w-2xl mx-auto mt-10">
        <div className="flex-col">
          <div className="w-full rounded-2xl shadow-2xl bg-base-100">
            <form className="card-body">
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
                <button className="btn bg-teal-500 hover:bg-teal-400">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
