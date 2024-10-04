import React, { useEffect } from 'react';
import { addUsers } from '../redux/features/userSlice';
import { useDispatch } from 'react-redux';
import { getAxiosInstance } from '../utils/axios';
import { FiPlus } from "react-icons/fi";
function Dashboard() {
  const dispatch = useDispatch();


  const fetchData = async () => {
    try {
        const axiosInstance = await getAxiosInstance(true)
      const response = await axiosInstance.get('/auth/profile', {
      
      });
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
      <div className="w-[300px] h-[100vh] bg-white shadow p-6">
  <button className="flex items-center gap-2 justify-center text-orange-600 font-['Poppins',sans-serif] text-[18px] bg-white shadow-lg rounded-full p-2 px-4 hover:bg-gray-100 transition mx-auto">
    <FiPlus />
    NEW POST
  </button>
</div>


    </>
  );
}

export default Dashboard;
