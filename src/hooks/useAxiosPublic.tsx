import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://blood-bound.vercel.app",
  // baseURL: "https://bloodbond-server.vercel.app/",
  baseURL: "https://bloodbond-server.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
