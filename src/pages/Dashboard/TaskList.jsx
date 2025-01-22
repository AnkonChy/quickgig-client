import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaUser } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: allTasks = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["allTasks"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/allTasks");
      //   console.log(res.data);
      return res.data;
    },
  });
  return (
    <>
      <SectionTitle
        heading="All Tasks List"
        subHeading="You can see all tasks list for this website"
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-6">
        {allTasks.map((task) => (
          <div key={task._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-60 object-cover w-full"
                src={task.task_img_url}
              />
            </figure>
            <div className="card-body space-y-4">
              <h2 className="card-title font-bold text-2xl">{task.title}</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-medium">{task.buyer_name}</p>
                </div>
                <div>
                  <p className="text-xl font-medium">{task.completion_date}</p>
                </div>
              </div>
              <div className="card-actions justify-between items-center">
                <div className="badge badge-secondary py-3">
                  <FaDollarSign></FaDollarSign>
                  <p className="font-medium text-lg ml-2">{task.amount}</p>
                </div>
                <div className="badge badge-outline py-3">
                  <FaUser></FaUser>
                  <p className="font-medium text-lg ml-2">{task.req_workers}</p>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <Link to={`/dashboard/taskDetails/${task._id}`}>
                <button className="btn btn-success mb-2 text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
