import { useState } from 'react';
import axios from 'axios';

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  const signUp = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://blog-springboot-d0e09379772b.herokuapp.com/auth/signup',
        formData
      );

      if (response.status === 201) {
        setSuccess('User created successfully');
        setError(null);
      }
    } catch (e) {
      setError(e.response?.data?.message || 'An error occurred');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading, error, success, setError, setSuccess };
};

export default useSignUp;
