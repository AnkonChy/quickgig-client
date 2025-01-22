import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import { FaClipboardList } from "react-icons/fa";
const WorkerStates = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: workerStates } = useQuery({
    queryKey: ["workerStates"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/worker-stats?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaClipboardList />
        </div>
        <div className="stat-title">Total Submission</div>
        <div className="stat-value">{workerStates?.totalSubmission}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <MdOutlinePendingActions />
        </div>
        <div className="stat-title">Pending Submission</div>
        <div className="stat-value">{workerStates?.pendingSubmission}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <TbCoin className="text-3xl text-green-700" />
        </div>
        <div className="stat-title">Total Earning</div>
        <div className="stat-value">{workerStates?.totalEarning}</div>
      </div>
    </div>
  );
};

export default WorkerStates;
