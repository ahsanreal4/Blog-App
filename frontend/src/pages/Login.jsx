import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://blog-springboot-d0e09379772b.herokuapp.com/auth/login', {
        usernameOrEmail, 
        password
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.accessToken);
        alert('Login successful!');
        console.log(response.data)
        navigate('/dashboard'); 
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Login failed. Please check your credentials.');
      } else {
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <Navbar />
      <form
        className="w-[400px] mx-auto mt-10 bg-white p-8 shadow-md rounded-lg flex flex-col"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label htmlFor="usernameOrEmail" className="block mb-1 text-sm font-medium">Username or Email:</label> {/* Update label */}
          <input
            type="text" // Change input type to text
            id="usernameOrEmail"
            value={usernameOrEmail} // Use the updated state
            onChange={(e) => setUsernameOrEmail(e.target.value)} // Handle usernameOrEmail changes
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-sm font-medium">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
