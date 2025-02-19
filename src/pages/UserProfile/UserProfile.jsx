import React from "react";
import useAuth from "../../hooks/useAuth";
import { IoCall } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";

const UserProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="pt-28">
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96 max-w-sm border-2 border-gray-300">
          <h1 className="text-3xl text-center text-gray-800 font-semibold mb-4">
            Welcome
          </h1>
          <div className="flex flex-col justify-center items-center mb-6">
            <img
              referrerPolicy="no-referrer"
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
              src={user.photoURL}
              alt="User Profile"
            />
            <h2 className="text-2xl font-medium text-gray-900">
              {user.displayName}
            </h2>
            <p className="text-gray-600">{user.email}</p>
            <div className="flex items-center gap-10 my-3">
              <div className="flex items-center justify-between gap-1">
                <IoCall />
                <p>+8801*******</p>
              </div>
              <div className="flex items-center justify-between gap-1">
                <FaAddressCard />
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
