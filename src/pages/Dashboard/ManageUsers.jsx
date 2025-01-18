import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteTask = (user) => {
    console.log(user._id);
  };
  return (
    <div>
      <SectionTitle
        heading="Manage Users"
        subHeading="You can manage your all users"
      ></SectionTitle>
      <div>
        <div className="flex justify-evenly items-center my-4">
          <h2 className="text-3xl">All Users</h2>
          <h2 className="text-3xl">Total user: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Payable Amount</th>
                <th>Submission Details</th>
                <th>Amount</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Current Date</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.profile_picture}</td>
                  <td>{user.role}</td>
                  <td>{user.coin}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteTask(user)}
                      className="btn btn-xs"
                    >
                      <FaTrashAlt className="text-red-600 text-lg" />
                    </button>
                  </td>
                  {/* <td>
                    <Link to={`/dashboard/updateTask/${task._id}`}>
                      <button className="btn btn-ghost btn-lg bg-green-500">
                        <FaEdit className=" text-white" />
                      </button>
                    </Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
