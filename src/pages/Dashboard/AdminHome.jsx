import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { PiUsersThreeBold } from "react-icons/pi";
import { TbCoin } from "react-icons/tb";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: adminStats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="Welcome Admin Dashboard"
        subHeading="You can manage everything"
      ></SectionTitle>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl text-green-700" />
          </div>
          <div className="stat-title">Total Worker</div>
          <div className="stat-value">{adminStats?.totalWorker}</div>
        </div>

        <div className="stat">
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
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
