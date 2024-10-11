import React from 'react';
import Navbar from '../components/Navbar';

function AboutUS() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Welcome to ContentNest!
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            ContentNest is your go-to platform for sharing ideas, inspiration, and knowledge with the world. Our mission is to empower creators, bloggers, and writers to showcase their creativity and expertise in a space that's built just for them.
          </p>

          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Why Choose ContentNest?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Easy to Use
                </h3>
                <p className="text-gray-600">
                  Our platform is designed with simplicity in mind, making it easy for anyone to create and publish their content.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Beautiful Designs
                </h3>
                <p className="text-gray-600">
                  Customize your blog with stunning templates and designs that make your content shine.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Grow Your Audience
                </h3>
                <p className="text-gray-600">
                  Reach a global audience and grow your community with tools that help promote your content effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At ContentNest, we believe that everyone has a story to tell. We are committed to providing a platform that empowers voices from around the world to be heard, whether you're a professional writer or just starting out.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Join us today and become part of a thriving community of creators who are changing the world one post at a time.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Ready to Get Started?
            </h2>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition">
              Create Your Blog Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUS;
