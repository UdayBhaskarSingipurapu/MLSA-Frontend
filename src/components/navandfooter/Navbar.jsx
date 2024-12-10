import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import "./Navbar.css"; // Importing the CSS file
import { useContext } from "react";
import { loginContext } from "../../context/loginContext";
function Navbar() {
  let { status, logoutuser } = useContext(loginContext);
  let navigate = useNavigate();
  let lgout = () => {
    logoutuser();
    navigate("/");
  }
  return (
    <header className="py-3 header">
      <Container>
        <Row className="align-items-center">
          {/* Left section with Logo */}
          <Col xs={6}>
            <img src={Logo} alt="Event Engage" className="nav-image" />
            <button className="nav-btn mx-3" onClick={() => navigate("/")}>
              Home
            </button>
            <button
              className="nav-btn mx-3"
              onClick={() => navigate("/upcoming-events")}
            >
              Upcoming Events
            </button>
          </Col>

          {/* Right section with Navigation buttons */}
          <Col xs={6} className="text-end">
            {status === false ? (
              <div>
                <button
                  className="nav-btn mx-3"
                  onClick={() => navigate("/about")}
                >
                  About
                </button>
                <button
                  className="nav-btn mx-3"
                  onClick={() => navigate("/signup")}
                >
                  SignUp
                </button>
                <button
                  className="nav-btn mx-3"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="nav-btn mx-3"
                  onClick={() => navigate("/about")}
                >
                  About
                </button>
                <button className="nav-btn mx-3" onClick={lgout}>
                  Logout
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Navbar;
