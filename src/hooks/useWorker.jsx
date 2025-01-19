import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useWorker = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isWorker } = useQuery({
    queryKey: [user?.email, "isWorker"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/worker/${user.email}`);
      console.log(res.data);
      return res.data?.worker;
    },
  });
  return [isWorker];
};

export default useWorker;
