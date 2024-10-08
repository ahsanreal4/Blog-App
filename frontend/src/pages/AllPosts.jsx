import React, { useState } from 'react';
import { useFetchPosts } from '../hooks/useFetchPosts';
import { categories } from '../CategoriesImages/CategoriesImages';

function AllPosts() {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [sortBy, setSortBy] = useState('id');
    const [sortDir, setSortDir] = useState('asc');

    const { posts, loading, error } = useFetchPosts(page, pageSize, sortBy, sortDir);

    if (loading) {
        return <div class="flex justify-center items-center mt-10">
        <button type="button" class="bg-indigo-500 text-white font-bold py-2 px-4 rounded inline-flex items-center" disabled>
          <svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Processing...
        </button>
      </div>
      
      
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
