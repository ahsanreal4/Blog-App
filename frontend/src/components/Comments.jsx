import React from 'react';
import useCommentsPosts from '../hooks/useCommentsPosts';

function Comments({ postId }) {
  const { error, loading, commentData } = useCommentsPosts(postId);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!commentData || commentData.length === 0) {
    return <div>No comments available.</div>;
  }

  return (
    <ul className="mt-4 space-y-4">
      {commentData.map((comment) => (
        <li key={comment.id} className="border-b pb-2">
          <p className="font-semibold">{comment.name}</p>
          <p className="text-gray-600 text-sm">{comment.email}</p>
          <p className="mt-1 text-gray-800">{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default Comments;
