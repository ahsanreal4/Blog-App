import React, { useState } from 'react';
import { PAGES } from '../Routes/routes';
import { useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../utils/auth';

function PostByCategoriesNavbar() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAuthToken();
    navigate(PAGES.Login);
  };

  const handleLogin = () => {
    navigate(PAGES.Login);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 sm:px-10 lg:px-20 py-5">
      <h1 className="text-[25px] sm:text-[30px] lg:text-[40px] text-blue-500 font-['Silkscreen',sans-serif]">
        ContentNest
      </h1>

      {/* Burger icon for mobile */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Main buttons visible on larger screens */}
      <div className="hidden sm:flex gap-2 sm:gap-4 mt-4 sm:mt-0">
        <button
          className="bg-blue-600 w-20 sm:w-24 h-10 text-white font-['Lora', sans-serif] rounded hover:bg-blue-800"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-red-600 w-20 sm:w-24 h-10 text-white font-['Lora', sans-serif] rounded hover:bg-red-800"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 mt-2 w-full bg-white shadow-lg sm:hidden">
          <ul className="flex flex-col gap-2 px-4 py-4">
            <li>
              <button
                className="bg-blue-600 w-full h-10 text-white font-['Lora', sans-serif] rounded hover:bg-blue-800"
                onClick={handleLogin}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="bg-red-600 w-full h-10 text-white font-['Lora', sans-serif] rounded hover:bg-red-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default PostByCategoriesNavbar;
