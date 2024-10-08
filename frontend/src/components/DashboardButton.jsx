import React from 'react';

const DashboardButton = ({ icon: Icon, text, onClick }) => {
  return (
    <button 
      className="flex items-center gap-2 justify-center text-orange-600 font-['Poppins', sans-serif] text-[18px] bg-white shadow-lg rounded-full p-2 px-4 hover:bg-gray-100 transition mx-auto mt-3" 
      onClick={onClick}
    >
      <Icon />
      {text}
    </button>
  );
};

export default DashboardButton;
