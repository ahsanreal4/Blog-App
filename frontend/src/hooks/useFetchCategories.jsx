import { useState, useEffect } from 'react';
import { getAxiosInstance } from '../utils/axios';
import { addCategories } from '../redux/features/categoriesSlice';
import { useDispatch } from 'react-redux';

function useFetchCategories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const dispatch = useDispatch(); 

  const fetchCategoriesData = async () => {
    try {
      const axiosInstance = await getAxiosInstance(true);
      const response = await axiosInstance.get('/api/categories');
      setCategoriesData(response.data); 
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
