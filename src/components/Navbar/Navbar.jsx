import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const navLinks = (
    <>
      <li className="text-lg font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink to="/allServices">Services</NavLink>
      </li>
      {user && (
        <li tabIndex={0} className="text-lg font-semibold">
          <details>
            <summary>Dashboard</summary>
            <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
              <li>
                <NavLink to="/myServices">My Services</NavLink>
              </li>

              <li>
                <NavLink to="/addServices">Add Services</NavLink>
              </li>

              <li>
                <NavLink to="/mySchedules">My Schedules</NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}
    </>
  );

  const handleLogOut = () => {
    userLogout();
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-[50px]"
            src="https://i.ibb.co/0M728j3/ss-high-resolution-logo-transparent.png"
            alt=""
          />
          <h1 className="text-2xl md:text-4xl font-bold">SportsSync</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/DCghjvD/profile.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <p>{user.displayName}</p>
                </li>

                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-cyan-500 hover:bg-cyan-400 border-none">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
