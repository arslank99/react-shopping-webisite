import React from "react";
import SideBar from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./css/custom.css";
const DashboardProduct = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <div className="col-md-10 p-0">
            <div id="content-wrapper" className="d-flex flex-column">
              <nav className="navbar navbar-expand navbar-light bg-white topbar my-2 static-top shadow">
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars"></i>
                </button>

                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>
                </form>
                <button
                  type="button"
                  onClick={logout}
                  className="btn btn-outline-primary"
                >
                  Logout
                </button>
              </nav>

              {/* Dashboard */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800 ms-3">Products</h1>
                <a
                  href="#"
                  className="me-3 d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <FontAwesomeIcon icon={faCircleDown} /> Generate Report
                </a>
              </div>
              <div className="container py-2">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                    <table className="table table-striped table-hover custom-table text-center">
                      <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>Mary</td>
                          <td>Moe</td>
                          <td>mary@example.com</td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>Dooley</td>
                          <td>july@example.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
              {/* Dashboard */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProduct;
