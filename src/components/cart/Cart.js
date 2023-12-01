import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faRightLong,
  faTrashCan,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [message, setMessage] = useState("No items in the cart");
  const [total, setTotal] = useState(0);
  const [ship, setShip] = useState(0);
  const context = useGlobalContext();
  const { cart, setCart, order, setOrder } = context;
  console.log(cart);
  let cartItem = cart;

  // Delete Cart Data
  const deleteCartItem = (Id) => {
    const delData = cartItem.filter((item) => item.id !== Id);
    setCart(delData);
  };

  // Quantity add and remove
  const increment = (ID) => {
    let cartItem = [...cart];
    cartItem.forEach((item) => {
      if (item.id == ID) {
        item.counter += 1;
      }
    });
    setCart(cartItem);
    console.log(cartItem);
  };

  const decrement = (ID) => {
    let cartItem = [...cart];
    cartItem.forEach((item) => {
      if (item.id == ID) {
        item.counter -= 1;
      }
    });
    setCart(cartItem);
  };
  // Update Cart Data
  const UpdateCart = () => {
    let cartUpdated = 0;
    cart.forEach((item) => {
      cartUpdated += item.price * item.counter;
    });
    setTotal(cartUpdated);
    console.log(cartUpdated);
  };

  const ProceedData = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const totalCheckout = Number(total) + Number(ship);
    const orderName = { Id: Math.random(), product: cart, totalCheckout, user };
    localStorage.setItem("order", JSON.stringify(order));
    setOrder([...order, orderName]);
    setCart([]);
    setShip("");
    setTotal("");
    toast.success("Item has been proceed", {
      position: toast.POSITION.TOP_RIGHT,
      className: "#eea287",
      theme: "colored",
    });
  };
  return (
    <>
      <div className="cart">
        <div className="cart-bg">
          {/* background-image */}
          <div className="container my-5">
            <div className="row text-center">
              <div className="col-md-3"></div>
              <div className="col-md-6 py-5">
                <h3>Shopping Cart</h3>
                <h5>Shop</h5>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        {/* table cart */}
        <div className="container my-5">
          <div className="row">
            <div className="col-md-8">
              {cart.length > 0 ? (
                <table className="table table-hover text-center table-responsive">
                  <thead className="text-center">
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((element) => {
                      return (
                        <tr>
                          <td className="product-col">
                            <div className="product-cart">
                              <figure className="product-media">
                                <NavLink className="product-image" to="">
                                  <img src={element.image} alt="product" />
                                </NavLink>
                              </figure>
                              <h6 className="product-title">
                                <a href="">{element.name}</a>
                              </h6>
                            </div>
                          </td>
                          <td
                            className="price-col"
                            style={{ fontWeight: "bold" }}
                          >
                            ${element.price}
                          </td>
                          <td className="quantity-col">
                            <div className="product-details-quantity cart-product-quantity">
                              <div className="input-group input-spinner">
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-decrement btn-spinner"
                                    type="button"
                                    style={{ minWidth: "26px" }}
                                    onClick={() => decrement(element.id)}
                                    disabled={element.counter < 2}
                                  >
                                    <FontAwesomeIcon icon={faMinus} />
                                  </button>
                                </div>
                                <input
                                  type="number"
                                  className="form-control text-center"
                                  min="1"
                                  max="1000"
                                  required=""
                                  value={element.counter}
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-increment btn-spinner"
                                    type="button"
                                    style={{ minWidth: "26px" }}
                                    onClick={() => increment(element.id)}
                                    disabled={element.counter >= 10}
                                  >
                                    <FontAwesomeIcon icon={faPlus} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            className="total-col"
                            style={{ fontWeight: "bold" }}
                          >
                            ${element.price * element.counter}
                          </td>
                          <td className="remove-col">
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              onClick={() => deleteCartItem(element.id)}
                              style={{ cursor: "pointer", fontSize: "20px" }}
                              className="trash"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-5">
                  <h4>{message}</h4>
                </div>
              )}

              {/* update Cart */}
              <div className="cart-bottom d-flex">
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    value=""
                    placeholder="Coupon Code"
                  />
                  <button type="">
                    <FontAwesomeIcon icon={faRightLong} />
                  </button>
                </div>
                <div className="update-cart">
                  <button type="" onClick={UpdateCart}>
                    <span>Update Cart</span>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                </div>
              </div>

              {/* Update Cart */}
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 p-0">
              <div className="card">
                <div
                  style={{
                    borderBottom: "1px solid",
                    fontWeight: "bold",
                    padding: "20px 10px",
                  }}
                >
                  <h6> Card Total</h6>
                </div>
                <div className="subcard">
                  <h6>Subtotal Total</h6> <p>${total}</p>
                </div>
                <div className="card-body">
                  <h6>Shipping</h6>
                  <form>
                    <div className="form-group custom-group">
                      <input
                        type="radio"
                        name="ship"
                        value={0}
                        onChange={(e) => setShip(e.target.value)}
                      />
                      <label for="">free Shipping</label>
                      <p>$00.00</p>
                    </div>
                    <div className="form-group custom-group">
                      <input
                        type="radio"
                        name="ship"
                        value={10}
                        onChange={(e) => setShip(e.target.value)}
                      />
                      <label for="">Standard</label>
                      <p>$10.00</p>
                    </div>
                    <div className="form-group custom-group">
                      <input
                        type="radio"
                        name="ship"
                        value={20}
                        onChange={(e) => setShip(e.target.value)}
                      />
                      <label for="">Express</label>
                      <p>$20.00</p>
                    </div>
                  </form>
                  <div className="country">
                    <h6>Estimate for your country</h6>
                    <NavLink>change your country</NavLink>
                  </div>
                  <div className="total">
                    <h4>Total</h4>
                    <p style={{ fontSize: "bolder" }}>
                      ${Number(total) + Number(ship)}
                    </p>
                  </div>
                  <div className="btnProceed">
                    <input
                      type="submit"
                      name=""
                      value="Proceed"
                      onClick={ProceedData}
                    />
                    <ToastContainer theme="colored" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
