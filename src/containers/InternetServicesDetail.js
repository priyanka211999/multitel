import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BroadbandCard from "../components/atoms/BroadbandCard";
import BroadbandCardDetail from "../components/atoms/BroadbandCardDetail";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { getProductsByService } from "../services/intservices";
import { baseurl } from "../utils/request";

function InternetServicesDetail() {
  const navigate = useNavigate();
  const [initial, setInitial] = useState("Loading...");
  const [productsList, setProductsList] = useState([]);
  const [catDetails, setCatDetails] = useState({})

  const params = useParams()
  console.log(params?.tag)

  useEffect(() => {
    (async () => {
      const response = await getProductsByService({slug: params?.tag})
      console.log(response);
      const products = response?.data?.data?.service_products;
      response?.data?.data ? setProductsList(products) : setInitial("No service products found");
      setCatDetails(response?.data?.data)
    })();
  }, []);

  return (
    <LandingPage>
      <ServiceBanner title={catDetails?.name} backlink="/categories/internet-services" />
      <section className="blue_hding_subhding mt-5">
        <Row>
            <Col md={12} className="text-center">
              <p className="mb-2">Check Out The Services We Provide</p>
              <h2 className="mb-3">Our Services</h2>
            </Col>
          </Row>
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Card
                className="my-4"
                style={{ flexDirection: "row", justifyContent: "center" }}
              >
                <Card.Img
                  variant="top"
                  src={
                    catDetails?.image
                      ? `${baseurl}/images/${catDetails?.image}`
                      : "/assets/images/fiber.png"
                  }
                  style={{ width: "35%" }}
                />
                <Card.Body>
                  <Card.Title>{catDetails?.name}</Card.Title>
                  
                    <Card.Text>{catDetails?.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="deserve" className="mt-5">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-2">The Best in The Segment</p>
              <h2 className="mb-3">Latest Plans For The Service</h2>
              <div className="broadband_services my-5">
                <Row>
                {productsList.length ? (
                  productsList.map((product) => (
                    <BroadbandCardDetail product={product} key={product.id} />
                  ))
                ) : (
                  <p>{initial}</p>
                )}
                  {/* <Col md={6} lg={4}>
                    <BroadbandCard
                      detail
                      imgdiv={<div className="round_icon">{tvIcon}</div>}
                      head1="$30.00/mo"
                      head2="Broadband Only"
                      content={
                        <>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Full House TV</span><br />
                              200 Amazing Channels Full HD
                            </p>
                          </div>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Fiber Broadband</span><br />
                              260 mb/ps Download Speed
                            </p>
                          </div>
                        </>
                      }
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <BroadbandCard
                      detail
                      imgdiv={
                        <div className="broad2">
                          <img src="/assets/images/broad2.png" />
                        </div>
                      }
                      head1="$60.00/mo"
                      head2="Broadband & Phones"
                      content={
                        <>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Full House TV</span><br />
                              500 Amazing Channels Full HD
                            </p>
                          </div>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Fiber Broadband</span><br />
                              420 mb/ps Download Speed
                            </p>
                          </div>
                        </>
                      }
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <BroadbandCard
                      detail
                      imgdiv={
                        <div className="broad3">
                          <img src="/assets/images/broad3.png" />
                        </div>
                      }
                      head1="$100.00/mo"
                      head2="TV , Broadband & Phones"
                      content={
                        <>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Full House TV</span><br />
                              1000 Amazing Channels Full HD
                            </p>
                          </div>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Fiber Broadband</span><br />
                              1000 mb/ps Download Speed
                            </p>
                          </div>
                        </>
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

export default InternetServicesDetail;
