import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <>
      <div id="error">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div
              className="col-md-8 my-5 py-5 text-center"
              style={{ lineHeight: "3" }}
            >
              <h1>Error 404</h1>
              <p>We are sorry, the page you've requested is not available</p>
              <h3>
                <NavLink to="/">BACK TO HOMEPAGE</NavLink>
              </h3>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
