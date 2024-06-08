import React from 'react';

const FeedbackButtons = ({ onClick }) => {
  return (
    <div>
      <button onClick={() => onClick('Good')}>Good</button>
      <button onClick={() => onClick('Neutral')}>Neutral</button>
      <button onClick={() => onClick('Bad')}>Bad</button>
    </div>
  );
};

export default FeedbackButtons;
