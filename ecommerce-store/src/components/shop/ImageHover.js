import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { products } from "../../ImagesData";
import { useGlobalContext } from "../context";
import "react-toastify/dist/ReactToastify.css";
const ImageHover = (props) => {
  const context = useGlobalContext();
  const { cart, setCart } = context;
  const { grid } = props;
  const [ImageView, setImageView] = useState("front");

  return (
    <>
      <div
        className="Checker"
        onMouseOver={() => setImageView("back")}
        onMouseOut={() => setImageView("front")}
      >
        <NavLink to={`/product/${grid.id}`}>
          <img
            src={`https://d-themes.com/react_asset_api/molla/${
              ImageView == "front"
                ? grid.sm_pictures[0]?.url
                : grid.sm_pictures[1]?.url
            }`}
            alt="arrow"
            className="img-fluid"
            style={{ width: "500px", height: "400px", objectFit: "cover" }}
          />
        </NavLink>
        <div className="box">
          <button type="button" className="btn btn-dark">
            add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageHover;
