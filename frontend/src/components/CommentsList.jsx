const CommentsList = ({ comments }) => {
    return (
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
    );
  };
  
  export default CommentsList;
  