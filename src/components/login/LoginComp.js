import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const loginData = (e) => {
    e.preventDefault();
    // Getting data from the localStorage
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    // Assuming 'data' is an object containing email and password properties
    const { email, password } = data;

    if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 5) {
      alert("Password must be greater than 5 characters");
    } else {
      // Check if the entered email and password match any stored user
      const matchedUser = users.find((user) => {
        return user.email === email && user.password === password;
      });

      if (matchedUser) {
        // Optionally, you can store the user details in local storage for reference
        localStorage.setItem("user", JSON.stringify(matchedUser));
        navigate("/DashBoard");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <>
      <div className="tab-content mt-5">
        <div
          className="react-tabs__tab-panel react-tabs__tab-panel--selected"
          role="tabpanel"
          id="react-tabs-1"
          aria-labelledby="react-tabs-0"
        >
          <div>
            <form action="#" onSubmit={loginData}>
              <div className="form-group">
                <label htmlFor="singin-email-2">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="singin-email-2"
                  name="email"
                  value={data.email}
                  onChange={inputHandle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="singin-password-2">Password </label>
                <input
                  type="text"
                  className="form-control"
                  id="singin-password-2"
                  name="password"
                  defaultValue={data.password}
                  onChange={inputHandle}
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2">
                  <span>LOG IN</span>
                  <i className="icon-long-arrow-right"></i>
                </button>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="signin-remember-2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="signin-remember-2"
                  >
                    Remember Me
                  </label>
                </div>
                <a className="forgot-link" href="">
                  Forgot Your Password?
                </a>
              </div>
            </form>
            <div className="form-choice">
              <p className="text-center">or sign in with</p>
              <div className="row gy-3 text-center">
                <div className="col-sm-6">
                  <a className="btn btn-login btn-g" href="">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ marginRight: "12px", color: "#36c" }}
                    />
                    Login With Facebook
                  </a>
                </div>
                <div className="col-sm-6">
                  <a className="btn btn-login btn-f" href="">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      style={{ marginRight: "12px", color: "#c33" }}
                    />
                    Login With Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="react-tabs__tab-panel"
          role="tabpanel"
          id="react-tabs-3"
          aria-labelledby="react-tabs-2"
        ></div>
      </div>
    </>
  );
};

export default LoginComp;
