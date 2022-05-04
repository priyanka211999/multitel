import React from "react";
import { Button, Col, Container, Row, Card, CardGroup } from "react-bootstrap";

function MyProductCard() {
  return (
    <Container className="mb-4">
      <Row>
        <Col md={12}>
          <h5 style={{ color: "#0076B5" }}>Check the products below</h5>
          <h5>Broadband(1)</h5>
          <CardGroup
            style={{
              backgroundColor: "#F5F5F5",
              marginTop: "30px",
              padding: "15px",
            }}
          >
            <Col md={6}>
              <Card style={{ background: "none", border: "none" }}>
                <Card.Body>
                  <h4 style={{ color: "#0076B5" }}>
                    Your Unlimited GB+ Talk plan runs at
                  </h4>
                  <h4>100 Mbps</h4>
                  <p style={{ display: "inline-block" }}>
                    Rs. 958 per bill cycle{" "}
                  </p>{" "}
                  <u
                    style={{
                      color: "#0076B5",
                      display: "inline-block",
                      marginLeft: "20px",
                    }}
                  >
                    <p> Want to Recharge?</p>
                  </u>
                  <Button
                    size="md"
                    style={{
                      backgroundColor: "#0076B5",
                      background: "#0076B5",
                    }}
                  >
                    <i class="fa-solid fa-download mr-1"></i> Download Multitel
                    Mobile App
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{ background: "none", border: "none", marginTop:"50px" }}>
                <Card.Body>
                  <div style={{ display: "inline-block", marginLeft:"30px" }}>
                    <p>Speed</p>
                    <h5>100 Mbps</h5>
                  </div>
                  <div style={{ display: "inline-block", marginLeft:"30px" }}>
                    <p>Data</p>
                    <h5>Data not Available</h5>
                  </div>
                  <div style={{ display: "inline-block", marginLeft:"30px" }}>
                    <p>Talktime</p>
                    <h5>Unlimited</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProductCard;
