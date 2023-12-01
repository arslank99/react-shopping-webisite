import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    checked: "",
  });

  const inputHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
      checked: event.target.checked,
    });
  };

  const formHandler = (event) => {
    event.preventDefault();
    const { email, password, checked } = data;

    if (email === "") {
      alert("email is required");
    } else if (!email.includes("@")) {
      alert("please enter a valid email address");
    } else if (password === "") {
      alert("password is required");
    } else if (password.length < 5) {
      alert("password must be greater than 5");
    } else if (!checked) {
      alert("Check the checkbox");
    } else {
      // Retrieve existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      //existing users
      const userExist = existingUsers.some((user) => user.email === email);
      if (userExist) {
        alert("user email already exist");
      } else {
        // Create a new user object
        const newUser = { email, password, checked };

        // Add the new user to the existing list of users
        const updatedUsers = [...existingUsers, newUser];

        // Save the updated list of users back to local storage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // Set other data or navigate as needed
        localStorage.setItem("logged", JSON.stringify(true));
        localStorage.setItem("user", JSON.stringify(newUser));
        setData({ email: "", password: "", checked: "" });
        navigate("/login");
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
            <form action="#" onSubmit={formHandler}>
              <div className="form-group">
                <label for="singin-email-2">Username or email address *</label>
                <input
                  type="text"
                  className="form-control"
                  id="singin-email-2"
                  name="email"
                  value={data.email}
                  onChange={inputHandler}
                />
              </div>

              <div className="form-group">
                <label for="singin-password-2">Password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="singin-password-2"
                  name="password"
                  value={data.password}
                  onChange={inputHandler}
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2">
                  <span>SIGN IN</span>
                  <i className="icon-long-arrow-right"></i>
                </button>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="signin-remember-2"
                    name="checked"
                    value={data.checked}
                    onChange={inputHandler}
                  />
                  <label
                    className="custom-control-label"
                    for="signin-remember-2"
                  >
                    I Agree To The Terms
                  </label>
                </div>
              </div>
            </form>
            <div className="form-choice">
              <p className="text-center">or sign in with</p>
              <div className="row gy-3 text-center">
                <div className="col-sm-6">
                  <NavLink className="btn btn-login btn-g" to="">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ marginRight: "12px", color: "#36c" }}
                    />
                    Login With Facebook
                  </NavLink>
                </div>
                <div className="col-sm-6">
                  <NavLink className="btn btn-login btn-f" to="">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      style={{ marginRight: "12px", color: "#c33" }}
                    />
                    Login With Google
                  </NavLink>
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

export default Register;
