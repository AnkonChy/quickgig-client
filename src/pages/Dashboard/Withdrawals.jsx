import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Withdrawals = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: usersByEmail = [] } = useQuery({
    queryKey: [user?.email, "usersByEmail"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/withdrawal?email=${user?.email}`);
      console.log(res);
      return res.data;
    },
  });

  //   const { data: withdrawals = [] } = useQuery({
  //     queryKey: [user?.email, "withdrawals"],
  //     enabled: !!user?.email,
  //     queryFn: async () => {
  //       console.log("User email:", user?.email);
  //       const res = await axiosSecure.get(`/withdrawal?email=${user?.email}`);
  //       console.log(res.data);
  //       return res.data;
  //     },
  //   });
  return (
    <div>
      <h1>Current coin : </h1>
    </div>
  );
};

export default Withdrawals;
