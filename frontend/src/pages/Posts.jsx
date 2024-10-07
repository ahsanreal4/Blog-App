import React, { useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdArrowDropdown } from "react-icons/io";
import useCreateCategories from '../hooks/useCreateCategories';
import useCreatePosts from '../hooks/useCreatePosts';
import useFetchCategories from '../hooks/useFetchCategories';

function Posts() {
  const { title, setTitle, content, setContent, categoryId, setCategoryId, createPost, loading: postLoading } = useCreatePosts();
  const { name, setName, createCategory, loading: categoryLoading, error: categoryError } = useCreateCategories();
  const { categoriesData, fetchCategoriesData } = useFetchCategories();  // Use your fetch hook

  const [showDropdown, setShowDropdown] = useState(false);
  const [categoryInputVisible, setCategoryInputVisible] = useState(false); 

  // Toggle Category Dropdown
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  // Add new category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await createCategory();  // Create the category
      setName('');  // Clear the input field
      setCategoryInputVisible(false);  // Hide input after adding
      fetchCategoriesData();  // Re-fetch categories after adding the new one
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  // Post submission handler
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!categoryId) {
      alert("Please select a category for the post!");
      return;
    }
    createPost();  // Include the selected categoryId
  };

  // Quill modules for rich text editor
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }]
    ]
  };

  const formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet'
  ];

  return (
    <div className="p-20">

      <div className="w-auto mt-6 mx-auto flex justify-between items-center gap-4 relative">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border-b-2 border-b-orange-600 w-full focus:outline-none"
        />

        {/* Dropdown for Categories */}
        <li
          className="flex items-center gap-1 bg-slate-500 text-white p-2 list-none cursor-pointer"
          onClick={handleDropdownToggle}
        >
          Categories <IoMdArrowDropdown />
        </li>

        {showDropdown && (
          <div className='absolute bg-slate-200 right-0 top-[60px] p-4 w-[300px] max-h-[200px] overflow-y-auto shadow-lg rounded'>
            <ul>
              {/* Show the fetched categories */}
              {categoriesData.length > 0 ? (
                categoriesData.map((category) => (
                  <li
                    key={category.id}
                    className={`p-2 hover:bg-gray-200 cursor-pointer ${category.id === categoryId ? 'bg-gray-400' : ''}`}
                    onClick={() => {
                      setCategoryId(category.id);
                      setShowDropdown(false); // Close dropdown after selecting
                    }}  // Set the selected category ID
                  >
                    {category.name}
                  </li>
                ))
              ) : (
                <li className="p-2">No Categories Available</li>
              )}
            </ul>
            {categoryInputVisible ? (
              <form onSubmit={handleAddCategory}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Category Name"
                  className="border-b-2 border-gray-400 focus:outline-none p-2 w-full mb-4"
                  required
                />
                <button className='bg-blue-500 text-white w-full p-2 rounded' disabled={categoryLoading}>
                  {categoryLoading ? 'Adding...' : 'Add Category'}
                </button>
                {categoryError && <p className="text-red-500 mt-2">{categoryError}</p>}
              </form>
            ) : (
              <button 
                className='bg-blue-500 text-white text-center rounded p-3 w-full'
                onClick={() => setCategoryInputVisible(true)}
              >
                Add Categories
              </button>
            )}
          </div>
        )}

        <button 
          className="bg-orange-600 text-white p-2 px-5 font-bold flex items-center gap-2 text-[20px]"
          onClick={handleCreatePost}
          disabled={postLoading}
        >
          {postLoading ? 'Publishing...' : 'Publish'} <IoSendSharp />
        </button>
      </div>

      <div>
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          className="w-auto mt-[150px] p-20 h-[500px]"
        />
      </div>

    </div>
  );
}

export default Posts;
