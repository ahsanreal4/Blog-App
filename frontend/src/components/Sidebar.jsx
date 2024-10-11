import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { BsFillFilePostFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai'; 

const Sidebar = ({ handleNavigate, handleLogout, toggleSidebar }) => {
  return (
    <div className="w-[300px] h-[100vh] bg-white shadow p-6">
      <button
        className="flex items-center justify-between py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 mb-6 sm:hidden"  // sm:hidden hides on desktop
        onClick={toggleSidebar}  
      >
        <span>Close Menu</span>
        <AiOutlineClose size={20} />
      </button>

      {/* Menu Items */}
      <button
        className="flex items-center py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
        onClick={() => handleNavigate('/posts')}
      >
        <FiPlus className="mr-2" size={20} />
        NEW POST
      </button>
      <button
        className="flex items-center py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
        onClick={() => handleNavigate('/profile')}
      >
        <CgProfile className="mr-2" size={20} />
        Profile
      </button>
      <button
        className="flex items-center py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
        onClick={() => handleNavigate('/all-posts')}
      >
        <BsFillFilePostFill className="mr-2" size={20} />
        Posts
      </button>
      <button
        className="mt-4 w-full bg-red-600 text-white py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
