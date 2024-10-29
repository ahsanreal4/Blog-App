import axios from "axios";
import { getAuthToken } from "./auth";

const BaseUrl = "https://blog-backend-springboot-production.up.railway.app";

export const getAxiosInstance = async (
  isAuth = false,
  customHeaders = {
    "Content-Type": "application/json",
  }
) => {
  let headers = { ...customHeaders };

  if (isAuth) {
    const token = await getAuthToken();
    headers.Authorization = `Bearer ${token}`;
  }

  const instance = axios.create({
    baseURL: BaseUrl,
    headers,
  });

  return instance;
};
