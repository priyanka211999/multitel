import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ServiceBanner from "../components/atoms/ServiceBanner";
import CommonSection from "../components/CommonSection";
import LandingPage from "../components/LandingPage";
import { getProductsByCategory } from "../services/category";
import { baseurl } from "../utils/request";

const cpes = [
  {
    id: 1,
    image: "/assets/images/cpe1.png",
    subtitle: "Some Heading Here",
    title: "CPE Name Goes Here",
  },
  {
    id: 2,
    image: "/assets/images/cpe2.png",
    subtitle: "Some Heading Here",
    title: "CPE Name Goes Here",
  },
  {
    id: 3,
    image: "/assets/images/cpe3.png",
    subtitle: "Some Heading Here",
    title: "CPE Name Goes Here",
  },
  {
    id: 4,
    image: "/assets/images/cpe4.png",
    subtitle: "Some Heading Here",
    title: "CPE Name Goes Here",
  },
];

function CPE() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getProductsByCategory({ slug: "cpe" });
      console.log(response?.data?.data?.products);
      setProductList(response?.data?.data?.products);
    })();
  }, []);

  return (
    <LandingPage>
      <ServiceBanner title="Customer Premises Equipment (CPE)" />
      <section id="deserve" className="mt-5">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <p className="mb-2">Unlimited Speed</p>
              <h2 className="mb-3">With Our Latest CPE's</h2>
            </Col>
          </Row>
          <Row>
            {productList.map((cpe) => (
              <Col key={cpe.id} md={6}>
                <div className="cpe_card text-center mb-5">
                  <img
                    className="cpe_img"
                    src={
                      cpe?.cover_img
                        ? `${baseurl}/images/${cpe?.cover_img}`
                        : "/assets/images/cpe1.png"
                    }
                  />
                  <p className="black-color mb-2">{cpe.description}</p>
                  <h4 className="deep_blue_heading">{cpe.name}</h4>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <CommonSection />
    </LandingPage>
  );
}

export default CPE;
