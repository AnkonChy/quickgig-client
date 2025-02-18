import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaUsers } from "react-icons/fa";

const Tasks = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axiosPublic("/tasks");
      return data;
    },
  });
  return (
    <div className="pt-32 w-11/12 mx-auto">
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl text-center lg:text-5xl font-bold my-4">
        All Tasks
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20 rounded-none">
        {tasks
          .map((task) => (
            <div
              key={task._id}
              className="card bg-base-100 shadow-xl rounded-none"
            >
              <figure>
                <img
                  src={task.task_img_url}
                  alt="Shoes"
                  className="rounded-xl border h-72 w-full object-cover"
                />
              </figure>
              <div className="px-2 my-3 space-y-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg bg-slate-200 px-2 py-1 rounded-full">
                    Hire Space
                  </h1>
                  <p className="text-lg flex items-center gap-1">
                    <FaUsers />
                    {task.req_workers}
                  </p>
                </div>
                <h2 className="text-2xl font-bold w-4/5">{task.title}</h2>
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-bold">Last Date</h1>
                  <p className="text-lg font-bold">{task.completion_date}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center gap-1 font-bold text-lg">
                    <FaDollarSign />
                    {task.amount}
                  </h1>
                  <button className="btn bg-blue-900 text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default Tasks;
