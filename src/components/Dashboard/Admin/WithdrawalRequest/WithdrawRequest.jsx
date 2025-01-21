import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const WithdrawRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: withdrawRequests = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["withdrawRequests"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/withdrawRequest");
      return res.data;
    },
  });

  const handlePaymentSuccess = async (request) => {
    const response = await axiosSecure.patch(`/paymentSuccess/${request._id}`, {
      withdrawCoin: request.withdrawCoin,
      worker_email: request.worker_email,
    });
   refetch()
    
  };
  return (
    <div className="mt-20">
      <div>
        <div className="flex justify-evenly items-center my-4">
          <h2 className="text-3xl">My All Withdrawal Request</h2>
          <h2 className="text-3xl">Total Request: {withdrawRequests.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Worker Name</th>
                <th>Worker Email</th>
                <th>Withdrawal Amount</th>
                <th>Payment System</th>
                <th>Withdraw Date</th>
              </tr>
            </thead>
            <tbody>
              {withdrawRequests.map((request, index) => (
                <tr key={request._id}>
                  <th>{index + 1}</th>
                  <td>{request.worker_name}</td>
                  <td>{request.worker_email}</td>
                  <td>{request.withdrawalAmount}</td>
                  <td>{request.paymentSystem}</td>
                  <td>{request.withdraw_date}</td>
                  <td>
                    <button
                      onClick={() => handlePaymentSuccess(request)}
                      className="btn btn-lg bg-green-500"
                    >
                      Payment Success
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

export default WithdrawRequest;
