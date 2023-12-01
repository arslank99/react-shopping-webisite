import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import "./css/custom.css";
const DashBoard = () => {
  return (
    <>
      <div className="Wrapper">
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <Content />
            <footer className="fixed-bottom bg-org py-3 text-white">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2023</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
