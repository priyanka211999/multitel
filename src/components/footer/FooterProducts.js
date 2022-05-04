import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {getLatestProducts } from "../../services/category";
import { baseurl } from "../../utils/request";

const styles = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: "7px",
  borderRadius: "5px",
  display: "inline-block",
  fontSize: "12px",
  border: "none",
  color: "#fff",
  background: "var(--secondary)",
};

function FooterProducts() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);

  const handleGetallProducts = async () => {
    try {
      const resp = await getLatestProducts();
      console.log(resp);
      setAllProducts(resp.data);
    } catch (error) {
      alert("something Went Wrong", "Error");
    }
  };

  useEffect(() => {
    handleGetallProducts();
    console.log("allProducts", allProducts);
  }, []);

  const displayProducts = allProducts.slice(0,8).map((product) => (
    <div key={product?.id} className="col-md-6 col-lg-3 mb-4">
      <div className="single_product">
        <div className="portfolio-item portfolio-effect__item portfolio-item--eff1">
          <img
            className="portfolio-item__image img-fluid rounded"
            src={
              product?.cover_img
                ? `${baseurl}/images/${product?.cover_img}`
                : "/assets/images/product.png"
            }
          />
          <div className="portfolio-item__info">
            <div className="portfolio-item__links">
              <div className="portfolio-item__link-block">
                <Button className="portfolio-item__link" style={styles}
                onClick={() =>
                  navigate(`/products/${product?.slug}`, {state: {product}})
                }>
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="prod_name text-center">
          <a
            onClick={() =>
              navigate(`/products/${product.slug}`, { state: { product } })
            }
            style={{cursor:"pointer"}}
          >
            {product?.name}
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="products" className="py-5 my-0">
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        <Row>{allProducts.length ? displayProducts : "Loading..."}</Row>
      </Container>
    </section>
  );
}

export default FooterProducts;
