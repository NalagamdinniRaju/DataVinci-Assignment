import React from "react";
import ProductGrid from "../ProductGrid.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductImages = ({ images, currentIndex, onPrev, onNext }) => {
  return (
    <div className="product-images">
      <div className="main-image-container">
        <button
          className="nav-btn prev-btn"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <FiChevronLeft size={20} />
        </button>
        <div className="main-image">
          <div className="purple-blob"></div>
          <img
            src={images[currentIndex]}
            alt="Manuka Honey"
            className="product-img"
          />
        </div>
        <button
          className="nav-btn next-btn"
          onClick={onNext}
          aria-label="Next image"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
      <ProductGrid />
    </div>
  );
};

export default ProductImages;
