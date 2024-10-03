import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
          <h1 className="text-[40px] text-blue-500 font-['Silkscreen',sans-serif]">ContentNest</h1>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            <CiMenuBurger />
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link to={"/"} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </Link>
            <Link to={"/about-us"} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About Us </Link>
            <Link to="/sign-up" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Register </Link>
            <Link to={"/login"} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Login </Link>
          </div>
        </nav>

        {isMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link  to={"/"} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </Link>
                <Link  to={"/about-us"} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About Us </Link>
                <Link  to={"/sign-up"} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Register </Link>
                <Link  to={"/login"} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Login </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
