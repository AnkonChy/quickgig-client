import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MySubmission = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();

  const {
    data: submissions = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["submissions", user?.email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/allSubmission/worker?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = submissions.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(submissions.length / itemsPerPage);
  return (
    <div>
      <SectionTitle
        heading="My Submission"
        subHeading="You can see your submission list"
      ></SectionTitle>
      <div>
        <div className="flex justify-evenly items-center my-4">
          <h2 className="text-3xl">All Users</h2>
          <h2 className="text-3xl">Total Submissions: {submissions.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Payable Amount</th>
                <th>Submission Details</th>
                <th>Amount</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Current Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((submission, index) => (
                <tr key={submission._id}>
                  <th>{index + 1}</th>
                  <td>{submission.task_title}</td>
                  <td>{submission.payable_amount}</td>
                  <td>{submission.submission_details}</td>
                  <td>{submission.payable_amount}</td>
                  <td>{submission.buyer_name}</td>
                  <td>{submission.buyer_email}</td>
                  <td>{submission.current_date}</td>
                  <td>
                    <span
                      className={
                        submission.status === "pending"
                          ? "bg-orange-400 px-1 rounded-lg font-medium"
                          : "bg-green-600 text-white rounded-lg font-medium px-1"
                      }
                    >
                      {submission.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center my-4 items-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="btn btn-ghost"
            >
              Previous
            </button>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="btn btn-ghost"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubmission;
