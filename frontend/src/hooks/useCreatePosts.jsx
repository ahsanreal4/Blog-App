import { useState } from 'react';
import { getAxiosInstance } from '../utils/axios';
import { getAuthToken } from '../utils/auth';

function useCreatePosts() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createPost = async () => {
    setLoading(true);
    setError(null);

    const formData = {
      title,
      content,
      categoryId,
    };

    try {
      const axiosInstance = await getAxiosInstance(true);
      const response = await axiosInstance.post('/api/posts', formData);
      getAuthToken()
      console.log('Post created successfully:', response.data);
    } catch (e) {
      setError(e?.response?.data?.error || 'An error occurred while creating the post.');
      console.error('Error creating post:', e);
    } finally {
      setLoading(false);
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    categoryId,
    setCategoryId,
    createPost,
    error,
    loading,
  };
}

export default useCreatePosts;
