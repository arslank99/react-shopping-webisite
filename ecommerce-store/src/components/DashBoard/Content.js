import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./css/custom.css";
const Content = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  const Home = () => {
    navigate("/");
  };
  return (
    <>
      <div className="col-md-11 p-0">
        <div
          id="content-wrapper"
          className="d-flex flex-column"
          style={{ height: "100vh" }}
        >
          <div
            className="text-light p-2 text-end"
            style={{ backgroundColor: "#eea287" }}
          >
            <button
              type="button"
              className="btn btn-outline-light me-3"
              onClick={Home}
            >
              Home
            </button>
            <button
              type="button"
              className="btn btn-outline-light me-3"
              onClick={logout}
            >
              logout
            </button>
          </div>
          {/* dashboard card*/}
          <div class="col-xl-3 col-md-6 m-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 m-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 m-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 m-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* dashboard card*/}
        </div>
      </div>
    </>
  );
};

export default Content;
