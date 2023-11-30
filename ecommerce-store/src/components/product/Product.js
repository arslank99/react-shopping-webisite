import React, { useEffect, useState } from "react";
import "./Product.css";
import { productsData } from "../../ShopData";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faPlus,
  faMinus,
  faCartShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const Product = () => {
  const { Id } = useParams();
  const details = productsData.find((item) => {
    return item.id == Id;
  });
  console.log(details, "deatail");
  // States variable
  const context = useGlobalContext();

  const [visible, setVisible] = useState(
    `https://d-themes.com/react_asset_api/molla/${details.sm_pictures[0]?.url}`
  );
  const [colorState, setColorState] = useState(details.variants[0]?.color_name);
  const [sizeSelect, setSizeSelected] = useState(
    details.variants[0]?.size[0].name
  );
  const [counter, setCounter] = useState(1);

  // Quantity add and remove
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const addToCart = () => {
    const { cart } = context;
    //Check if the product is already in the cart
    const isProductInCart = cart.some(
      (item) =>
        item.id === details.id &&
        item.colorState === colorState &&
        item.sizeSelect === sizeSelect
    );
    if (isProductInCart) {
      // If the product is already in the cart, show a message
      toast.warning("Item is already in the cart!", {
        position: toast.POSITION.TOP_RIGHT,
        className: "#eea287",
        theme: "colored",
      });
    } else {
      // If the product is not in the cart, add it to the cart
      context.setCart([
        ...cart,
        { ...details, image: visible, colorState, sizeSelect, counter },
      ]);

      // Show a success message
      toast.info("Item has been added to the cart!", {
        position: toast.POSITION.TOP_RIGHT,
        className: "#eea287",
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 p-0">
            {details.sm_pictures?.map((image) => {
              return (
                <img
                  src={`https://d-themes.com/react_asset_api/molla/${image.url}`}
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  className="img-fluid"
                  onClick={() =>
                    setVisible(
                      `https://d-themes.com/react_asset_api/molla/${image.url}`
                    )
                  }
                />
              );
            })}
          </div>
          <div className="col-md-5">
            <img
              src={visible}
              alt=""
              style={{ width: "100%" }}
              className="img-fluid"
            />
          </div>
          <div className="col-md-5">
            <div className="name mb-2">
              <h4>{details.name}</h4>
            </div>
            <div className="Rating d-flex align-items-center mb-2">
              <span className="tooltip-text">
                {[...Array(details.ratings).keys()]?.map(() => (
                  <FontAwesomeIcon icon={faStar} style={{ color: "#eea287" }} />
                ))}
                {[...Array(5 - details.ratings).keys()]?.map(() => (
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#9e9e9e99" }}
                  />
                ))}
              </span>
              <div className="Review ms-2" style={{ color: "GrayText" }}>
                ({details.review} Reviews)
              </div>
            </div>
            <div className="price" style={{ color: "#eea287" }}>
              <h4>${details.price}</h4>
            </div>
            <div className="description">
              <p>{details.short_desc}</p>
            </div>
            <div className="colors d-flex align-items-center py-2">
              <span className="me-2">Color : </span>
              {details?.variants?.length === 0 ? (
                <span> {"No color availabe"} </span>
              ) : (
                details.variants?.map((color) => {
                  return (
                    <div className="d-flex flex-column">
                      <div
                        style={{
                          backgroundColor: color.color,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          marginRight: "12px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => setColorState(color?.color_name)}
                      ></div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="size py-2 d-flex align-items-center">
              {details.variants?.map((size) => {
                <span>size : </span>;
                return (
                  <>
                    {colorState == size?.color_name ? (
                      <>
                        <span>size : </span>
                        <select
                          className="form-select w-50"
                          onChange={(e) => setSizeSelected(e.target.value)}
                          style={{
                            marginLeft: "10px",
                            borderRadius: "unset",
                          }}
                        >
                          {size?.size.map((sizes, index) => {
                            return (
                              <option value={sizes.name} key={index}>
                                {sizes.name}
                              </option>
                            );
                          })}
                        </select>
                      </>
                    ) : null}
                  </>
                );
              })}
            </div>
            <div className="quantity py-2 d-flex align-items-center">
              <span>Quantity : </span>
              <div className="product-details-quantity cart-product-quantity my-2 mx-2">
                <div className="input-group input-spinner">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-decrement btn-spinner"
                      type="button"
                      style={{ minWidth: "26px" }}
                      onClick={decrement}
                      disabled={counter < 1}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    min="1"
                    max="1000"
                    required=""
                    value={counter}
                    style={{ width: "100px" }}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-increment btn-spinner"
                      type="button"
                      style={{ minWidth: "26px" }}
                      onClick={increment}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="category py-2"
              style={{ display: "flex", alignItems: "baseline", gap: "10px" }}
            >
              <span>Category : </span>
              {details.category.map((cat) => {
                return <h6>{cat.name}</h6>;
              })}
            </div>
            {localStorage.getItem("user") ? (
              <div className="addToCart py-2">
                <button type="button" onClick={addToCart}>
                  <FontAwesomeIcon icon={faCartShopping} />
                  add to cart
                  <ToastContainer theme="colored" />
                </button>
                <NavLink to="/whislist">
                  <FontAwesomeIcon icon={faHeart} />
                  add to wishlist
                </NavLink>
              </div>
            ) : (
              <div className="addToCart py-2">
                <button
                  type="button"
                  onClick={addToCart}
                  className="notClicked"
                  disabled
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  You Need To Login
                  <ToastContainer theme="colored" />
                </button>
                <NavLink to="/whislist" disabled>
                  <FontAwesomeIcon icon={faHeart} />
                  add to wishlist
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
