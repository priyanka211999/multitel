import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BroadbandCard from "../components/atoms/BroadbandCard";
import ServiceBanner from "../components/atoms/ServiceBanner";
import ServiceCardDynamic from "../components/atoms/ServiceCardDynamic";
import LandingPage from "../components/LandingPage";
import Services from "../components/Services";
import { getAllServices } from "../services/intservices";
import { tvIcon } from "../svg/tv";

function InternetServices({name}) {
  const navigate = useNavigate();
  const [initial, setInitial] = useState("Loading...");
  const [categoryList, setCategoryList] = useState([]);
  console.log(name)

  useEffect(() => {
    (async () => {
      const response = await getAllServices();
      console.log(response);
      setCategoryList(response?.data);
      !response?.data?.length && setInitial("No service categories found");
    })();
  }, []);

  return (
    <LandingPage>
      <ServiceBanner title={name} />
      <Services />

      <section id="deserve">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-2">Private. Secure. Super Fast</p>
              <h2 className="mb-3">Our Services</h2>
              <div className="broadband_services my-5">
                <Row>
                {categoryList.length ? (
                    categoryList.map((cat) => (
                      // <BroadbandCard cat={cat} key={cat?.id} />
                      <ServiceCardDynamic cat={cat} key={cat?.id} />
                    ))
                  ) : (
                    <p>{initial}</p>
                  )}
                  {/* <Col md={6} lg={4}>
                    <BroadbandCard
                      imgdiv={<div className="round_icon">{tvIcon}</div>}
                      head1="Single Deal"
                      head2="Broadband Only"
                      content={
                          <p className="black-color my-4" style={{ fontSize: "14px" }}>
                            Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                          </p>
                      }
                    />
                  </Col> */}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </LandingPage>
  );
}

export default InternetServices;