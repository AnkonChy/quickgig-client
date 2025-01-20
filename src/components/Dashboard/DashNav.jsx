import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { IoNotificationsCircle } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const DashNav = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: usersByEmail = [] } = useQuery({
    queryKey: ["usersByEmail", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email?email=${user?.email}`);
      console.log(res);
      return res.data;
    },
  });
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1"></div>
      <div className="flex-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <img
              className="w-8"
              src="https://img.icons8.com/?size=48&id=LVIob8w9LnNE&format=gif"
              alt=""
            />
            <h1 className="font-medium">{usersByEmail.coin}</h1>
          </div>
          <div className="flex items-center gap-1">
            <h1 className="font-bold">Role:</h1>
            <h1 className="font-medium">{usersByEmail.role}</h1>
          </div>
          <div className="flex items-center gap-1">
            <h1 className="font-medium">{user?.displayName}</h1>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoNotificationsCircle className="text-3xl text-blue-800" />
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
