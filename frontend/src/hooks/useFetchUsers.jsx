import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/features/userSlice';
import { getAxiosInstance } from '../utils/axios';
const useFetchUsers = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const axiosInstance = await getAxiosInstance(true); 
      const response = await axiosInstance.get('/auth/profile');
      dispatch(addUsers(response.data)); 
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData }; 
};

export default useFetchUsers;
