import React, { useEffect, useState } from "react";
import "./Shop.css";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faTableColumns,
  faTableCells,
  faHeart,
  faGlasses,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { productsData } from "../../ShopData";
import Grid2 from "./Grid2";
import Grid3 from "./Grid3";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import { useGlobalContext } from "../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Shop = () => {
  const context = useGlobalContext();
  const { whishlist } = context;
  const whishlistData = whishlist;
  console.log(whishlistData);
  // url states
  const [params, setParams] = useSearchParams();
  const [categoryData, setCategoryData] = useState([]);
  const [activeView, setActiveView] = useState("default");

  // url data
  const categoryUrl = params.get("category");
  const sizeUrl = params.get("size");
  const colorUrl = params.get("color");
  const priceUrl = params.get("price");

  const HandleActiveView = (view) => {
    setActiveView(view);
  };

  // filter function here
  useEffect(() => {
    let filteredProducts = productsData;
    const categories = categoryUrl?.split(",");
    // category filter by name
    if (categoryUrl) {
      filteredProducts = filteredProducts.filter((product) => {
        return categories.some((cate) => {
          return product.category.some((cat) => cat.name === cate);
        });
      });
    }

    if (sizeUrl) {
      const sizes = sizeUrl?.split(",");
      filteredProducts = filteredProducts.filter((product) => {
        return sizes.some((size) => {
          return product.variants[0]?.size.some((sizez) => sizez.name === size);
        });
      });
    }

    if (colorUrl) {
      const colors = colorUrl?.split(",");
      filteredProducts = filteredProducts.filter((product) => {
        return colors.some((color) => {
          return product.variants?.some(
            (uniColor) => uniColor.color_name === color
          );
        });
      });
    }

    if (priceUrl && priceUrl !== "0") {
      const maxPrice = Number(priceUrl);
      filteredProducts = filteredProducts.filter(
        (product) => Number(product.price) <= maxPrice
      );
    }
    setCategoryData(filteredProducts);
  }, [categoryUrl, sizeUrl, colorUrl, priceUrl]);

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const PostData = categoryData.slice(firstIndex, lastIndex);

  const paginate = (val) => {
    setCurrentPage(val);
  };

  const addToWhishList = (product) => {
    const isInWhishlist = whishlistData.some(
      (whishItem) => whishItem.id === product.id
    );

    // If the item is not in the cart, add it to the wishlist
    if (!isInWhishlist) {
      context.setWhishlist([...whishlist, product]);
      toast.success("Item has been added to wishlist", {
        position: toast.POSITION.TOP_RIGHT,
        className: "#eea287",
        theme: "colored",
      });
    } else {
      // Display a message or handle the case where the item is already in the cart
      toast.warning("Item is already in the WhishLIst", {
        position: toast.POSITION.TOP_RIGHT,
        className: "#eea287",
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div id="shop">
        <div className="bg-layer">
          <div className="list-heading">
            <h2>List</h2>
            <h5>Shop</h5>
          </div>
        </div>
        {/* First Row Container*/}
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <List params={params} setParams={setParams} />
            </div>
            <div className="col-md-9">
              <div className="firstHeading">
                <h6>
                  Showing <span>5</span> of <span>35</span>
                </h6>
                <select className="form-select" style={{ color: "#999" }}>
                  <option value="default">Default</option>
                  <option value="popular">Most Popular</option>
                  <option value="rated">Most Rated</option>
                </select>
                <div className="GridSystem">
                  <FontAwesomeIcon
                    icon={faTableColumns}
                    className={activeView === "default" ? "active" : ""}
                    onClick={() => HandleActiveView("default")}
                  />
                  <FontAwesomeIcon
                    icon={faGrip}
                    className={activeView === "grid" ? "active" : ""}
                    onClick={() => HandleActiveView("grid")}
                  />
                  <FontAwesomeIcon
                    icon={faTableCells}
                    className={activeView === "table" ? "active" : ""}
                    onClick={() => HandleActiveView("table")}
                  />
                </div>
              </div>
              {activeView === "default" &&
                PostData.map((product, index) => {
                  return (
                    <div
                      className="row py-2"
                      style={{
                        borderBottom: "1px solid lightgray",
                        overflow: "hidden",
                      }}
                    >
                      <div className="col-md-3" key={index}>
                        <NavLink to={`/product/${product.id}`}>
                          <img
                            src={`https://d-themes.com/react_asset_api/molla/${product.sm_pictures[0]?.url}`}
                            alt=""
                            className="ImgResponse"
                          />
                        </NavLink>
                      </div>
                      <div className="col-md-6">
                        <div className="product-body">
                          <div className="product-cats">
                            <a href="">{product.category[0].name}</a>
                          </div>
                          <div className="product-cats">
                            <a href="">
                              {product.category.some((product) => product.name)}
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="">{product.name}</a>
                          </h3>
                          <div className="product-content">
                            <p>{product.short_desc}</p>
                          </div>
                          <div className="product-nav product-nav-dots d-flex">
                            {product.variants?.map((ItemColor, ColorIndex) => {
                              return (
                                <div
                                  className="filter-colors"
                                  key={ColorIndex}
                                  style={{
                                    backgroundColor: ItemColor.color,
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "12px",
                                  }}
                                ></div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="product-list-action">
                          <div className="product-price">
                            ${product.price}
                            {product.new}
                          </div>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div className="ratings-val"></div>
                              <span className="tooltip-text">
                                {[...Array(product.ratings).keys()].map(
                                  (star, index) => (
                                    <FontAwesomeIcon
                                      icon={faStar}
                                      style={{ color: "#eea287" }}
                                    />
                                  )
                                )}
                              </span>
                            </div>
                            <span className="ratings-text">
                              {product.review}
                            </span>
                          </div>
                          <div className="product-action">
                            <FontAwesomeIcon icon={faGlasses} />
                            <button
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              <span>quick view</span>
                            </button>
                            <FontAwesomeIcon icon={faHeart} />

                            <span
                              onClick={() => addToWhishList(product)}
                              style={{ cursor: "pointer" }}
                            >
                              wishlist
                              <ToastContainer theme="colored" />
                            </span>
                          </div>
                          <NavLink
                            className="btn-product btn-cart btn-select"
                            to={`/product/${product.id}`}
                          >
                            <span>select options</span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {/* Row 3 start */}
              {activeView === "grid" && <Grid2 data={PostData} />}
              {/* Row 3 start */}

              {/* Row 4 start */}
              {activeView === "table" && <Grid3 data={PostData} />}
              {/* Row 4 start */}

              {console.log({ postPerPage, length: categoryData.length })}

              {/* Pagination Start Here */}
              <Pagination
                postPerPage={postPerPage}
                totalPost={categoryData.length}
                paginate={paginate}
              />
              {/* Pagination data End*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
