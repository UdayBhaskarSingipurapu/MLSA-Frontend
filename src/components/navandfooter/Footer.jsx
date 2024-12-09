import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Footer() {
  return (
    <footer className="text-light py-3 mt-5" style={{ backgroundColor: "#393939" }}>
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                © 2024 Event Engage. Empowering students and organizers at PVPSIT.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}

export default Footer