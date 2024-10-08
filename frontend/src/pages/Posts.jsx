import React, { useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import ReactQuill from 'react-quill';
import { IoMdArrowDropdown } from "react-icons/io";
import 'react-quill/dist/quill.snow.css';
import useCreatePosts from '../hooks/useCreatePosts';
import CategoriesDropdown from '../components/CategoriesDropdown';
import { PAGES } from '../Routes/routes';
import { useNavigate } from 'react-router-dom';

function Post() {
  const { title, setTitle, content, setContent, categoryId, setCategoryId, createPost, loading: postLoading } = useCreatePosts();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate()
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!categoryId) {
      alert("Please select a category for the post!");
      return;
    }
    createPost();
  };

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
    <div className="p-4 md:p-20">
    <div className="flex justify-end mb-4">
      <button
        onClick={() => navigate(PAGES.Dashboard)} 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Back to Dashboard
      </button>
    </div>




    <div className="w-auto mt-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative">
    <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border-b-2 border-b-orange-600 w-full focus:outline-none"
        />

        <li
          className="flex items-center gap-1 bg-slate-500 text-white p-2 list-none cursor-pointer"
          onClick={handleDropdownToggle}
        >
          Categories <IoMdArrowDropdown/>
        </li>

        {showDropdown && (
          <CategoriesDropdown setCategoryId={setCategoryId} setShowDropdown={setShowDropdown} />
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
    className="w-auto mt-[60px] md:mt-[150px] p-4 md:p-10 lg:p-20 h-[300px] md:h-[400px] lg:h-[500px]"
  />
</div>

    </div>
  );
}

export default Post;
