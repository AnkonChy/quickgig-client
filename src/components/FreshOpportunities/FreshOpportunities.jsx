import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaDollarSign, FaUsers } from "react-icons/fa";

const FreshOpportunities = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl text-center lg:text-5xl font-bold my-4">
        Fresh Opportunities
      </h1>
      <p className="text-lg text-center">
        Discover the latest career opportunities tailored to your skills and
        aspirations.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-20">
        {tasks
          .map((task) => (
            <div key={task._id} className="card bg-base-100 shadow-xl">
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
                <h2 className="text-3xl font-bold">{task.title}</h2>
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-bold">Last Date</h1>
                  <p className="text-lg font-bold">{task.completion_date}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center gap-1">
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
          .slice(0, 3)}
      </div>
    </div>
  );
};

export default FreshOpportunities;
