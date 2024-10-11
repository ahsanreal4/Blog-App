const PostContent = ({ content }) => {
    return (
      <div
        className="text-lg leading-relaxed text-gray-700 mb-12"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };
  
  export default PostContent;
  