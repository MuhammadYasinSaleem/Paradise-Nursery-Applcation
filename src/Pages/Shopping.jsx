import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
const Shopping = () => {
    const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <div className="logo-container">
          <img src={logo} alt="Paradise Nursery Logo" />
        </div>
        <div className="log-text">
          <span>Paradise Nursery <br/>Where Green Meets Serenity</span>
        </div>
      </div>

      <div>Plants</div>
      <div><img src={logo} width='50px'/></div>
    </div>
  );
};

export default Shopping;
