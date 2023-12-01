import React from "react";
import "./Whislist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faListCheck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";
import { products } from "../../ImagesData";
const Whislist = () => {
  const context = useGlobalContext();
  const { whishlist, setWhishlist } = context;

  const favourite = whishlist;
  console.log(favourite);
  const DelWhish = (delId) => {
    const deleteData = favourite.filter((whishID) => {
      return whishID.id !== delId;
    });
    setWhishlist(deleteData);
  };
  return (
    <>
      <div id="whishlist">
        <div className="container my-5">
          <div className="row text-center">
            <div className="col-md-3"></div>
            <div className="col-md-6 py-5">
              <h3>Whishlist</h3>
              <h5>Shop</h5>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            {favourite.length > 0 ? (
              <table className="table table-light text-center table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th>option</th>
                    <th>remove</th>
                  </tr>
                </thead>
                <tbody>
                  {whishlist.map((wish) => {
                    console.log(wish);
                    return (
                      <tr>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-around",
                            }}
                          >
                            <img
                              src={`https://d-themes.com/react_asset_api/molla/${wish.sm_pictures[0]?.url}`}
                              alt=""
                              style={{
                                width: "25%",
                                height: "40px",
                                objectFit: "cover",
                              }}
                            />
                            {wish.name}
                          </div>
                        </td>
                        <td>${wish.price}</td>
                        <td>{wish.stock}</td>
                        <td className="d-flex align-content-center">
                          <NavLink to={`/product/${wish.id}`}>
                            <button
                              type=""
                              style={{
                                border: " 1px solid orange",
                                padding: "5px 30px",
                                color: "orange",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faListCheck}
                                className="me-3"
                              />
                              select
                            </button>
                          </NavLink>
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon={faXmark}
                            style={{ cursor: "pointer" }}
                            onClick={() => DelWhish(wish.id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="text-center fw-bold">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    fontSize: "100px",
                    color: "#eea287",
                    margin: "20px 0px",
                  }}
                />
                <p className="py-3" style={{ fontSize: " 25px" }}>
                  No item in the whishlist
                </p>
              </div>
            )}
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
};

export default Whislist;
