import axios from 'axios';

const getAuthToken = async () => {
  return localStorage.getItem('token') || '';
};

const BaseUrl = 'https://blog-springboot-d0e09379772b.herokuapp.com';

export const getAxiosInstance = async (
  isAuth = false,
  customHeaders = {
    'Content-Type': 'application/json',
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
