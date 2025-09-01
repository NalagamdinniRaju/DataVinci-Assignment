import React from "react";

const PaymentOptions = ({ selected, onSelect }) => {
  return (
    <div className="payment-options">
      <h4>PAYMENT OPTIONS (SELECT ONE)</h4>
      <div className="payment-container">
        <div className="payment-buttons">
          <button
            className={`payment-btn ${selected === "one-time" ? "selected" : ""}`}
            onClick={() => onSelect("one-time")}
          >
            <span>One-time purchase</span>
            <span className="price">$55.88 USD</span>
          </button>
          <button
            className={`payment-btn ${selected === "subscribe" ? "selected" : ""}`}
            onClick={() => onSelect("subscribe")}
          >
            <span>Subscribe & save 20%</span>
            <span className="price">$44.70 USD</span>
          </button>
        </div>
        <button className="subscription-info">
          <span className="refresh-icon">↻</span>
          What is a Subscription?
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;

