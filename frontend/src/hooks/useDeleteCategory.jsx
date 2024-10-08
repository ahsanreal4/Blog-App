import { useState } from 'react';
import { getAxiosInstance } from '../utils/axios';
const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteCategory = async (categoryId) => {
    try {
      setLoading(true);
      const axiosInstance = await getAxiosInstance(true); 
      await axiosInstance.delete(`/api/categories/${categoryId}`);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err);
      setLoading(false);
      return false; 
    }
  };

  return { deleteCategory, loading, error };
};

export default useDeleteCategory;
