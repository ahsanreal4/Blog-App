import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAxiosInstance } from '../utils/axios';
import { setAuthToken } from '../utils/setAuth';
const useLogin = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const axiosInstance = await getAxiosInstance(); 
      const response = await axiosInstance.post('/auth/login', {
        usernameOrEmail,
        password,
      });

      const token = response.data.accessToken;
      setAuthToken(token); 
      alert('Login successful!');
      navigate('/dashboard');
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Login failed. Please check your credentials.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return {
    usernameOrEmail,
    password,
    setUsernameOrEmail,
    setPassword,
    handleLogin,
    error,
  };
};

export default useLogin;
