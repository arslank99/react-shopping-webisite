import React from "react";
import SideBar from "./SideBar";

import { useNavigate } from "react-router-dom";
import "./css/custom.css";
import { useGlobalContext } from "../context";
const DashboardOrder = () => {
  const context = useGlobalContext();
  const { order } = context;
  let cartOrder = order;
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const Home = () => {
    navigate("/");
  };
  const orderData = (Item) => {
    navigate("/Orderdetails/" + Item.Id);
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
              <table
                className="table table-responsive table-dark table-hover custom-table text-center"
                style={{ width: "60%", margin: "100px auto" }}
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Items</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {cartOrder?.map((item) => {
                    return (
                      <tr key={item.productId} onClick={() => orderData(item)}>
                        <td>{item.Id}</td>
                        <td>{item.product.length}</td>
                        <td>${item.totalCheckout}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
export default DashboardOrder;
