import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { useStateValue } from "../StateProvider";
import { imageUrl } from "../services/category";
import { formatAmount } from "../utils/AmountFormatter";
import { getBasketTotal } from "../Reducer";

export default function Cart() {
  const [prodId, setProdId] = useState("");
  const [total, setTotal] = useState("");
  const deleteRecord = (item) => {
    setProdId(item.id);
    removeFromBasket();
  };

  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: prodId,
    });
  };

  React.useEffect(() => {
    // console.log("prodId",prodId)
   
      console.log(basket, "basket");
    
  }, [basket]);

  const navigate = useNavigate();
  return (
    <LandingPage>
      <section className="container cart_details">
        <div className="row">
          <div className="col-md-8">
            <div className="row cart_top_row">
              <div className="col-8">
                <h2 className="body_heading">Cart</h2>
              </div>
              <div className="col-4 text-right">
                <a onClick={() => navigate("/marketplace")}>
                  <i className="fas fa-arrow-left"></i>&nbsp;Continue Shopping
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 table-responsive">
                <table className="book_info_tbl w-100">
                  <tr className="header_row">
                    <td>Product</td>
                    <td className="text-center price_col">Price</td>
                    <td className="text-center qty_col">Quantity</td>
                    <td className="text-center">Subtotal</td>
                    <td></td>
                  </tr>
                  {basket.length ? basket.map((item) => (
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
                      <td className="cart_price text-center">
                        {/* {item.quantity} */}
                        <div className="qty_counter d-flex">
                          <input
                            type="button"
                            value="-"
                            className="minus"
                            onClick={() => {
                              dispatch({
                                type: "CHANGE_QTY",
                                id: item.id,
                                payload: "decrement"
                              });
                            }}
                          />
                          <input
                            type="text"
                            name="qty"
                            value={item.quantity}
                            className="text-center input-qty w-100"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus"
                            onClick={() => {
                              dispatch({
                                type: "CHANGE_QTY",
                                id: item.id,
                                payload: "increment"
                              });
                            }}
                          />
                        </div>
                      </td>
                      <td className="cart_price text-center">
                        {formatAmount(item.price * item.quantity)}
                      </td>
                      {/* {setProdId(item.id)} */}
                      {/* <td><a onClick={()=>removeFromBasket(item)} className="remove_from_cart">Remove</a></td> */}
                      <td>
                        <a
                          onClick={() => {
                            // deleteRecord(item);
                            // setProdId(item.id);
                            // console.log("prodId", prodId);
                            dispatch({
                              type: "REMOVE_FROM_BASKET",
                              id: item.id,
                            });
                          }}
                          className="remove_from_cart"
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colspan="5">No items added to cart.</td>
                    </tr>
                  )}
                </table>
              </div>
            </div>

            {/* <div className="row coupon_row mt-4">
              <div className="col-md-12">
                <div className="bg-light d-flex justify-content-between coupon_inner_row">
                   <div>
                    <form className="form-inline">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mr-2"
                          id="coupon_code"
                          name="coupon_code"
                          placeholder="Coupon code"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary apply_coupon"
                      >
                        Apply coupon
                      </button>
                    </form>
                  </div> 

                  <button type="submit" className="btn btn-primary update_cart">
                    Update cart
                  </button>
                </div>
              </div>
            </div> */}
          </div>

          <div className="col-md-4">
            <div className="cart_total">
              <h3 className="mb-4">Cart Total</h3>
              <div className="d-flex justify-content-between subtotal_row">
                <span>Subtotal</span>
                <span>{formatAmount(getBasketTotal(basket))}</span>
              </div>
              {/* <div className="d-flex justify-content-between total_row">
                <span>Total</span>
                <span>4800.00 Kz</span>
              </div> */}
              <p className="mt-4 mb-4">Shipping calculated at checkout</p>
              <button
                type="submit"
                className="btn btn-primary to_checkout w-100"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </LandingPage>
  );
}
