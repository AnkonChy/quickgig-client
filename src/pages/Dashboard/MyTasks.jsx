import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const MyTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks/owner?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="flex justify-evenly items-center my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Task: {tasks.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Detail</th>
              <th>Required Workers</th>
              <th>Amount</th>
              <th>Submission Info</th>
              <th>Task Image URL</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.title}</td>
                <td>{user.req_workers}</td>
                <td>{user.detail}</td>
                <td>{user.amount}</td>
                <td>{user.sub_info}</td>
                <td>{user.task_img_url}</td>
                <td>
                  {/* <Link to={`/dashboard/updateItem/${item._id}`}> */}

                  <Link>
                    <button className="btn btn-ghost btn-lg bg-green-500">
                      <FaEdit className=" text-white" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    // onClick={() => handleDeleteUser(user)}
                    className="btn btn-xs"
                  >
                    <FaTrashAlt className="text-red-600 text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTasks;
