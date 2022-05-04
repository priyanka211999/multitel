import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../utils/request";

const styles = {
  padding: "7px",
  borderRadius: "5px",
  fontSize: "12px",
  border: "none",
  color: "#fff",
  background: "var(--secondary)",
  width: "42%",
  margin: "0 auto",
};

function BroadbandCard({ cat, head1, head2, content, detail }) {
  let navigate = useNavigate();
  return (
    <Col md={6} lg={4}>
      <div className="broadband_card">
        <p className={detail ? "blue_big" : "blue_small"}>{cat?.title}</p>
        <p className="black-color brd_heading">{cat?.name}</p>
        <div className="broad3">
          <img src={
              cat?.image
                ? `${baseurl}/images/${cat?.image}`
                : "/assets/images/broad3.png"
            } />
        </div>
        <div className="black-color my-4" style={{ fontSize: "14px" }}>
          {cat?.sort_description || cat?.description}
        </div>
        <Button
          className="portfolio-item__link"
          style={styles}
          onClick={() => navigate(`/categories/internet-services/${cat?.slug}`)}
        >
          {detail ? "Start Now" : "Read More"}
        </Button>
      </div>
    </Col>
  );
}

export default BroadbandCard;