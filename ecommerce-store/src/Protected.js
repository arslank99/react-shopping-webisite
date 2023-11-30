import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const logged = localStorage.getItem("user");
    if (!logged) {
      navigate("/");
    }
  });
  return (
    <>
      <div>
        <Component />
      </div>
    </>
  );
};

export default Protected;
