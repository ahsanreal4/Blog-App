import React from 'react';
import Navbar from '../components/Navbar';
import CategoriesComponent from '../components/CategoriesComponent';
import AllPosts from './AllPosts';

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-[url('https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-no-repeat bg-cover bg-center mt-[100px]">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className='text-[80px] lg:text-[100px] text-[#444]'>BLOGS</h3>
        </div>
      </div>

      {/* Categories Section */}
      <CategoriesComponent/>

      <AllPosts/>
      
      {/* About Us Section */}
      <div className="py-12 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Our Blog</h2>
        <p className="text-lg mb-6">We provide in-depth articles and insights on a variety of topics. Our mission is to share knowledge and inspire readers to explore new ideas and perspectives.</p>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-500 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-lg mb-6">Stay updated with the latest blog posts and news!</p>
        <div className="flex justify-center">
          <input 
            type="email" 
            className="px-4 py-2 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your email" 
            aria-label="Email Address"
          />
          <button className="px-4 py-2 bg-white text-blue-500 font-bold rounded-r-lg hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </div>


    </>
  )
}

export default Home;
