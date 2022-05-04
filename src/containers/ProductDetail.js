import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ServiceBanner from "../components/atoms/ServiceBanner";
import CommonSection from "../components/CommonSection";
import LandingPage from "../components/LandingPage";
import { formatAmount } from "../utils/AmountFormatter";
import { baseurl } from "../utils/request";
import { getProductBySlug } from "../services/category";
import {useStateValue} from "../StateProvider"



const AdditionalInfo = () => (
  <p className="desc_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit
    interdum felis sit amet vehicula. Vestibulum sagittis luctus elit, non
    lobortis neque fringilla non. Duis tempus sollicitudin nunc id placerat.
    Vestibulum non nibh a lacus viverra congue nec ut velit. Sed id dui nisi.
    Proin at suscipit velit.
  </p>
);

const Reviews = () => (
  <>
    <h5>Reviews</h5>
    <p>There are no reviews yet.</p>

    <p>
      Your email address will not be published. Required fields are marked *
    </p>
    <h5>Your Rating</h5>
    <div className="rating">
      <span>
        {" "}
        <i className="fa fa-star-o"></i>{" "}
      </span>
      <span>
        {" "}
        <i className="fa fa-star-o"></i>{" "}
      </span>
      <span>
        {" "}
        <i className="fa fa-star-o"></i>{" "}
      </span>
      <span>
        {" "}
        <i className="fa fa-star-o"></i>{" "}
      </span>
      <span>
        {" "}
        <i className="fa fa-star-o"></i>{" "}
      </span>
    </div>
    <form className="review_form mt-3">
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label>Your review *</label>
            <textarea
              className="form-control"
              name="review_message"
              id="review_message"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              className="form-control"
              id="reviewer_name"
              name="reviewer_name"
              aria-describedby=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              className="form-control"
              id="reviewer_email"
              name="reviewer_email"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="reviewer_name_save"
                id="gridCheck"
              />
              <label className="form-check-label">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <button type="submit" className="btn btn-primary w-100">
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  </>
);

function ProductDetail() {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
      dispatch({
          type: "ADD_TO_BASKET",
          item: {
              id: product.id,
              image: product?.cover_img,
              name:product.name,
              price: product.price,
              quantity:qty,
              // rating: rating,
              // subtotal:subtotal
          },
      });
  };
  const navigate = useNavigate()
  // const { product } = state;
  // console.log(product);

  const [product, setProduct] = useState({});
  const [step, setStep] = useState("additional");
  const [qty, setQty] = useState(1);
  const params = useParams();
  console.log(params?.name);

  useEffect(() => {
    (async () => {
      const response = await getProductBySlug({ slug: params?.name });
      console.log(response);
      setProduct(response?.data?.data);
      // !response?.data?.length && setInitial("No promotions found");
    })();
  }, [params?.name]);

  const TabList = Object.freeze([
    { label: "Additional Information", state: "additional" },
    { label: "Reviews(0)", state: "reviews" },
  ]);

  const stateCompMapping = {
    additional: AdditionalInfo,
    reviews: Reviews,
  };

  const Component = stateCompMapping[step];

  return (
    <LandingPage>
      <ServiceBanner title={product?.name} />
      <section className="container mt-5 pt-4 mb-0 pb-4">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="book-full-img">
              <img
                src={
                  product?.cover_img
                    ? `${baseurl}/images/${product?.cover_img}`
                    : "/assets/images/product.png"
                }
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="book-details">
              <h1>{product?.name}</h1>
              {/* <p>{product?.specification}</p> */}
              <div className="price">{formatAmount(product?.price)}</div>
              {/* <div className="rating">
                <span> <i className="fa fa-star-o"></i> </span>
                <span> <i className="fa fa-star-o"></i> </span>
                <span> <i className="fa fa-star-o"></i> </span>
                <span> <i className="fa fa-star-o"></i> </span>
                <span> <i className="fa fa-star-o"></i> </span>
                <span className="review">Be the first to review this product</span>
              </div> */}
              <Col
                xs={12}
                md={8}
                style={{
                  color: "#436185",
                  textAlign: "left",
                  paddingLeft: "initial",
                }}
              >
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>&nbsp;
                <span className="review">
                  &nbsp;Be the first to review this product
                </span>
              </Col>
            </div>

            <div className="book-qty row">
              <div className="col-2 qty">Quantity</div>
              <div className="col-2">
                <div className="qty_counter d-flex">
                  <input type="button" value="-" className="minus" 
                    onClick={
                     () => {
                       qty > 1 && setQty(qty - 1)
                     }
                    }
                  />
                  <input
                    type="text"
                    name="qty"
                    value={qty}
                    className="text-center input-qty w-100"
                  />
                  <input type="button" value="+" className="plus"
                    onClick={() => setQty(qty + 1)}
                  />
                </div>
              </div>
              <div className="col-3 addcart">
                <a
                  className="btn btn-primary contact_btn addcart_btn w-100"
                  href="#"
                  onClick={() => {
                    addToBasket()
                    alert("Item Added to cart.")
                    navigate("/cart")
                  }}
                >
                  Add to Cart
                </a>
              </div>
              <div className="col-4 add_wishlist">
                <button
                  className="btn btn-primary"
                  style={{ border: "1px solid var(--secondary)" }}
                >
                  <img src="/assets/images/green-heart-icon.png" />
                  <span>Add to wishlist</span>
                </button>
              </div>
            </div>

            <div className="product_desc mt-3">
              <h2 className="book_social">Description</h2>
              <p>{product?.description}</p>
            </div>

            <div className="author-social pt-2 pb-2">
              <h2 className="book_social">Share on social media</h2>
              <div className="author_links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <section className="container-fluid book_tabs">
              <div className="">
                <div className="row">
                  <div className="col-md-12">
                    <ul
                      className="nav nav-pills mb-3 pb-2"
                      id="pills-tab"
                      role="tablist"
                    >
                      {TabList.map(({ label, state }) => (
                        <li className="nav-item">
                          <a
                            className={`nav-link ${
                              step === state ? "active" : ""
                            }`}
                            id={`pills-${state}-tab`}
                            data-toggle="pill"
                            // href={`#pills-${state}`}
                            role="tab"
                            aria-controls={`pills-${state}`}
                            aria-selected="true"
                            onClick={() => setStep(state)}
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="row">
                      <div className="col-12">
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id={`pills-${step}`}
                            role="tabpanel"
                            aria-labelledby={`pills-${step}-tab`}
                          >
                            <Component />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <CommonSection />
    </LandingPage>
  );
}

export default ProductDetail;
