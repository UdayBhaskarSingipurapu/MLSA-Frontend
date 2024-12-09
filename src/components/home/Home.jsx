import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Logo from "../../assets/logo.jpg";
// import Logo1 from "../../assets/Images/card.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <Container className="mt-3"> 
          <Row className="text-center py-5">
            <Col>
              <h1 className="display-4" style={{ color: "#2B2B2B", fontWeight: "bold" }}>Welcome to Event Engage</h1>
              <p className="lead" style={{ color: "#393939" }}>
                Your one-stop solution for managing and discovering events at PVPSIT.<br/> Event Engage connects students and organizers with ease, offering a streamlined event experience.
              </p>
            </Col>
          </Row>

          <Row className="mt-5 d-flex align-items-stretch"> 
            <Col md={4} className="mb-4">
              <Card 
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "100%", 
                }}
              >
                <Card.Body>
                  <Card.Title style={{ color: "#2B2B2B",textAlign: "center",  }}>Centralized Event Information</Card.Title>
                  <Card.Text style={{ color: "#393939" }}>
                    Discover all events organized by MLSA PVPSIT and other clubs, with detailed schedules and descriptions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "100%", 
                }}
              >
                <Card.Body>
                  <Card.Title style={{ color: "#2B2B2B",textAlign: "center",  }}>For Students</Card.Title>
                  <Card.Text style={{ color: "#393939" }}>
                    Stay updated on upcoming events and make the most of networking and learning opportunities across the campus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "100%", 
                }}
              >
                <Card.Body>
                  <Card.Title style={{ color: "#2B2B2B", textAlign: "center",  }}>For Organizers</Card.Title>
                  <Card.Text style={{ color: "#393939" }}>
                    Easily create, manage, and promote your events while tracking attendee details in one simple platform.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5 py-5">
            <Col md={6}>
                <h2 style={{ color: "#2B2B2B", fontWeight: "bold" }}>Why Choose Event Engage?</h2>
                <p style={{ color: "#393939", lineHeight: "1.6" }}>
                Event Engage simplifies event management by offering a centralized platform for both students and organizers. 
                No more confusion about event schedules or registrations.<br/>
                Event Engage brings everything together in one place.
                </p>
                <ul className="list-unstyled mt-4" style={{ color: "#393939" }}>
                {[
                    "Comprehensive event details at a glance.",
                    "User-friendly tools for easy navigation and registration.",
                    "A hub for all clubs and departments at PVPSIT.",
                ].map((item, index) => (
                    <li className="d-flex align-items-center mb-3" key={index}>
                    <span 
                        className="me-3"
                        style={{
                        fontSize: "18px",
                        color: "#393939",
                        }}
                    >
                        ✔
                    </span>
                    <span style={{ fontSize: "16px" }}>{item}</span>
                    </li>
                ))}
                </ul>
                <Button
                variant="dark"
                className="mt-3"
                onClick={() => navigate("/signup")}
                >
                Join Us Now
                </Button>
            </Col>
            <Col md={6}>
                <img
                src={Logo}
                alt="Event Engage Features"
                className="img-fluid"
                style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
                />
            </Col>
            </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;