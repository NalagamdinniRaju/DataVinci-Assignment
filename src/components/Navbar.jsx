import React, { useState } from "react";
import "./Navbar.css";
import { FiUser, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-left desktop-only">
        <button className="manuka-btn">WHICH MANUKA IS FOR ME?</button>
      </div>

      <div className="mobile-only menu-btn" onClick={() => setIsOpen(true)}>
        <FiMenu size={24} />
      </div>

      <div className="nav-logo mobile-only center-logo">
        <img src={logo} alt="New Zealand Honey Co." className="logo-img" />
        <h1 className="logo-text">
          NEW ZEALAND
          <br />
          HONEY CO.
        </h1>
      </div>

      <nav className="nav-links desktop-only">
        <a href="#">Shop</a>
        <a href="#">Explore</a>

        <div className="nav-logo">
          <img src={logo} alt="New Zealand Honey Co." className="logo-img" />
          <h1 className="logo-text">
            NEW ZEALAND
            <br />
            HONEY CO.
          </h1>
        </div>

        <a href="#">About</a>
        <a href="#">Rewards</a>
        <a href="#">Contact</a>
      </nav>

      <div className="nav-icons">
        <FiUser size={20} />
        <FiSearch size={20} />
        <div className="cart-icon">
          <FiShoppingCart size={20} />
          <span className="cart-count">0</span>
        </div>
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FiX size={24} onClick={() => setIsOpen(false)} />
        </div>
        <nav className="sidebar-links">
          <a href="#">Shop</a>
          <a href="#">Explore</a>
          <a href="#">About</a>
          <a href="#">Rewards</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Navbar;
