import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUpcomingCampaigns = () => {
  const axiosPublic = useAxiosPublic();
  
  const {
    data: allCampaigns = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allCampaigns"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getallcampaigns`);

      return res.data.campaigns;
    },
  });

  

  return [allCampaigns, isLoading, refetch];
};

export default useUpcomingCampaigns;
