// components/Dashboard.js
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import useFetchUsers from '../hooks/useFetchUsers';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../Routes/routes';
import { CgProfile } from "react-icons/cg";
import { BsFillFilePostFill } from "react-icons/bs";
import { removeAuthToken } from '../utils/auth';
import DashboardButton from '../components/DashboardButton';
function Dashboard() {
  useFetchUsers();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(PAGES.Posts);
  };

  const handleLogout = () => {
    removeAuthToken(); 
    navigate(PAGES.Login); 
  };

  return (
    <>
      <nav className="flex justify-between px-10">
        <h1 className="text-[40px] text-blue-500 font-['Silkscreen', sans-serif]">ContentNest</h1>
        <button 
          className="bg-red-600 w-20 h-10 text-white font-['Lora', sans-serif] mt-3 rounded hover:bg-red-800" 
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
      <div className="w-[300px] h-[100vh] bg-white shadow p-6">
        <DashboardButton 
          icon={FiPlus} 
          text="NEW POST" 
          onClick={handleNavigate} 
        />
        <DashboardButton 
          icon={CgProfile} 
          text="Profile" 
          onClick={() => navigate(PAGES.Profile)} 
        />
        <DashboardButton 
          icon={BsFillFilePostFill} 
          text="Posts" 
          onClick={() => navigate(PAGES.AllPost)} 
        />
      </div>
    </>
  );
}

export default Dashboard;
