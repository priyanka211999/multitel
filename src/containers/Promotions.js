import React, { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import PromotionCard from "../components/atoms/PromotionCard";
import { useNavigate } from "react-router-dom";
import { getAllPromotions } from "../services/promotions";

function Promotions() {
  const navigate = useNavigate();
  const [initial, setInitial] = useState("Loading...");
  const [promotionList, setPromotionList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllPromotions();
      console.log(response);
      setPromotionList(response?.data);
      !response?.data?.length && setInitial("No promotions found");
    })();
  }, []);

  return (
    <LandingPage>
      <ServiceBanner title="Promotions" />
      <section id="deserve">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-2 mt-4">Just Check Out</p>
              <h2 className="mb-3">Our Promotions</h2>
              {/* <div className="broadband_services my-5">
               <ProductCard /> 
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        {promotionList.length ? (
          promotionList.map((promo) => (
            <PromotionCard promo={promo} key={promo.id} />
          ))
        ) : (
          <p>{initial}</p>
        )}
        {/* <Row style={{justifyContent:"center"}}>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Card style={{ flexDirection: "row", justifyContent:"center" }}>
              <Card.Img variant="top" src="/assets/images/fiber.png" style={{width:"35%"}} />
              <Card.Body>
                <Card.Title>Unlimited Business</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row style={{flexDirection:"row"}}>
                <Col><Button variant="outline-primary" style={{border:"none"}}><i className="fa-solid fa-wifi fa-lg"></i> Internet</Button></Col>
                <Col><Button variant="outline-primary" style={{border:"none"}}><i class="fa-solid fa-tower-broadcast fa-lg"></i> Unlimited Data</Button></Col>
                </Row>
                <hr />
                <Button variant="outline-primary" style={{border:"none"}}>View Full Details  <i class="fa-solid fa-arrow-right fa-lg"></i></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{justifyContent:"center"}}>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Card style={{ flexDirection: "row", justifyContent:"center" }}>
              <Card.Img variant="top" src="/assets/images/cloud.png" style={{width:"35%"}} />
              <Card.Body>
                <Card.Title>Family Media+Internet</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Row style={{flexDirection:"row"}}>
                <Col><Button variant="outline-primary" style={{border:"none"}}><i className="fa-solid fa-wifi fa-lg"></i> Internet</Button></Col>
                <Col><Button variant="outline-primary" style={{border:"none"}}><i class="fa-solid fa-tower-broadcast fa-lg"></i> Unlimited Data</Button></Col>
                </Row>
                <hr />
                <Button variant="outline-primary" style={{border:"none"}}>View Full Details  <i class="fa-solid fa-arrow-right fa-lg"></i></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
      <section id="promotions" className="mb-4">
        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={8} style={{ color: "white", textAlign: "center" }}>
              <h3>Promotions</h3>
              <h1>Untimited Broadband Deals</h1>
              <h5>
                FROM<span> $20</span> PER MONTH
              </h5>
            </Col>
          </Row>
          <Col md={2}></Col>
        </Container>
      </section>
    </LandingPage>
  );
}

export default Promotions;
