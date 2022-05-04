import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../utils/request";

function PromotionCard({ promo, detail }) {
  let navigate = useNavigate();
  return (
    <Row style={{ justifyContent: "center" }}>
      <Col lg={12} md={12} sm={12} xs={12}>
        <Card
          className="my-5"
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <Card.Img
            variant="top"
            src={
              promo?.image
                ? `${baseurl}/images/${promo?.image}`
                : "/assets/images/fiber.png"
            }
            style={{ width: "35%" }}
          />
          <Card.Body>
            <Card.Title>{promo?.name}</Card.Title>
            {!detail ? (
              <Card.Text>
                {promo?.description?.split(" ").splice(0, 15).join(" ") +
                  (promo?.description?.split(" ").length > 15 ? "..." : "")}
              </Card.Text>
            ) : (
              <Card.Text>{promo?.description}</Card.Text>
            )}

            <Row style={{ flexDirection: "row" }}>
              {promo?.Promotion_tags?.map((tag) => (
                <Col>
                <Button variant="outline-primary" style={{ border: "none" }}>
                  <i className="fa-solid fa-wifi fa-lg"></i> {tag?.name}
                </Button>
              </Col>
              ) )}
            </Row>
            {!detail && (
              <>
                <hr />
                <Button
                  variant="outline-primary"
                  style={{ border: "none" }}
                  onClick={() => navigate(`/categories/promotions/${promo?.slug}`)}
                >
                  View Full Details{" "}
                  <i class="fa-solid fa-arrow-right fa-lg"></i>
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default PromotionCard;
