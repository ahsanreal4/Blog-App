import { useState, useEffect } from 'react';
import { getAxiosInstance } from '../utils/axios';

function useFetchCategories() {
  const [categoriesData, setCategoriesData] = useState([]);

  const fetchCategoriesData = async () => {
    try {
      const axiosInstance = await getAxiosInstance(true);
      const response = await axiosInstance.get('/api/categories');
      setCategoriesData(response.data); 
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
