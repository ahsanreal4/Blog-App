import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import useFetchPostById from '../hooks/useFetchPostById';
import { categories } from '../CategoriesImages/CategoriesImages';
import { FaComment } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import useCommentsPosts from '../hooks/useCommentsPosts';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { getAuthToken } from '../utils/auth';
import Navbar from '../components/Navbar';

function SinglePost() {
  const { id } = useParams();
  const { error, loading, postDataById } = useFetchPostById(id);
  const [comment, setComment] = useState(false);
  const [commentData, setCommentData] = useState({ name: '', email: '', body: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { createComment, loading: commentLoading, error: commentError } = useCommentsPosts();
  const [comments, setComments] = useState([]);  

  useEffect(() => {
    const token = getAuthToken();
    setIsAuthenticated(!!token); 

    if (postDataById?.comments) {
      setComments(postDataById.comments);
    }
  }, [postDataById]);  

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const success = await createComment(id, commentData);
    if (success) {
      const newComment = {
        name: commentData.name,
        email: commentData.email,
        body: commentData.body,
      };

      setComments((prevComments) => [...prevComments, newComment]);
      
      setCommentData({ name: '', email: '', body: '' });
      setComment(false);
      toast.success("Comment added successfully!"); 
    } else {
      toast.error("Failed to add comment. Please login first."); 
    }
  };

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleAddComment = () => {
    if (!isAuthenticated) {
      toast.error("Please log in first to add a comment.");
      return;
    }
    setComment(true); 
  };

  if (loading) return <LoadingSpinner />;

  if (error) return <p className="text-red-500 text-center my-8">Error: {error}</p>;

  if (!postDataById) {
    return <p className="text-center text-gray-500 my-8">No post found.</p>;
  }

  const matchingCategory = Object.values(categories).find(
    (category) => category.name.toLowerCase().trim() === postDataById.title.toLowerCase().trim()
  );

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {matchingCategory && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img
              src={matchingCategory.imageUrl}
              alt={matchingCategory.name}
              className="w-full h-80 object-cover"
            />
          </div>
        )}

        <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
          {postDataById.title}
        </h1>

        <div
          className="text-lg leading-relaxed text-gray-700 mb-12"
          dangerouslySetInnerHTML={{ __html: postDataById.content }}
        />

        {comments.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Comments</h2>
            <ul>
              {comments.map((comment, index) => (
                <li key={index} className="mb-6 pb-4 border-b border-gray-200">
                  <p className="font-semibold text-gray-800 mb-2">
                    {comment.name} <span className="text-gray-600 text-sm">({comment.email})</span>
                  </p>
                  <p className="text-gray-700 text-lg">{comment.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

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

        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </>
  );
}

export default SinglePost;
