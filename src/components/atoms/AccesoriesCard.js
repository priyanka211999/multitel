import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import AccesoriesProductCard from "./AccesoriesProductCard";
import SearchFilter from "./SearchFilter";

function AccesoriesCard() {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <SearchFilter />
          </Col>
          <Col md={8}>
            <AccesoriesProductCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AccesoriesCard;
