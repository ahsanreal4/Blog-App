import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import useFetchPostById from '../hooks/useFetchPostById';
import useCommentsPosts from '../hooks/useCommentsPosts';
import { toast } from 'react-toastify'; 
import { getAuthToken } from '../utils/auth';
import Navbar from '../components/Navbar';
import { PAGES } from '../Routes/routes';
import PostContent from '../components/PostContent';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm';
import { categories } from '../CategoriesImages/CategoriesImages';

function SinglePost() {
  const { id } = useParams();
  const { error, loading, postDataById } = useFetchPostById(id);
  const [comment, setComment] = useState(false);
  const [commentData, setCommentData] = useState({ name: '', email: '', body: '' });
  const { createComment, loading: commentLoading, error: commentError } = useCommentsPosts();
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await getAuthToken();  
        if (!token) {
          toast.error("Please log in to view the post.", {
            position: "top-right",
            autoClose: 3000, 
          });
          setTimeout(() => {
            navigate(PAGES.Login);
          }, 3000); 
        } else {
          if (postDataById?.comments) {
            setComments(postDataById.comments);
          }
        }
      } catch (error) {
        console.error("Error fetching auth token:", error);
      }
    };
    checkAuth();
  }, [postDataById, navigate]);  

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
    } 
  };

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleAddComment = () => {
    const token = getAuthToken();
    if (!token) {
      toast.error("Please log in first to add a comment.");
      return;
    }
    setComment(true); 
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500 text-center my-8">Error: {error}</p>;
  if (!postDataById) return <p className="text-center text-gray-500 my-8">No post found.</p>;

  const matchingCategory = Object.values(categories).find(
    (category) => category.name.toLowerCase().trim() === postDataById.title.toLowerCase().trim()
  );

  return (
    <>
      <Navbar />
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

        <PostContent content={postDataById.content} />
        {comments.length > 0 && <CommentsList comments={comments} />}
        <CommentForm
          commentData={commentData}
          commentLoading={commentLoading}
          commentError={commentError}
          handleChange={handleChange}
          handleCommentSubmit={handleCommentSubmit}
          handleAddComment={handleAddComment}
          comment={comment}
        />
      </div>
    </>
  );
}

export default SinglePost;
