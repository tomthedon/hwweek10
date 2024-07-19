import React, { useState } from 'react';

const Comment = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      onCommentSubmit(comment); // Pass the comment up to the parent component
      setComment(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Comment;
