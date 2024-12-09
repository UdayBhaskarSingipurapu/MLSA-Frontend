import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.jpg"
import './Navbar.css';  // Importing the CSS file

function Navbar() {
  let navigate = useNavigate();

  return (
    <header className="py-3 header">
      <Container>
        <Row className="align-items-center">
          {/* Left section with Logo */}
          <Col xs={6}>
            <img src={Logo} alt="Event Engage" className='nav-image'/>
            <button
              className="nav-btn mx-3"
              onClick={() => navigate('/')}
            >
              Home
            </button>
          </Col>

          {/* Right section with Navigation buttons */}
          <Col xs={6} className="text-end">
            <button
              className="nav-btn mx-3"
              onClick={() => navigate('/about')}
            >
              About
            </button>
            <button
              className="nav-btn mx-3"
              onClick={() => navigate('/signup')}
            >
              SignUp
            </button>
            <button
              className="nav-btn mx-3"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Navbar;
