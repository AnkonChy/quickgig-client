import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAuth from "../../hooks/useAuth/useAuth";
const Navbar = () => {
  const { user, handleLogout } = useAuth();

  return (
    <div className="navbar bg-base-100 my-4 w-11/12 mx-auto">
      <div className="navbar-start">
        <Link className="animate__animated animate__rubberBand Left text-2xl md:text-3xl font-bold">
          QuickGig
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-semibold md:text-xl">
          {user ? (
            <>
              <NavLink>Dashboard</NavLink>
              <NavLink>Available Coin</NavLink>
              <NavLink>User Profile</NavLink>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              className="py-2 px-4 ml-2 hover:bg-green-900 hover:text-white rounded font-semibold md:text-xl"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="py-1 px-2 md:py-2 md:px-4 hover:text-white hover:bg-green-700 rounded font-semibold md:text-xl">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="py-1 px-2 md:py-2 md:px-4 hover:bg-red-900 hover:text-white rounded font-semibold md:text-xl">
                Register
              </button>
            </NavLink>
          </>
        )}

        <button
          onClick={() =>
            (window.location.href =
              "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-AnkonChy.git")
          }
          className="py-1 px-2 md:py-2 md:px-4 hover:bg-red-900 hover:text-white rounded font-semibold md:text-xl"
        >
          Join as Developer
        </button>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Avaiable Coin</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
