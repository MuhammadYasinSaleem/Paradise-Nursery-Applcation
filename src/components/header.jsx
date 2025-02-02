import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <div className="logo-container">
          <img src={logo} alt="Paradise Nursery Logo" />
        </div>
        <div className="log-text">
          <span>
            Paradise Nursery <br />
            Where Green Meets Serenity
          </span>
        </div>
      </div>

      <div className="plants-text">
        <span style={{ fontSize: "40px" }}>Plants</span>
      </div>

      <div>
      <button style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}}>
      <CiShoppingCart size={50} style={{color:"white"}} />
    </button>
      </div>
    </div>
  );
};

export default Header;
