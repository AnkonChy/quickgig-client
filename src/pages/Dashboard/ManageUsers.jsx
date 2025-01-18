import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteTask = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/users/${user._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          //refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  const handleChangeRole = (e, user) => {
    const newRole = e.target.value;
    axiosSecure
      .patch(`/users/makeRole/${user._id}`, {
        role: newRole,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an ${newRole} now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
                <th>Name</th>
                <th>Email</th>
                <th>Profile Picture</th>
                <th>Current role</th>
                <th>Coin</th>
                <th>Delete</th>
                <th>Update Role</th>
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
                  <td>
                    {/* <Link to={`/dashboard/updateTask/${task._id}`}> */}
                    <Link>
                      <select
                        type="text"
                        className="input input-bordered h-10 text-sm"
                        name="role"
                        id="role"
                        defaultValue={user.role}
                        onChange={(e) => handleChangeRole(e, user)}
                        required
                      >
                        <option value="" disabled>
                          Select role
                        </option>
                        <option value="admin">Admin</option>
                        <option value="worker">Worker</option>
                        <option value="buyer">Buyer</option>
                      </select>
                    </Link>
                  </td>
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
