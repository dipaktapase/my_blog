import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold mt-6 mt-4 text-gray-900">
        Comments:
      </h3>
      {comments.map((comment, index) => (
        <div className="mb-4" key={index}>
          <h4 className="text-gray-900 font-bold">{comment.username}</h4>
          <p className="text-gray-600">{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
