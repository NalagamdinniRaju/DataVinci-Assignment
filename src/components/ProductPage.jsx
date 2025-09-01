import React, { useState } from "react";
import "./ProductPage.css";
import { FaHeart } from "react-icons/fa";
import UmfMgoInfo from "./umf-mgo-info.jsx";
import {
  PRODUCT_IMAGES,
  BUNDLE_ITEMS,
  CERTIFICATION_LOGOS,
} from "../constants/productData";
import ASSETS from "../constants/assets";
import ProductImages from "./product/ProductImages.jsx";
import ProductHeader from "./product/ProductHeader.jsx";
import PaymentOptions from "./product/PaymentOptions.jsx";
import QuantityCart from "./product/QuantityCart.jsx";
import BeautyBundle from "./product/BeautyBundle.jsx";
import UMFScaleTaste from "./product/UMFScaleTaste.jsx";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("one-time");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showUmfMgoInfo, setShowUmfMgoInfo] = useState(false);

  const productImages = PRODUCT_IMAGES;

  const sizeOptions = [
    { id: 0, size: "125g", price: 4.4, selected: true },
    { id: 1, size: "250g", price: 8.8 },
    { id: 2, size: "500g", price: 17.6 },
    { id: 3, size: "1kg", price: 35.2 },
  ];

  const bundleItems = BUNDLE_ITEMS;

  const certificationLogos = CERTIFICATION_LOGOS;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <ProductImages
          images={productImages}
          currentIndex={currentImageIndex}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />

        <div className="product-details">
          <ProductHeader
            title="Manuka Honey"
            onOpenInfo={() => setShowUmfMgoInfo(true)}
          />

          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">
                  <FaHeart />
                </span>
              ))}
            </div>
            <span className="review-count">825 REVIEWS</span>
          </div>

          <div className="product-description">
            <h3>The Optimiser</h3>
            <p>
              For those times in life when quality comes first. This pure UMF™
              24+ Manuka Honey is powerfully active, sourced from wild and
              rugged locations around Aotearoa New Zealand and great for almost
              all uses. It has a full, delicious flavour and your body will love
              you for it.
            </p>
          </div>

          <div className="certifications">
            {certificationLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Certification"
                className="cert-logo"
              />
            ))}
          </div>

          <div className="size-selection">
            <h4>SIZE (SELECT ONE)</h4>
            <p className="variant-info">Variant: 125g | 4.4oz</p>

            <div className="size-grid">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt={`Product view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <PaymentOptions
            selected={selectedPayment}
            onSelect={setSelectedPayment}
          />

          <QuantityCart
            quantity={quantity}
            onDec={() => setQuantity(Math.max(1, quantity - 1))}
            onInc={() => setQuantity(quantity + 1)}
          />

          <BeautyBundle items={bundleItems} />

          <div className="rewards-section">
            <span className="rewards-icon">
              <img src={ASSETS.rainbow} alt="Rainbow" />
            </span>
            <span>Colourclub members earn up to</span>
            <span className="points">56</span>
            <span>reward points when buy this item. Sign up or log in</span>
          </div>

          <div className="delivery-info">
            <div className="delivery-section">
              <h4>DELIVERY</h4>
              <p>FREE DELIVERY ON ORDERS OVER $30</p>
            </div>
            <div className="estimated-delivery">
              <h4>ESTIMATED DELIVERY DATE:</h4>
              <p>Jun 9 - Jun 13 to</p>
            </div>
          </div>

          <div className="afterpay-section">
            <h4>AFTER PAY</h4>
            <p>
              or 4 interest-free payments of $13.97 with{" "}
              <span className="afterpay-logo">
                <span>$</span> Afterpay
              </span>{" "}
              ⓘ
            </p>
          </div>

          <UMFScaleTaste />
        </div>
      </div>
      <UmfMgoInfo
        open={showUmfMgoInfo}
        onClose={() => setShowUmfMgoInfo(false)}
      />
    </div>
  );
};

export default ProductPage;
