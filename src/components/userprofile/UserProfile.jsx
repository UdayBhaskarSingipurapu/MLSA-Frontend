import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import { useContext } from "react";
import { loginContext } from "../../context/loginContext";

function UserProfile() {
  const navigate = useNavigate();
  let { err, status } = useContext(loginContext);
  let user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user);
  const pastEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "2023-10-12",
      description:
        "An introductory workshop on modern web development practices.",
    },
    {
      id: 2,
      title: "AI & ML Summit",
      date: "2023-09-20",
      description: "Exploring the future of AI and machine learning.",
    },
    {
      id: 3,
      title: "Tech Meetup",
      date: "2023-08-15",
      description: "Networking event for tech enthusiasts.",
    },
  ];

  return (
    <Container className="user-profile py-5">
      {status == true ? (
        <div>
          <Row className="mb-5">
            <Col>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title className="text-center">Dashboard</Card.Title>
                  <div className="user-info">
                    <p>
                      <strong>Roll No:</strong> {user.rollno}
                    </p>
                    <p>
                      <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                  </div>
                  <div className="text-center mt-3">
                    <Button
                      variant="primary"
                      onClick={() => navigate("/upcoming-events")}
                    >
                      Explore Upcoming Events
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="mb-4">Past Events</h3>
              <div className="past-events">
                {pastEvents.length > 0 ? (
                  pastEvents.map((event) => (
                    <Card key={event.id} className="mb-3 past-event-card">
                      <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Date: {event.date}
                        </Card.Subtitle>
                        <Card.Text>{event.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p>No past events to display.</p>
                )}
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          <h3>
            Your are not logged in. Please login
            <a href="/login">Login</a>
          </h3>
        </div>
      )}

      {/* Past Events Section */}
    </Container>
  );
}

export default UserProfile;
