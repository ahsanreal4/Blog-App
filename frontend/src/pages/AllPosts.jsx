import React, { useState } from 'react';
import { useSelector } from 'react-redux'; 
import { useFetchPosts } from '../hooks/useFetchPosts';
import useCommentsPosts from '../hooks/useCommentsPosts';
import { categories } from '../CategoriesImages/CategoriesImages';
import { FaComment } from "react-icons/fa";
import { getAuthToken } from '../utils/auth';
function AllPosts() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState('id');
  const [sortDir, setSortDir] = useState('asc');
  const { posts, loading, error } = useFetchPosts(page, pageSize, sortBy, sortDir);

  const { createComment, loading: commentLoading, error: commentError } = useCommentsPosts();
  const [activePostId, setActivePostId] = useState(null); 
  const [comment, setComment] = useState(''); 

  const userData = useSelector((state) => state.users.userData); 
  const { name, email } = userData || { name: '', email: '' }; 

  const handleCommentSubmit = async (postId) => {
    const token = await getAuthToken(); 
    
    if (!token) {
      alert('You must be logged in to submit a comment.');
      return;
    }

    if (!name || !email) {
      alert('Please provide your name and email.');
      return;
    }
    

    const commentData = {
      id: 0,
      name: name, 
      email: email,
      body: comment, 
    };

    const success = await createComment(postId, commentData, token); 
    if (success) {
      setComment(''); 
      setActivePostId(null); 
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <button type="button" className="bg-indigo-500 text-white font-bold py-2 px-4 rounded inline-flex items-center" disabled>
          <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Processing...
        </button>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map(post => {
            const category = categories[post.categoryId];

            return (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {category && (
                  <img src={category.imageUrl} alt={category.name} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  {category && (
                    <p className="text-gray-500 mb-4"><strong>Category:</strong> {category.name}</p>
                  )}
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />

                  <div className="mt-4">
                    <button
                      className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
                      onClick={() => setActivePostId(post.id)} 
                    >
                      <FaComment className="mr-2" />
                      Comment
                    </button>
                  </div>

                  {activePostId === post.id && (
                    <div className="mt-4">
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Write your comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <button
                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-300"
                        onClick={() => handleCommentSubmit(post.id)} 
                        disabled={commentLoading}
                      >
                        {commentLoading ? 'Submitting...' : 'Submit Comment'}
                      </button>
                      {commentError && <p className="text-red-500 mt-2">{commentError.message || 'An error occurred'}</p>}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">No posts available</p>
        )}
      </div>
    </div>
  );
}

export default AllPosts;
