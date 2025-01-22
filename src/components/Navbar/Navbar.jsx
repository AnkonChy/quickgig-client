import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: usersByEmail = [] } = useQuery({
    queryKey: ["usersByEmail", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email?email=${user?.email}`);
      // console.log(res);
      return res.data;
    },
  });

  return (
    <div className="navbar bg-base-100 mx-auto fixed z-10 w-full py-5">
      <div className="navbar-start">
        <NavLink
          to="/"
          className="animate__animated animate__rubberBand Left text-2xl md:text-3xl font-bold"
        >
          QuickGig
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-7 font-semibold md:text-xl items-center">
          {user ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink className="flex items-center gap-1">
                Available Coin
                <div className="flex gap-1 items-center">
                  <img
                    className="w-8"
                    src="https://img.icons8.com/?size=48&id=LVIob8w9LnNE&format=gif"
                    alt=""
                  />
                  <h1 className="font-medium">{usersByEmail.coin}</h1>
                </div>
              </NavLink>
              <NavLink to="/profile">User Profile</NavLink>
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
              className="py-2 px-4 md:ml-2 border-2 border-green-800 text-green-800 hover:bg-green-900 hover:text-white rounded font-semibold md:text-xl"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="py-1 px-2 md:py-1 md:px-4 border-2 border-green-800 text-green-800 hover:text-white hover:bg-green-700 rounded font-semibold md:text-xl">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="py-1 px-2 md:py-1 md:px-4 ml-2 border-2 border-red-800 hover:bg-red-800 hover:text-white rounded font-semibold md:text-xl">
                Sign Up
              </button>
            </NavLink>
          </>
        )}

        <button
          onClick={() =>
            (window.location.href =
              "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-AnkonChy.git")
          }
          className="py-1 px-2 md:py-2 md:ml-2 md:px-4 border-2 border-red-800 hover:bg-red-900 hover:text-white rounded font-semibold text-xs md:text-base lg:text-xl hidden md:inline-block"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow right-0 z-10"
          >
            <NavLink to="/dashboard">Dashboard</NavLink>
            <li>Avaiable Coin</li>
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-AnkonChy.git")
              }
              className="py-1 px-2 md:py-1 md:ml-2 md:px-4 border-2 border-red-800 hover:bg-red-900 hover:text-white rounded font-semibold md:text-xl"
            >
              Join as Developer
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
