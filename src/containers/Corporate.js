import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Slider2 from "../components/slider2";
import Cards from "../components/cards";
import LandingPage from "../components/LandingPage";
import ServiceCard from "../components/atoms/ServiceCard";
import ServicesSection from "../components/ServicesSection";
import Slider from "../components/slider";

const servicesData = [
  {
    id: 1,
    title: "Fiber Infrastructure",
    src: "/assets/images/fiber.png",
  },
  {
    id: 2,
    title: "IP Transit Provider",
    src: "/assets/images/ip.png",
  },
  {
    id: 3,
    title: "Cloud Connection",
    src: "/assets/images/cloud.png",
  },
  {
    id: 4,
    title: "Ethernet Transport",
    src: "/assets/images/ethernet.png",
  },
];

function Corporate() {
  return (
    <LandingPage>
      <Slider2 />
      <Cards />
      <ServicesSection
        tagline="Private. Secure. Super Fast"
        heading="The Internet you Deserve"
      />

      {/* <section id="img_cards" className="mt-5 mb-5">
        <Container>
          <Row>
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                src={service.src}
                title={service.title}
              />
            ))}
          </Row>          
        </Container>
      </section> */}

      <section id="triimage" className="mt-5">
        <Row>
          <Col md={4} className="tri1">
            <div className="padding_div">
              <h2 className="white-text text-center">Fast Internet Speeds</h2>
            </div>
          </Col>
          <Col md={4} className="tri2">
            <div className="padding_div">
              <h2 className="white-text text-center">Channel Lineups</h2>
            </div>
          </Col>
          <Col md={4} className="tri3">
            <div className="padding_div">
              <h2 className="white-text text-center">
                Our Ultimate TV Experience
              </h2>
            </div>
          </Col>
        </Row>
      </section>

      <section id="internet_service" className="pos-relative">
        <Row>
          <Col md={4} lg={5}>
            <h2 className="mb-4 mt-5">
              Internet Service Designed with your Business in Mind.
            </h2>
          </Col>
          <Col md={8} lg={7} className="right_bg">
            <Container>
              <Row>
                <Col md={3}></Col>
                <Col md={8} lg={7}>
                  <ul className="icontext">
                    <li>
                      <h3 className="white-text">Heading goes here</h3>
                      <p className="white-text">
                        Consectetur adipisicing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </li>
                    <li>
                      <h3 className="white-text">Heading goes here</h3>
                      <p className="white-text">
                        Consectetur adipisicing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </li>
                    <li>
                      <h3 className="white-text">Heading goes here</h3>
                      <p className="white-text">
                        Consectetur adipisicing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </li>
                    <li>
                      <h3 className="white-text">Heading goes here</h3>
                      <p className="white-text">
                        Consectetur adipisicing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={1} lg={2}></Col>
              </Row>
            </Container>
          </Col>
          <img src="/assets/images/image_grp.png" className="image_grp" />
        </Row>
      </section>
    </LandingPage>
  );
}

export default Corporate;
