import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { BsFillFilePostFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { removeAuthToken, getAuthToken } from '../utils/auth';
import DashboardButton from '../components/DashboardButton';
import { PAGES } from '../Routes/routes';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const notify = () => toast.error("Please Login First then come here!");

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getAuthToken();
      if (!token) {
        notify(); 
        setTimeout(() => {
          navigate(PAGES.Login);
        }, 2000);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleNavigate = (page) => {
    navigate(page);
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
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} menuItems={[
        { name: 'New Post', icon: FiPlus, action: () => handleNavigate(PAGES.Posts) },
        { name: 'Profile', icon: CgProfile, action: () => handleNavigate(PAGES.Profile) },
        { name: 'Posts', icon: BsFillFilePostFill, action: () => handleNavigate(PAGES.AllPost) }
      ]} />
      
      <div className="hidden sm:block w-[300px] h-[100vh] bg-white shadow p-6">
        <DashboardButton icon={FiPlus} text="NEW POST" onClick={() => handleNavigate(PAGES.Posts)} />
        <DashboardButton icon={CgProfile} text="Profile" onClick={() => handleNavigate(PAGES.Profile)} />
        <DashboardButton icon={BsFillFilePostFill} text="Posts" onClick={() => handleNavigate(PAGES.AllPost)} />
        <button className="mt-4 w-full bg-red-600 text-white py-2 rounded" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default Dashboard;
