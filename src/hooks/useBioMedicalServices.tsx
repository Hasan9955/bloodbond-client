import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBioMedicalServices = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allBioMedicalServices = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bioMedicalServices"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getservices`);

      return res.data.services;
    },
  });

  return [allBioMedicalServices, isLoading, refetch];
};

export default useBioMedicalServices;
