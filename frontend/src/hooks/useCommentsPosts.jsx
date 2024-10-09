import { getAxiosInstance } from '../utils/axios';
import { useState } from 'react';
function useCommentsPosts() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const createComment = async (postId,commentData) => {
      try {
        setLoading(true);
        const axiosInstance = await getAxiosInstance(true); 
        await axiosInstance.post(`/api/posts/${postId}/comments`,commentData);
        setLoading(false);
        return true;
      } catch (err) {
        setError(err);
        setLoading(false);
        return false; 
      }
    };
  
    return { createComment, loading, error };
  };

export default useCommentsPosts