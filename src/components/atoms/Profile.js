import React from "react";
import { Button, Col, Container, Row, Card, Nav, CardGroup } from "react-bootstrap";
import ProfileLandingPage from "./ProfileLandingPage";

function Profile() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="mt-5">
            <Card.Header style={{display: "flex",flexDirection:'row',justifyContent: 'space-between'}}>
              <div className='col-md-3'>
                <img
                  src="/assets/images/cloud.png"
                  alt=""
                  style={{ height: "30%", width: "15%", borderRadius: "50%" }}
                />{" "}
                <p style={{ display: "inline-block" }}>Alan Plaska</p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#0076B5",
                  color: "white",
                }}
              >
                <Nav>
                  <Nav.Item>
                    <Nav.Link href="/editprofile" style={{ color: "white" }}>
                    Edit Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/myproducts" style={{ color: "white" }}>
                      My Products
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/helpdesk" style={{ color: "white" }}>
                      Help Desk
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/internetqualitygraph" style={{ color: "white" }}>
                      Internet Quality Graph
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/invoice" style={{ color: "white" }}>
                      Invoices
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
