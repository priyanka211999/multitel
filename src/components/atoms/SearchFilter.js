import React from "react";
import { Button, Col, Container, Row, Card, InputGroup } from "react-bootstrap";

const Brands = () => (
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      Brand Name Here
    </label>
  </div>
);

const getDetails = () => {
    let content = [];
    for (let i = 0; i < 15; i++) {
      content.push(<Brands key={i} />);
    }
    return content;
  };



function SearchFilter() {
  return (
    <Container>
      <Row>
        <Col md={12} style={{ marginTop: "30px" }}>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search here"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary my-sm-0" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <Card style={{ marginTop: "30px" }}>
            <Card.Header style={{ backgroundColor: "#0076B5", color: "white" }}>
              SHOP BY
            </Card.Header>
            <Card.Body>
                <h6>FILTER BY PRICE</h6>
                
              <h6 className="mt-3">REFINE YOUR SEARCH</h6>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  In Promotion
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  New
                </label>
              </div>
              <h6 className="mt-3">BRANDS</h6>
              <p>{getDetails()}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchFilter;
