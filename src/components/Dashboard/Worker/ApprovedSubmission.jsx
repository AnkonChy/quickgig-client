import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const ApprovedSubmission = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: approvedSubmissions = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["approvedSubmissions"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/approvedSubmissions?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="mt-20">
      <div>
        <div className="flex justify-evenly items-center my-4">
          <h2 className="text-3xl">All Approved Submissions</h2>
          <h2 className="text-3xl">
            Total Approved Submission: {approvedSubmissions.length}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Task Title</th>
                <th>Payable Amount</th>
                <th>Buyer Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {approvedSubmissions.map((submission, index) => (
                <tr key={submission._id}>
                  <th>{index + 1}</th>
                  <td>{submission.task_title}</td>
                  <td>{submission.payable_amount}</td>
                  <td>{submission.buyer_name}</td>
                  <td>{submission.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovedSubmission;
