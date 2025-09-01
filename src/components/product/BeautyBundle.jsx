import React from "react";

const BeautyBundle = ({ items }) => {
  return (
    <div className="beauty-bundle">
      <div className="bundle-header">
        <button className="bundle-nav">〈</button>
        <h3>Beauty Bundle</h3>
        <button className="bundle-nav">〉</button>
      </div>
      <div className="bundle-content">
        <div>
          <div className="bundle-items">
            {items.map((item, index) => (
              <div key={index} className="bundle-item">
                <div className="bundle-image">
                  <img src={item.image} alt={item.name} />
                </div>
                {index < items.length - 1 && <span className="plus">+</span>}
              </div>
            ))}
          </div>
          <div className="bundle-details">
            <div className="bundle-products">
              <span>
                UMF 20+ <span>250g ▼</span>
              </span>
              <span>
                UMF 24+<span>250g ▼</span>
              </span>
              <span>Wooden Spoon</span>
            </div>
          </div>
        </div>
        <div className="bundle-pricing">
          <span className="original-price">$478.75 USD</span>
          <span className="bundle-price">$430.88 USD</span>
          <span className="savings">Save 10%</span>
          <button className="add-bundle-btn">ADD BUNDLE TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default BeautyBundle;

