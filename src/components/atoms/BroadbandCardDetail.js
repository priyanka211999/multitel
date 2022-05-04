import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { formatAmount } from "../../utils/AmountFormatter";
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

function BroadbandCardDetail({ product }) {
  let navigate = useNavigate();
  return (
    <Col md={6} lg={4}>
      <div className="broadband_card">
        <p className="blue_big">{formatAmount(product?.price)} / mo</p>
        <p className="black-color brd_heading">{product?.name}</p>
        <div className="broad3">
            <img src={
                product?.cover_img
                  ? `${baseurl}/images/${product?.cover_img}`
                  : "/assets/images/broad3.png"
              } />
          </div>
          <div className="black-color my-4" style={{ fontSize: "14px" }}>
            {product?.description}
          </div>
        <Button
          className="portfolio-item__link"
          style={styles}
          onClick={() => navigate("#")}
        >
          Start Now
        </Button>
      </div>
    </Col>
  );
}

export default BroadbandCardDetail;