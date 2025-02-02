import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
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

      <div className="plants-text"  onClick={() => navigate("/shopping")}>
        <span style={{ fontSize: "40px",cursor:'pointer' }}>Plants</span>
      </div>

      <div>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate("/cart")}
        >
          <CiShoppingCart size={50} style={{ color: "white" }} />
          {totalItems > 0 && (
            <span className="cart-counter">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
