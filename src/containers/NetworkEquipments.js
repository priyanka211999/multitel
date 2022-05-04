import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/atoms/ProductCard";
import ServiceBanner from "../components/atoms/ServiceBanner";
import CommonSection from "../components/CommonSection";
import LandingPage from "../components/LandingPage";
import { getProductsByCategory } from "../services/category";

function NetworkEquipments() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getProductsByCategory({
        slug: "network-equipments",
      });
      console.log(response?.data?.data?.products);
      setProductList(response?.data?.data?.products);
    })();
  }, []);

  return (
    <LandingPage>
      <ServiceBanner title="Network Equipments" />

      <section id="deserve">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-2 mt-4">Have a look on</p>
              <h2 className="mb-3">Our Network Equipments</h2>
              <div className="broadband_services my-5">
                <Row>
                  {productList.map((product) => (
                    <ProductCard product={product} key={product?.id} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <CommonSection />
    </LandingPage>
  );
}

export default NetworkEquipments;
