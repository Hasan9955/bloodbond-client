import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllBloodRequests = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allBloodRequests = [], isLoading } = useQuery({
    queryKey: ["bloodRequests"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getbloodrequests`);

      return res.data.bloodRequests;
    },
  });

  return [allBloodRequests, isLoading];
};

export default useAllBloodRequests;
