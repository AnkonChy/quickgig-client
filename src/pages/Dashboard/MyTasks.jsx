import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyTasks = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myTasks = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["myTasks"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/tasks/owner?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(isPending);
  // console.log("loading", loading);
  const handleDeleteTask = (task) => {
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
        const res = await axiosSecure.delete(`/task/${task._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          //refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${task.title} has been deleted and coin refund successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly items-center my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Task:</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Detail</th>
              <th>Required Workers</th>
              <th>Amount</th>
              <th>Completion Date</th>
              <th>Submission Info</th>
              <th>Task Image URL</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task, index) => (
              <tr key={task._id}>
                <th>{index + 1}</th>
                <td>{task.title}</td>
                <td>{task.detail}</td>
                <td>{task.req_workers}</td>
                <td>{task.amount}</td>
                <td>{task.completion_date}</td>
                <td>{task.sub_info}</td>
                <td>{task.task_img_url}</td>
                <td>
                  <Link to={`/dashboard/updateTask/${task._id}`}>
                    <button className="btn btn-ghost btn-lg bg-green-500">
                      <FaEdit className=" text-white" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteTask(task)}
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
