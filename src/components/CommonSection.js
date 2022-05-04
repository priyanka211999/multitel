import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function CommonSection() {
  return (
    <section id="tv_services" className="mb-4">
      <Container>
        <Row>
        <Col md={2}></Col>
        <Col md={8} style={{color: "white", textAlign:"center"}}>
          <b><h2>We Deliver The Best Networking Equipments</h2></b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae aliquid asperiores harum suscipit. Necessitatibus, est itaque</p>
          <Button variant="outline-secondary" style={{backgroundColor: "white", color: "#0076B5"}}>Browse Router</Button>
        </Col>
        </Row>
        <Col md={2}></Col>
      </Container>
    </section>
  )
}

export default CommonSection
