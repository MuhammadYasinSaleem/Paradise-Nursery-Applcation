import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Header from "../components/header";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Initialize useNavigate

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price} x {item.quantity}</p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {cartItems.length > 0 && (
          <>
            <div className="total-price">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
            <button onClick={() => dispatch(clearCart())} className="clear-cart-btn">
              Clear Cart
            </button>
          </>
        )}
        
        {/* Container for both buttons */}
        <div className="button-container">
          <button 
            onClick={() => navigate("/shopping")}  // Navigate to the shopping page
            className="continue-shopping-btn"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
