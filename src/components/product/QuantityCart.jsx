import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const QuantityCart = ({ quantity, onDec, onInc }) => {
  return (
    <div className="quantity-cart-section">
      <div className="quantity-selector">
        <span>SELECT QUANTITY</span>
        <div className="quantity-controls">
          <button className="qty-btn" onClick={onDec}>
            <FiMinus />
          </button>
          <span className="quantity">{quantity}</span>
          <button className="qty-btn" onClick={onInc}>
            <FiPlus />
          </button>
        </div>
      </div>
      <button className="add-to-cart-btn">ADD TO CART</button>
    </div>
  );
};

export default QuantityCart;

