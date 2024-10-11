import React, { useState, useEffect } from 'react';
import { useFetchPosts } from '../hooks/useFetchPosts';
import { categories } from '../CategoriesImages/CategoriesImages';
import LoadingSpinner from '../components/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../Routes/routes';

function AllPosts() {
  const [page, setPage] = useState(0);
  const [pageSize] = useState(3); 
  const [sortBy] = useState('id');
  const [sortDir] = useState('asc');
  
  const { posts, loading, error, totalPosts } = useFetchPosts(page, pageSize, sortBy, sortDir);
  const navigate = useNavigate();

  const handlePostById = (id) => {
    navigate(PAGES.SinglePost.replace(":id", id));
  };

  const totalPages = Math.ceil(totalPosts / pageSize);

  const handlePageSelect = (pageNum) => {
    setPage(pageNum); 
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 mb-5">
      <h1 className="text-4xl font-bold text-center my-8">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => {
            const category = Object.values(categories).find(
              (cat) => cat.name.toLowerCase().trim() === post.title.toLowerCase().trim()
            );

            return (
              <div 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer"
                onClick={() => handlePostById(post.id)} 
              >
                {category ? (
                  <img
                    src={category.imageUrl || 'fallback-image.jpg'}
                    alt={category.name || 'Default Category'}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <img
                    src="fallback-image.jpg"
                    alt="Default Category"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 uppercase">{post.title}</h2>
                  {category && (
                    <p className="text-gray-500 mb-4 uppercase">
                      <strong>Category:</strong> {category.name}
                    </p>
                  )}
                  <div
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">No posts available</p>
        )}
      </div>

<div className="flex justify-center mt-8">
  <button
    onClick={handlePreviousPage}
    disabled={page === 0}  // Disable if on the first page
    className={`px-4 py-2 mr-2 ${page === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'} rounded`}
  >
    Previous
  </button>

  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageSelect(index)}
      className={`px-4 py-2 mx-1 ${index === page ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={handleNextPage}
    disabled={page === totalPages - 1}  
    className={`px-4 py-2 ml-2 ${page === totalPages - 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'} rounded`}
  >
    Next
  </button>
</div>

    </div>
  );
}

export default AllPosts;
