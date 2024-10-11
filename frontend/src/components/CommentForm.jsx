import { FaComment } from 'react-icons/fa';

const CommentForm = ({
  commentData,
  commentLoading,
  commentError,
  handleChange,
  handleCommentSubmit,
  handleAddComment,
  comment
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <button
        className="bg-blue-500 p-3 flex items-center text-white gap-2"
        onClick={handleAddComment}
      >
        <FaComment />
        Add Comment
      </button>

      {comment && (
        <form className="mt-6" onSubmit={handleCommentSubmit}>
          {commentError && <p className="text-red-500">Error: {commentError.message}</p>}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={commentData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={commentData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="body"
              value={commentData.body}
              onChange={handleChange}
              placeholder="Your Comment"
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-3 rounded"
            disabled={commentLoading}
          >
            {commentLoading ? 'Submitting...' : 'Submit Comment'}
          </button>
        </form>
      )}
    </div>
  );
};

export default CommentForm;
