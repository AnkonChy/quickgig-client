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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTasks.map((task) => (
          <div key={task._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={task.task_img_url} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {task.title}
                <div className="badge badge-secondary">
                  <FaDollarSign></FaDollarSign>
                  {task.amount}
                </div>
              </h2>
              <p>{task.detail}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <FaUser></FaUser>
                  {task.req_workers}
                </div>
              </div>
            </div>
            <Link to={`/dashboard/taskDetails/${task._id}`}>
              <button className="btn btn-success w-2/5 mx-auto mb-2 text-white">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
