import { getAxiosInstance } from "../utils/axios";
import { toast } from "react-toastify";

const useGetUserProfile = () => {
  const getProfile = async () => {
    try {
      const axiosInstance = await getAxiosInstance(true);
      const response = await axiosInstance.get("/auth/profile");

      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return { getProfile };
};

export default useGetUserProfile;
