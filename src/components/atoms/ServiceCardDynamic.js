import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../utils/request";

function ServiceCardDynamic({ cat }) {
  const navigate = useNavigate()
  return (
    <Col md={6} lg={3} className="mb-4">
      <Card>
        <Card.Img variant="top" 
        src={
          cat?.image
            ? `${baseurl}/images/${cat?.image}`
            : "/assets/images/broad3.png"
        }
        // className={home ? "resize_img" : ""} 
        />
        <Card.Body className="text-center">
          <Card.Title>{cat?.name}</Card.Title>
          <Card.Text className="cardtext">
            {cat?.sort_description || (cat?.description?.split(" ").splice(0, 5).join(" ") + (cat?.description?.split(" ").length > 5 ? "..." : ""))}
          </Card.Text>
          <Button 
            className="primary_bg"
            onClick={() => navigate(`/categories/internet-services/${cat?.slug}`)}
          >See Plans</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ServiceCardDynamic;
