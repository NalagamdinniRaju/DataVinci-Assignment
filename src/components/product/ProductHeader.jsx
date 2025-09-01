import React from "react";
import { ImInfo } from "react-icons/im";

const ProductHeader = ({ title, onOpenInfo }) => {
  return (
    <div className="product-header">
      <h1 className="product-title">{title}</h1>
      <div className="product-ratings">
        <span className="umf-rating">
          UMF<sup>™</sup> <span>24+</span>
        </span>
        <span className="mgo-rating">
          MGO <span>1122+</span>
        </span>
      </div>
      <button className="info-btn" onClick={onOpenInfo}>
        <ImInfo size={18} />
        What is UMF and MGO?
      </button>
    </div>
  );
};

export default ProductHeader;

