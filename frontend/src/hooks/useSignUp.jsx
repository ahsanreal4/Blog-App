import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../Routes/routes';
import { getAxiosInstance } from '../utils/axios'; 

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const signUp = async (formData) => {
    setLoading(true);
    try {
      const axiosInstance = await getAxiosInstance(); 
      const response = await axiosInstance.post('/auth/signup', formData); 

      setSuccess('User created successfully');
      setError(null);
      navigate(PAGES.Login);
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
