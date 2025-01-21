import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const ManageTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/manageTasks");
      return res.data;
    },
  });

  const handleDeleteTask = async (id) => {
    const res = await axiosSecure.delete(`/task/${id}`);
    refetch();
    return res.data;
  };
  return (
    <div>
      <SectionTitle
        heading="Manage Tasks"
        subHeading="You can manage your all tasks"
      ></SectionTitle>
      <div>
        <div className="flex justify-evenly items-center my-4">
          <h2 className="text-3xl">All Tasks</h2>
          <h2 className="text-3xl">Total user: {tasks.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Detail</th>
                <th>Require Workers</th>
                <th>Amount</th>
                <th>Completion Date</th>
                <th>Publish Date</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>{task.title}</td>
                  <td>{task.detail}</td>
                  <td>{task.req_workers}</td>
                  <td>{task.amount}</td>
                  <td>{task.completion_date}</td>
                  <td>{task.current_date}</td>
                  <td>{task.buyer_name}</td>
                  <td>{task.buyer_email}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteTask(task._id)}
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
    </div>
  );
};

export default ManageTasks;
