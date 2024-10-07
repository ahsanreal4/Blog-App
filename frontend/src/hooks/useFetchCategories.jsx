import { useState, useEffect } from 'react';
import { getAxiosInstance } from '../utils/axios';
import { addCategories } from '../redux/features/categoriesSlice';
import { useDispatch } from 'react-redux';
import { getAuthToken } from '../utils/auth';

function useFetchCategories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const dispatch = useDispatch(); 

  const fetchCategoriesData = async () => {
    try {
      const axiosInstance = await getAxiosInstance();
      const response = await axiosInstance.get('/api/categories');
      setCategoriesData(response.data); 
      getAuthToken()
      dispatch(addCategories(response.data));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  return {
    categoriesData,
    fetchCategoriesData, 
  };
}

export default useFetchCategories;
