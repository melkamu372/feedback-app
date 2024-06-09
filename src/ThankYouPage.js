import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container className="thank-you-page text-center">
      <FaCheckCircle className="check-icon" />
      <h6>Thank you for your valuable feedback!</h6>
      <Button variant="primary" onClick={handleBackToHome}>
        Home Page
      </Button>
    </Container>
  );
};

export default ThankYouPage;
