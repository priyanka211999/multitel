import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import OtherProduct from '../components/atoms/OtherProduct';
import OtherServices from '../components/OtherServices';
import CommonSection from '../components/CommonSection';
import { getProductsByCategory } from '../services/category';
import ProductCard from '../components/atoms/ProductCard';

export const opFooter = React.createContext()

function OtherProducts() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getProductsByCategory({
        slug: "other-productsservices-1",
      });
      console.log(response?.data?.data?.products);
      setProductList(response?.data?.data?.products);
    })();
  }, []);

  return (
      <LandingPage woproducts>
        <ServiceBanner title="Other Products/Services (Parc.)" />

        <section id="deserve">
          <Container>
            <Row>
              <Col md={12} className="text-center">
                <p className="mb-2 mt-4">Have a look on our</p>
                <h2 className="mb-3">Other Products</h2>
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
        <section id="deserve">
          <Container>
            <Row>
              <Col md={12} className="text-center">
                <h2 className="mb-3">Other Services</h2>
                <div className="broadband_services my-5">
                <OtherServices />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LandingPage>    
  )
}

export default OtherProducts