import { useEffect, useState } from 'react';
import { getAxiosInstance } from '../utils/axios';

function useFetchPostByCategories(categoriesId) {
  const [postDataByCategories, setPostDataByCategories] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);      

  const fetchApi = async () => {
    try {
      setLoading(true); 
      const axiosInstance = await getAxiosInstance();
      const response = await axiosInstance.get(`/api/posts/category/${categoriesId}`);
      setPostDataByCategories(response.data);
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      setError('Failed to fetch posts')
    } finally {
      setLoading(false);  
    }
  };

  useEffect(() => {
    if (categoriesId) {
      fetchApi();
    }
  }, [categoriesId]); 

  return { postDataByCategories, loading, error };
}

export default useFetchPostByCategories;
