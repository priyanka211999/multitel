import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FooterMiddle() {
  return (
    <section className="pos-relative">
      <div id="footer-top">
        <Container>
          <Row>
            <Col md={6} lg={3} className="col1">
              <img
                width={"50%"}
                src="/assets/images/logo.png"
                className="mb-4"
                alt="Multitel logo"
              />
              <p className="mb-3">
                Somos a Editora Acácias, desde novembro de 2015 actuamos
                orgulhosamente no mercado editorial Angolano. Estamos focados em
                publicar livros que libertam a imaginação.
              </p>
              <div className="social_links">
                <h3 className="footer-heading">Social Links</h3>
                <a href="#" className="mr-3">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="mr-3">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" className="mr-3">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="mr-3">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </Col>
            <Col md={6} lg={3} className="col23">
              <h3 className="footer-heading mb-4">Services</h3>
              <ul>
                <li>
                  <a href="#">Plans & Pricing</a>
                </li>
                <li>
                  <a href="#">InfiFlix & Media</a>
                </li>
                <li>
                  <a href="#">Virtual Interface</a>
                </li>
                <li>
                  <a href="#">Dedicated Internet</a>
                </li>
                <li>
                  <a href="#">Ethernet Transport</a>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={3} className="col23">
              <h3 className="footer-heading mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Who We Are</a>
                </li>
                <li>
                  <a href="#">Telecom</a>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={3} className="col4">
              <h3 className="footer-heading mb-3">Subscribe Our Newsletter</h3>
              <Form>
                <Form.Group controlId="subscribeEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </Form>
              <div className="address mt-3">
                <h3 className="footer-heading mb-2">Address</h3>
                <div className="d-flex">
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  <p>855 Road Broklyn Street, 600 , New York</p>
                </div>
                <div className="d-flex">
                  <i class="fa-solid fa-mobile-screen-button"></i>{" "}
                  <p>985 632 3363 1263</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <img className="dot_left" src="/assets/images/dots.png" />
      <img className="dot_right" src="/assets/images/dots.png" />
    </section>
  );
}

export default FooterMiddle;
