import React from 'react';
function PostsData({ postDataByCategories }) {
  return (
    <>
      {postDataByCategories.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {postDataByCategories.map((post) => (
            <li key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <div
                className="text-gray-600 mt-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {post.comments && post.comments.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-700">Comments:</h3>
                  <ul className="list-disc list-inside mt-2">
                    {post.comments.map((comment) => (
                      <li key={comment.id} className="text-gray-600 list-none">
                        <p className="font-semibold">{comment.name} ({comment.email}):</p>
                        <p>{comment.body}</p>
                        
                      </li>
                    ))}
                  </ul>
                </div>
                
              )}
            </li>
            
          ))}


        </ul>
      ) : (
        <p className="text-center text-lg text-gray-500">No posts available for this category</p>
      )}
    </>
  );
}

export default PostsData;
