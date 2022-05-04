import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function ServiceCard({ src, title, home }) {
  return (
    <Col md={6} lg={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src={src} className={home ? "resize_img" : ""} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text className={home ? "" : "cardtext"}>
            Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Card.Text>
          {!home && <Button className="primary_bg">See Plans</Button>}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ServiceCard;
