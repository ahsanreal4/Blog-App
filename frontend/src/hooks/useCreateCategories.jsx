import { useState } from 'react';
import { getAxiosInstance } from '../utils/axios';
import { getAuthToken } from '../utils/auth';

function useCreateCategories() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createCategory = async () => {
    setLoading(true);
    setError(null);

    const formData = {
      name,
    };

    try {
      const axiosInstance = await getAxiosInstance(true);
      const response = await axiosInstance.post('/api/categories', formData);
      getAuthToken()
      console.log('Category created successfully:', response.data);
    } catch (e) {
      setError(e?.response?.data?.error || 'An error occurred while creating the category.');
      console.error('Error creating category:', e);
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    createCategory,
    error,
    loading,
  };
}

export default useCreateCategories;
