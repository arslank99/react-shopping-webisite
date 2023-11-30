import React from "react";
import SideBar from "./SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./css/custom.css";
const OrderDetail = () => {
  const context = useGlobalContext();
  const { order } = context;
  let cartOrder = order;
  const { Id } = useParams();
  const Orderdetails = cartOrder.find((item) => {
    return item.Id == Id;
  });

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
      <div className="container-fluid">
        <div className="row">
          <SideBar />
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
              {/* Dashboard */}
              <div className="container py-2">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10 py-5">
                    <table className="table table-striped table-hover custom-table text-center table-dark">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Item Name</th>
                          <th>Item Price</th>
                          <th>Item Image</th>
                          <th>Item Color</th>
                          <th>Item Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Orderdetails?.product?.map((order) => {
                          return (
                            <tr>
                              <td>{order.id}</td>
                              <td>{order.name}</td>
                              <td>${order.price}</td>
                              <td>
                                <img
                                  src={order.image}
                                  alt=""
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </td>
                              <td>{order.colorState}</td>
                              <td>{order.sizeSelect}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
              {/* Dashboard */}
            </div>
          </div>
          <footer className="fixed-bottom bg-org py-3 text-white">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2023</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
