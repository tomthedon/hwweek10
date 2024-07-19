import React, { useState } from 'react';
import Navbar from './Navbar';
import ButtonCounter from './ButtonCounter';
import Comment from './Comment';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="App">
      <Navbar /> <Link to="/secondPage">Go to Meet&Greet</Link>

      <h1 className='41'>trucker log</h1>
      <h2>Your Opinion Matters</h2>
      <h2>Tell us your experience with these top rated company and how they affected you</h2>

      <div>
        <h3>FedEx Freight</h3>
        <p>Known for good pay and benefits, FedEx Freight also emphasizes safety and has a strong reputation in the industry.</p>
       
        <ButtonCounter />
      </div>

      <div>
        <h3>UPS Freight</h3>
        <p>Similar to FedEx, UPS Freight offers competitive pay and benefits, along with a focus on safety and career development.</p>
        <ButtonCounter />
      </div>

      <div>
        <h3>Old Dominion Freight Line</h3>
        <p>This company is highly regarded for its excellent pay, benefits, and employee satisfaction. They also have a good reputation for work-life balance.</p>
        <ButtonCounter />
      </div>

      <div>
        <h3>Schneider National</h3>
        <p>Schneider offers various driving jobs and is known for providing good training, benefits, and opportunities for career advancement.</p>
        <ButtonCounter />
      </div>

      <div>
        <h3>J.B. Hunt Transport</h3>
        <p>Known for its size and scope, J.B. Hunt offers diverse opportunities and competitive compensation packages.</p>
        <ButtonCounter />
      </div>

      <div>
        <h3>Werner Enterprises</h3>
        <p>Werner is recognized for its driver-friendly policies, good training programs, and decent pay.</p>
        <ButtonCounter />
      </div>

      <div>
        <h3>CR England</h3>
        <p>This company is known for its comprehensive training programs and opportunities for career growth.</p>
        <ButtonCounter />
      </div>

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

export default HomePage;
