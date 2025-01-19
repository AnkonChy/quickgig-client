import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { RiTodoLine } from "react-icons/ri";

const BuyerStates = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: buyerStates } = useQuery({
    queryKey: ["buyerStates"],
    queryFn: async () => {
      const res =await axiosSecure.get(`/buyer-stats?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <RiTodoLine className="text-3xl text-green-700" />
        </div>
        <div className="stat-title">Total Task</div>
        <div className="stat-value">{buyerStates?.totalTask}</div>
      </div>

      {/* <div className="stat">
        <div className="stat-figure text-secondary">
          <PiUsersThreeBold className="text-3xl text-green-700" />
        </div>
        <div className="stat-title">Total Buyer</div>
        <div className="stat-value">{adminStats?.totalBuyer}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <TbCoin className="text-3xl text-green-700" />
        </div>
        <div className="stat-title">Total Coin</div>
        <div className="stat-value">{adminStats?.totalAvailableCoin}</div>
      </div> */}
    </div>
  );
};

export default BuyerStates;
