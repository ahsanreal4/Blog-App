import React from 'react';
import { FaComment } from 'react-icons/fa';

export const AddCommentButton = ({ handleAddComment }) => {
  return (
    <button
      className="bg-blue-500 p-3 flex items-center text-white gap-2"
      onClick={handleAddComment}
    >
      <FaComment />
      Add Comment
    </button>
  );
};
