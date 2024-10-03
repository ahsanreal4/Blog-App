import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://blog-springboot-d0e09379772b.herokuapp.com/auth/signup',
        {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 201) {
        setSuccess('User created successfully');
        setError(null);
        setFormData({
          name: '',
          username: '',
          email: '',
          password: '',
        });
      }
    } catch (e) {
      setError(e.response?.data?.message || 'An error occurred');
      setSuccess('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    
  };

  return (
    <>
      <Navbar />
      <form
        className="w-[400px] h-auto bg-white p-8 shadow-md rounded-lg flex flex-col justify-center m-auto mt-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <label htmlFor="name" className="mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name" 
          placeholder="Enter your name"
          className="p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={formData.name}  
          onChange={handleChange} 
        />

        <label htmlFor="username" className="mb-2 text-sm font-medium">Username</label>
        <input
          type="text"
          id="username"
          name="username" 
          placeholder="Enter your username"
          className="p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={formData.username} 
          onChange={handleChange}  
        />

        <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email" 
          placeholder="Enter your email"
          className="p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={formData.email}  
          onChange={handleChange}  
        />

        <label htmlFor="password" className="mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password" 
          placeholder="Enter your password"
          className="p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={formData.password}  
          onChange={handleChange}  
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign Up
        </button>

        {success && <p className="text-green-500 text-sm mt-4">{success}</p>}
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </form>
    </>
  );
}

export default SignUp;
