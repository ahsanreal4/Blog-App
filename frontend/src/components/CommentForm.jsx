import { toast } from "react-toastify";
import { getAuthToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../Routes/routes";

const CommentForm = ({
  commentData,
  commentLoading,
  commentError,
  handleChange,
  handleCommentSubmit,
}) => {
  const navigate = useNavigate();

  const handleSubmitWithLoginCheck = async (e) => {
    e.preventDefault();

    const token = await getAuthToken();
    if (!token) {
      toast.error("Please log in to submit a comment.", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate(PAGES.Login);
      }, 3000);

      return;
    }

    handleCommentSubmit(e);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <form className="mt-6" onSubmit={handleSubmitWithLoginCheck}>
        {commentError && (
          <p className="text-red-500">Error: {commentError.message}</p>
        )}
        {/* <div className="mb-4">
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
        </div> */}
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
          {commentLoading ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
