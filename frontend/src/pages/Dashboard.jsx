import axios from 'axios';
import React, { useEffect } from 'react';
import { addUsers } from '../redux/features/userSlice';
import { useDispatch } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://blog-springboot-d0e09379772b.herokuapp.com/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data); 
      dispatch(addUsers(response.data));  
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred'); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]); 

  return (
    <>
      <nav className="flex justify-between px-10">
        <h1 className="text-[40px] text-blue-500 font-['Silkscreen',sans-serif]">ContentNest</h1>
        <button className="bg-red-600 w-20 h-10 text-white font-['Lora',sans-serif] mt-3 rounded hover:bg-red-800">
          Logout
        </button>
      </nav>
    </>
  );
}

export default Dashboard;
