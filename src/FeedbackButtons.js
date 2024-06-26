import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './FeedbackButtons.css';

const FeedbackButtons = () => {
  const navigate = useNavigate();

  const handleButtonClick = (type) => {
    if (type === 'Good') {
      navigate(`/thankyou/${type}`);
    } else {
      navigate(`/comment/${type}`);
    }
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    console.log(currentHour);
    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <>
      <h6>{getGreeting()}, how happy do you feel after visiting us today?</h6>

      <Row className="justify-content-center mt-3">
        <Col xs="auto" className="text-center px-6">
          <FaSmile className="icon good" onClick={() => handleButtonClick('Good')} />
          <div>Happy</div>
        </Col>
        <Col xs="auto" className="text-center px-6">
          <FaMeh className="icon normal" onClick={() => handleButtonClick('Normal')} />
          <div>Normal</div>
        </Col>
        <Col xs="auto" className="text-center px-6">
          <FaFrown className="icon bad" onClick={() => handleButtonClick('Sad')} />
          <div>Sad</div>
        </Col>
      </Row>
    </>
  );
};

export default FeedbackButtons;
