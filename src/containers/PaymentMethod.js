import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { getBasketTotal } from "../Reducer";
import { imageUrl } from "../services/category";
import { useStateValue } from "../StateProvider";
import { formatAmount } from "../utils/AmountFormatter";

export default function PaymentMethod() {
  const [showCards, setShowCards] = useState(false);
  const [showOnline, setShowOnline] = useState(false);
  const { state } = useLocation();
  console.log(state);
  const [userDet, setUserDet] = useState(state?.data || {});
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/marketplace");
    }
  }, []);

  return (
    <LandingPage>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-sm-7">
            <div className="cart_top_row">
              <h2 className="body_heading mt-5">Checkout</h2>
            </div>
            <div className="row">
              <div className="col-md-12 table-responsive">
                <table className="book_info_tbl w-100" border="0">
                  <tr className="header_row">
                    <td className="td1">Contact</td>
                    <td className="td2">
                      {state?.shipAddress
                        ? userDet?.ship_email
                        : userDet?.email}
                    </td>
                    <td className="td3">
                      <a href="#">Change</a>
                    </td>
                  </tr>
                  <tr className="header_row">
                    <td className="td1">Ship to</td>
                    <td className="td2">
                      {state?.shipAddress
                        ? `${userDet?.ship_address1}, ${
                            userDet?.ship_address2
                              ? userDet?.ship_address2 + ", "
                              : ""
                          }${userDet?.ship_city}, ${userDet?.ship_country} - ${
                            userDet?.ship_zipcode
                          }`
                        : `${userDet?.address1}, ${
                          userDet?.address2
                            ? userDet?.address2 + ", "
                            : ""
                        }${userDet?.city}, ${userDet?.country} - ${
                          userDet?.zipcode
                        }`
                        }
                    </td>
                    <td className="td3">
                      <a href="#">Change</a>
                    </td>
                  </tr>
                  <tr className="header_row">
                    <td className="td1">Ship Method</td>
                    <td className="td2">Small Packet USA Air at 10.45 Kz</td>
                    <td className="td3">
                      <a href="#">Change</a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="cart_top_row">
              <h2 className="body_heading mt-4">Payment Method</h2>
            </div>
            <div className="payment-box">
              <div className="p11">
                <label>
                  <input
                    type="radio"
                    name="colorRadio"
                    value="C"
                    onClick={() => {
                      setShowCards(true);
                      setShowOnline(false);
                    }}
                  />{" "}
                  Credit & Debit cards
                  <br />
                  <em>Transaction fee may apply</em>
                </label>
                <img
                  src="/assets/images/payment-img.png"
                  alt="payment-img"
                  className="img-fluid"
                />
              </div>
              {showCards && (
                <div className="p3">
                  <div className="C selectt">
                    <div className="form-one row">
                      <div className="col-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="card_name">Card Number</label>
                              <input
                                type="text"
                                className="form-control"
                                id=""
                                aria-describedby=""
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="card_on_name">Name on Card</label>
                              <input
                                type="text"
                                className="form-control"
                                id=""
                                aria-describedby=""
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="row pr-3 pl-3">
                            <div className="col-12 col-md-6 col-md-6">
                              <div className="form-group">
                                <label htmlFor="expiration_date">
                                  Expiration date (MM/YY)
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id=""
                                  aria-describedby=""
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-md-6">
                              <div className="form-group">
                                <label htmlFor="security_code">
                                  Security code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id=""
                                  aria-describedby=""
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="exampleCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleCheck1"
                                >
                                  Save this credit card for later use
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="clear">&nbsp;</div>
              <div className="p11">
                <label>
                  <input
                    type="radio"
                    name="colorRadio"
                    value="Cplus"
                    onClick={() => {
                      setShowCards(false);
                      setShowOnline(true);
                    }}
                  />{" "}
                  Online Net Banking
                  <br />
                  <em>Free of charge</em>
                </label>
              </div>
              {showOnline && (
                <div className="p3">
                  <div className="Cplus selectt">
                    <div className="form-one row">
                      <div className="col-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="formGroupExampleInput">
                            Select your Bank
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Select Bank</option>
                            <option>SBI</option>
                            <option>ICICI</option>
                            <option>IDBF</option>
                            <option>HDF</option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary mb-2 b1"
                        >
                          Proceed to Payment
                        </button>
                        <p className="note-p">
                          Note: After clicking on the button, you will be
                          directed to a secure gateway for payment. After
                          completing the payment process, you will be redirected
                          back to the website to view details of your order.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-md-5 col-sm-5">
            <div className="cart_top_row">
              <h2 className="body_heading mt-5">Your Order</h2>
            </div>
            {/* <div className="radio-box">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Home Delivery
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Pick-up from Acacias Store
                </label>
              </div>
            </div> */}
            <div className="order-box">
              <div className="row">
                {/* <div className="col-md-12 table-responsive">
                  <table className="book_info_tbl w-100" border="0">
                    <tr className="header_row">
                      <td>Product</td>
                      <td className="text-center">Subtotal</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="cart_book_img"
                            src="assets/images/cartbook1.png"
                          />
                          <span className="cart_book_name">
                            Prison Reeducation Methods
                          </span>
                        </div>
                      </td>
                      <td className="cart_price text-center">1800.00 Kz</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="cart_book_img"
                            src="assets/images/cartbook2.png"
                          />
                          <span className="cart_book_name">
                            3rd National Conference on Angolan Literature
                          </span>
                        </div>
                      </td>
                      <td className="cart_price text-center">3,000.00 Kz</td>
                    </tr>
                  </table>
                </div> */}
                <div className="col-md-12 table-responsive">
                  <table className="book_info_tbl w-100" border="0">
                    <tr className="header_row">
                      <td>Product</td>
                      <td className="text-center">Subtotal</td>
                    </tr>
                    {basket.map((item) => (
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              className="cart_book_img"
                              src={imageUrl(item.image)}
                            />
                            <span className="cart_book_name">{item.name}</span>
                          </div>
                        </td>
                        <td className="cart_price text-center">
                          {formatAmount(item.price)}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <hr />
                  <form>
                    <p>If you have a discount coupon, please enter it below.</p>
                    <div className="form-row align-items-center">
                      <div className="col-auto">
                        <label className="sr-only" htmlFor="inlineFormInput">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="inlineFormInput"
                          placeholder="Coupon code"
                        />
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
                          Apply coupon
                        </button>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <div className="subtotal row">
                    <div className="col-md-6">
                      <h2 className="mt-0">Subtotal</h2>
                    </div>
                    <div className="col-md-6 text-right">
                      <h3 className="mt-0">{formatAmount(getBasketTotal(basket))}</h3>
                    </div>
                    {/* <div className="col-md-6">
                      <h2 className="mt-3 mb-3">Shipping</h2>
                    </div>
                    <div className="col-md-6 text-right">
                      <h3 className="mt-3 mb-3">$ 10.45</h3>
                    </div> */}
                  </div>
                </div>
              </div>
              <hr />
              <div className="subtotal row">
                <div className="col-md-6">
                  <h4>Total</h4>
                </div>
                <div className="col-md-6 text-right">
                  <h6>
                    <strong>{formatAmount(getBasketTotal(basket))}</strong>
                  </h6>
                </div>
              </div>
              <div className="agree">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      I have read and agree to the website{" "}
                      <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="order-box-btn">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </LandingPage>
  );
}
