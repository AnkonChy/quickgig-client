import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const TaskToReview = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: taskReviews = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["taskReviews"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/submission/buyer_email?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      {" "}
      <div>
        <div className="flex justify-evenly items-center my-4">
          <h2 className="text-3xl">My All submission</h2>
          <h2 className="text-3xl">Total Submission: {taskReviews.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Worker Name</th>
                <th>Task Title</th>
                <th>Payable Amount</th>
                <th>View Submission</th>
                <th>Approve</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {taskReviews.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>{task.worker_name}</td>
                  <td>{task.task_title}</td>
                  <td>{task.payable_amount}</td>
                  <td>
                    {/* <Link to={`/dashboard/updateTask/${task._id}`}> */}
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="btn btn-lg bg-green-500"
                    >
                      <FaEye />
                    </button>
                    {/* modal  */}

                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box text-center">
                        <h3 className="font-bold text-xl">{task.task_title}</h3>
                        <h4 className="font-medium text-lg">Worker Name: {task.worker_name}</h4>
                        <h4  className="font-medium text-lg">Worker Name: {task.worker_email}</h4>
                        <h4  className="font-medium text-lg">Payable Amount: {task.payable_amount}</h4>
                        <p className="font-medium">Submission Details: {task.submission_details}</p>
                        <p className="text-sm font-medium">Status: {task.status}</p>
                        <p className="py-4">
                          Press ESC key or click the button below to close
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                    {/* </Link> */}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteTask(task)}
                      className="btn btn-xs"
                    >
                      <SiTicktick className="text-green-600 text-lg" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteTask(task)}
                      className="btn btn-xs"
                    >
                      <MdCancel className="text-red-600 text-lg" />
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

export default TaskToReview;
