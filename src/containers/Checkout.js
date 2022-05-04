import React, { useState } from "react";
import LandingPage from "../components/LandingPage";
import LoginModal from "../components/LoginModal";
import { CITY_LIST, COUNTRY_LIST } from "../constants/authconstant";
import { getUserDetailsByToken } from "../services/authentication";
import { AUTH_TOKEN, getCookie } from "../utils/cookie";
import { useStateValue } from "../StateProvider";
import { imageUrl } from "../services/category";
import { formatAmount } from "../utils/AmountFormatter";
import { getBasketTotal } from "../Reducer";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [shipAddress, setShipAddress] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const isAuthenticated = getCookie(AUTH_TOKEN);
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const getDataByToken = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      // console.log(result);
      setUserEmail(result?.data?.data?.email);
    }
  };

  React.useEffect(() => {
    getDataByToken();
  }, []);

  const [data2, setData2] = useState({
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    address1: "",
    address2: "",
    zipcode: "",
    phone: "",
    email: "",
    ship_first_name: "",
    ship_last_name: "",
    ship_country: "",
    ship_city: "",
    ship_address1: "",
    ship_address2: "",
    ship_zipcode: "",
    ship_phone: "",
    ship_email: "",
    order_notes: "",
  });

  const {
    first_name,
    last_name,
    country,
    city,
    address1,
    address2,
    zipcode,
    phone,
    email,

    ship_first_name,
    ship_last_name,
    ship_country,
    ship_city,
    ship_address1,
    ship_address2,
    ship_zipcode,
    ship_phone,
    ship_email,
    order_notes,
  } = data2;

  const btnDisabled = shipAddress ? (
    !first_name || !last_name || !country || !city || !address1 || !zipcode || !phone || !email ||
    !ship_first_name || !ship_last_name || !ship_country || !ship_city || !ship_address1 || 
    !ship_zipcode || !ship_phone || !ship_email
  ) : (
    !first_name || !last_name || !country || !city || !address1 || !zipcode || !phone || !email
  )

  const handleChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  return (
    <LandingPage>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-sm-7">
            <div className="cart_top_row">
              <h2 className="body_heading mt-5">Checkout</h2>
            </div>
            <div className="form-one">
              <div className="w-100">
                <span className="s1 float-left mb-2">Contact Information</span>
                {!isAuthenticated && (
                  <span className="s2 float-right mb-2">
                    Already have an account?{" "}
                    <a onClick={() => setShowLoginModal(true)}>
                      <b>Log in</b>
                    </a>
                  </span>
                )}
              </div>
              <form className="checkout_form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    value={userEmail}
                    disabled
                  />
                </div>
              </form>
            </div>
            <div className="cart_top_row">
              <h2 className="body_heading mt-4">Billing Address</h2>
            </div>
            <div className="form-one">
              <form id="myForm" action="#">
                <div className="row">
                  <div className="col-12 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="first_name">
                        First Name<em className="red">*</em>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        value={first_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="last_name">
                        Last Name<em className="red">*</em>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        value={last_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">
                        Country<em className="red">*</em>
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        value={country}
                        name="country"
                        onChange={handleChange}
                      >
                        <option value="">Select Country</option>
                        {/* {console.log("A;;",allcategories)} */}
                        {COUNTRY_LIST.map((item,i) => (
                          <option key={i} value={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">
                        Address Line 1<em className="red">*</em>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Street name and house number"
                        value={address1}
                        name="address1"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">
                        Address Line 2 (Optional)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={address2}
                        name="address2"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">
                        City<em className="red">*</em>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={city}
                        name="city"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">
                        Zip code<em className="red">*</em>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={zipcode}
                        name="zipcode"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">
                        Phone<em className="red">*</em>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={phone}
                        name="phone"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">
                        Email address<em className="red">*</em>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check mt-1 mb-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <small
                        className="form-check-label text-muted"
                        htmlFor="exampleCheck1"
                      >
                        Create an account?
                      </small>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check mt-1 mb-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="changeShip"
                        checked={shipAddress}
                        onChange={(e) => setShipAddress(e.target.checked)}
                      />
                      <small
                        className="form-check-label text-muted text-uppercase"
                        htmlFor="exampleCheck1"
                      >
                        Ship to a Different Address?
                      </small>
                    </div>
                  </div>
                  {shipAddress && (
                    <div id="changeShipInputs">
                      <div className="row ml-1 mr-1">
                        <div className="col-12 col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="first_name">
                              First Name<em className="red">*</em>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="ship_first_name"
                              value={ship_first_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="last_name">
                              Last Name<em className="red">*</em>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="ship_last_name"
                              value={ship_last_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              Country<em className="red">*</em>
                            </label>
                            <select
                              className="form-control"
                              value={ship_country}
                              name="ship_country"
                              onChange={handleChange}
                            >
                              <option value="">Select Country</option>
                              {/* {console.log("A;;",allcategories)} */}
                              {COUNTRY_LIST.map((item,i) => (
                                <option key={i} value={item}>{item}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              Address Line 1<em className="red">*</em>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Street name and house number"
                              value={ship_address1}
                              name="ship_address1"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              Address Line 2 (Optional)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                              value={ship_address2}
                              name="ship_address2"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              City<em className="red">*</em>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={ship_city}
                              name="ship_city"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              Zip code<em className="red">*</em>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              value={ship_zipcode}
                              name="ship_zipcode"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              Phone<em className="red">*</em>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={ship_phone}
                              name="ship_phone"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">
                              Email address<em className="red">*</em>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              value={ship_email}
                              name="ship_email"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-12">
                    <hr />
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">
                        Order notes (optional)
                      </label>
                      <textarea
                        className="form-control"                        
                        rows="3"
                        placeholder="Notes about your order (eg special delivery information)."
                        value={order_notes}
                        name="order_notes"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
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
                {/* <div className="subtotal row">
                  <div className="col-md-6">
                    <h2>Subtotal</h2>
                  </div>
                  <div className="col-md-6 text-right">
                    <h3>{formatAmount(getBasketTotal(basket))}</h3>
                  </div>
                  <div className="col-md-6">
                    <h2>Shipping</h2>
                  </div>
                  <div className="col-md-6 text-right">
                    <a
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <b>Calculated at next step</b>
                    </a>
                  </div>
                  <div className="collapse w-100" id="collapseExample">
                    <form className="calculated">
                      <div className="form-group col-12">
                        <label htmlFor="inputState">
                          Select a Country/Region
                        </label>
                        <select id="inputState" className="form-control">
                          <option selected>Country</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="form-group col-12">
                        <label htmlFor="inputState">Select a State</label>
                        <select id="inputState" className="form-control">
                          <option selected>State</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="form-group col-12">
                        <label htmlFor="inputState">Select a State</label>
                        <input
                          type="text"
                          name=""
                          className="form-control"
                          placeholder="Zip/Postal Code"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary contact_btn cal_rate_btn"
                        href="#"
                      >
                        Calculate Rates
                      </button>
                    </form>
                  </div>
                  <div className="shipping">
                    <h1>
                      There are 4 shipping rates available for 91326,
                      California, United States, starting at 10.45 Kz.
                    </h1>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Small Packet USA Air at 10.45 Kz
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        Tracked Packet USA at 13.75 Kz
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios3"
                        value="option3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios3"
                      >
                        Expedited Parcel USA at 19.22 Kz
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios4"
                        value="option4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios4"
                      >
                        Xpresspost USA at 31.66 Kz
                      </label>
                    </div>
                  </div>
                </div> */}
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
                </div>
              </div>
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
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      I have read and agree to the website{" "}
                      <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="order-box-btn"
                disabled={btnDisabled}
                onClick={() => navigate("/payment-methods", {state: {data: data2, shipAddress}})}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
      {showLoginModal && (
        <LoginModal
          show={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      )}
    </LandingPage>
  );
}
