import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Header';
import FeedbackButtons from './FeedbackButtons';
import CommentPage from './CommentPage';
import ThankYouPage from './ThankYouPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<FeedbackButtons />} />
            <Route path="/comment/:type" element={<CommentPage />} />
            <Route path="/thankyou/:type" element={<ThankYouPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
