import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";

function HelpDeskCard() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card style={{ width: "100%", flexDirection:"row" }}>
            <Card.Body>
              <Card.Title style={{color:"#0076B5"}}>Get In Touch With Us</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build on the card title and make .
              </Card.Text>
              <h6>CALL US FOR ANY KIND OF HELP AND SUPPORT</h6>
              <h6 style={{color:"#0076B5", display:"inline-block", marginRight:"30px"}}>9865656565</h6><Button variant="primary"><i class="fa-solid fa-phone mr-2"></i>Call Helpdesk</Button>
            </Card.Body>
            <Card.Img variant="top" style={{width:"30%"}} src="/assets/images/phone.png" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HelpDeskCard;
