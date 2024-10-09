import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { CgProfile } from "react-icons/cg";
import { BsFillFilePostFill } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci"; 
import useFetchUsers from '../hooks/useFetchUsers';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../Routes/routes';
import { removeAuthToken } from '../utils/auth';
import DashboardButton from '../components/DashboardButton';

function Dashboard() {
  useFetchUsers();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = () => {
    navigate(PAGES.Posts);
  };

  const handleLogout = () => {
    removeAuthToken();
    navigate(PAGES.Login);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-10 py-4 bg-white shadow-md">
        <h1 className="text-[25px] sm:text-[40px] text-blue-500 font-['Silkscreen',sans-serif]">
          ContentNest
        </h1>

        <button
          type="button"
          className="sm:hidden p-2 text-black rounded-md focus:bg-gray-100 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          <CiMenuBurger size={24} />
        </button>

        <button
          className="hidden sm:block bg-red-600 w-24 h-10 text-white font-['Lora', sans-serif] rounded hover:bg-red-800"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-md p-6 z-10">
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
          <button
            className="bg-red-600 w-full h-10 text-white font-['Lora', sans-serif] mt-3 rounded hover:bg-red-800"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

      <div className="hidden sm:block w-[300px] h-[100vh] bg-white shadow p-6">
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
