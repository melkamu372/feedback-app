import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import './CommentPage.css';

const CommentPage = () => {
  const [comment, setComment] = useState('');
  const [ratings, setRatings] = useState({
    foodQuality: 0,
    foodTaste: 0,
    price: 0,
    service: 0,
    ambiance: 0,
    cleanliness: 0,
  });
  const navigate = useNavigate();
  const { type } = useParams();

  const handleSubmit = () => {
    // Handle comment submission logic here
    navigate(`/thankyou/${type}`);
  };

  const handleRatingChange = (field, value) => {
    setRatings({ ...ratings, [field]: value });
  };

  return (
    <Container fluid className="comment-page">
      <h5 className="text-center">Please Leave Your Ratings and Comments</h5>
      <Row className="mb-3">
        <Col xs={12} md={4} >
          <Card className="mb-2">
            <Card.Body>
              <Card.Title className="text-center">Food Quality</Card.Title>
              <StarRatings
                rating={ratings.foodQuality}
                starRatedColor="orange"
                changeRating={(value) => handleRatingChange('foodQuality', value)}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="3px"
                name="foodQuality"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title className="text-center">Food Taste</Card.Title>
              <StarRatings
                rating={ratings.foodTaste}
                starRatedColor="orange"
                changeRating={(value) => handleRatingChange('foodTaste', value)}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="3px"
                name="foodTaste"
              />
            </Card.Body>
          </Card>
        </Col>
        
        <Col xs={12} md={4}>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title className="text-center">Price</Card.Title>
              <StarRatings
                rating={ratings.price}
                starRatedColor="orange"
                changeRating={(value) => handleRatingChange('price', value)}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="3px"
                name="price"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-2">
      <Col xs={12} md={4}>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title className="text-center">Ambiance</Card.Title>
              <StarRatings
                rating={ratings.ambiance}
                starRatedColor="orange"
                changeRating={(value) => handleRatingChange('ambiance', value)}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="3px"
                name="ambiance"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title className="text-center">Service</Card.Title>
              <StarRatings
                rating={ratings.service}
                starRatedColor="orange"
                changeRating={(value) => handleRatingChange('service', value)}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="3px"
                name="service"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title className="text-center">Cleanliness</Card.Title>
              <StarRatings
                rating={ratings.cleanliness}
                starRatedColor="orange"
                changeRating={(value) => handleRatingChange('cleanliness', value)}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="3px"
                name="cleanliness"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <Form.Group controlId="comment">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentPage;
