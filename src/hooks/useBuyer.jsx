import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useBuyer = () => {
    const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isBuyer } = useQuery({
    queryKey: [user?.email, "isBuyer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/buyer/${user.email}`);
      // console.log(res.data);
      return res.data?.buyer;
    },
  });
  return [isBuyer];
};

export default useBuyer;