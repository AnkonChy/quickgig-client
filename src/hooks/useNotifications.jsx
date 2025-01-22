import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useNotifications = (email) => {
  return useQuery(["notifications", email], async () => {
    const { data } = await axios.get(`/notifications?email=${email}`);
    return data;
  });
};

export default useNotifications;
