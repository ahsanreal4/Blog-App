// src/hooks/useLogin.js

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://blog-springboot-d0e09379772b.herokuapp.com/auth/login', {
        usernameOrEmail,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.accessToken);
        alert('Login successful!');
        navigate('/dashboard');
      }
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
