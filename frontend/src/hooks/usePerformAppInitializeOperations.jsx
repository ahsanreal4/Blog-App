import { useEffect } from "react";
import useGetUserProfile from "./useGetUserProfile";
import { getAuthToken } from "../utils/auth";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/features/userSlice";

const usePerformAppInitializeOperations = () => {
  const dispatch = useDispatch();
  const { getProfile } = useGetUserProfile();

  const setUserProfileInRedux = async () => {
    let token = await getAuthToken();

    if (typeof token != "string" || token.length == 0) return;

    const profile = await getProfile();
    dispatch(addUsers(profile));
  };

  useEffect(() => {
    setUserProfileInRedux();
  }, []);

  return null;
};

export default usePerformAppInitializeOperations;
