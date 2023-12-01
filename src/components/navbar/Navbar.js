import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../context";
import { useLocation } from "react-router-dom";
import {
  faShoppingCart,
  faHeart,
  faSearch,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const context = useGlobalContext();
  const cartUpdate = context.cart;
  const whishlist = context.whishlist;
  const NavbarRef = useRef();
  const SearchRef = useRef();
  const SearchHandle = () => {
    SearchRef.current.classList.toggle("active");
  };
  const NavbarHandle = () => {
    NavbarRef.current.classList.toggle("active");
  };

  const NavbarRemove = () => {
    NavbarRef.current.classList.remove("active");
  };

  const logout = () => {
    NavbarRef.current.classList.remove("active");
    localStorage.removeItem("user");
    navigate("/");
  };
  const withouSidebarRoutes = [
    "/DashBoard",
    "/DashboardOrder",
    "/DashboardProduct",
    "/Orderdetails",
  ];

  const { pathname } = useLocation();
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;
  return (
    <>
      <div id="navbar">
        <div className="container py-2">
          <div className="row">
            <div className="col-md-2">
              <FontAwesomeIcon
                icon={faBars}
                className="BarIcon"
                onClick={NavbarHandle}
              />

              <img src={Logo} alt="" className="img-fluid w-50" />
            </div>
            <div className="col-md-6" ref={NavbarRef}>
              <NavLink to="/" onClick={NavbarRemove}>
                Home
              </NavLink>
              <NavLink to="/shop" onClick={NavbarRemove}>
                shop
              </NavLink>
              <NavLink to="/about" onClick={NavbarRemove}>
                about
              </NavLink>
              <NavLink to="/contact" onClick={NavbarRemove}>
                contact
              </NavLink>
              {localStorage.getItem("user") ? (
                <>
                  <NavLink to="/DashBoard" onClick={NavbarRemove}>
                    DashBoard
                  </NavLink>
                  <NavLink to="/" onClick={logout}>
                    logout
                  </NavLink>
                </>
              ) : (
                <NavLink to="/login" onClick={NavbarRemove}>
                  login
                </NavLink>
              )}

              <FontAwesomeIcon
                icon={faXmark}
                className="xicon"
                onClick={NavbarRemove}
              />
            </div>
            <div className="col-md-4">
              <input
                type="search"
                name=""
                ref={SearchRef}
                placeholder="search product..."
                className="FocusColor"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="icon searchIcon"
                onClick={SearchHandle}
              />
              <NavLink to="/whislist">
                <div className="cart-style">
                  <FontAwesomeIcon icon={faHeart} className="icon" />
                  <p>{whishlist.length}</p>
                </div>
              </NavLink>
              <NavLink to="/cart">
                <div className="cart-style">
                  <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                  <p>{cartUpdate.length}</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
