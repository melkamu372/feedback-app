import React, { useState } from 'react';
import './App.css';
import FeedbackButtons from './FeedbackButtons';
import Popup from './Popup';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [feedbackType, setFeedbackType] = useState('');

  const handleButtonClick = (type) => {
    setFeedbackType(type);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFeedbackType('');
  };

  return (
    <div className="App">
      <h1>Feedback App</h1>
      <FeedbackButtons onClick={handleButtonClick} />

      {showPopup && (
        <Popup
          message={`Thank you for your ${feedbackType.toLowerCase()} feedback!`}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default App;
