import React, { useState } from 'react';
import Comment from './Comment';
import Navbar from './Navbar';

const SecondPage = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="App">
      
      <h1>trucker log</h1>
      <h2>Your Opinion Matters</h2>
      <h3>Discuss What's Best For Us</h3>

      <h4>Comments</h4>
      <Comment onCommentSubmit={handleCommentSubmit} />

      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
