import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import useFetchPostById from "../hooks/useFetchPostById";
import useCommentsPosts from "../hooks/useCommentsPosts";
import Navbar from "../components/Navbar";
import PostContent from "../components/PostContent";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";
import { categories } from "../CategoriesImages/CategoriesImages";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function SinglePost() {
  const { id } = useParams();
  const { error, loading, postDataById } = useFetchPostById(id);
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    body: "",
  });
  const {
    createComment,
    loading: commentLoading,
    error: commentError,
  } = useCommentsPosts();
  const userData = useSelector((state) => state.users.userData);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (postDataById?.comments) {
      setComments(postDataById.comments);
    }
  }, [postDataById]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      body: commentData.body,
      email: userData.email,
      name: userData.name,
    };

    const success = await createComment(id, payload);
    if (success) {
      setComments((prevComments) => [...prevComments, payload]);
      setCommentData({ name: "", email: "", body: "" });
      toast.success("Comment added successfully!");
    }
  };

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return <p className="text-red-500 text-center my-8">Error: {error}</p>;
  if (!postDataById)
    return <p className="text-center text-gray-500 my-8">No post found.</p>;

  const matchingCategory = Object.values(categories).find(
    (category) =>
      category.name.toLowerCase().trim() ===
      postDataById.title.toLowerCase().trim()
  );
  console.log("Post Title:", postDataById.title);
  console.log(
    "Category Names:",
    Object.values(categories).map((cat) => cat.name)
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

        <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight uppercase ">
          {postDataById.title.toUpperCase()}
        </h1>

        <PostContent content={postDataById.content} />
        {comments.length > 0 && <CommentsList comments={comments} />}
        <CommentForm
          commentData={commentData}
          commentLoading={commentLoading}
          commentError={commentError}
          handleChange={handleChange}
          handleCommentSubmit={handleCommentSubmit}
        />
      </div>
    </>
  );
}

export default SinglePost;
