"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "@/app/Context/CartPrdctContext";

function Header() {
  const { cartCount } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand pe-5 fw-bold" href="/">
            <img src="/logonew.jpg" alt="Logo" width={150} height={100} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/AboutUs">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" href="/ContactUs">
                  ContactUs
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
            <div className="cart-icon ms-3 position-relative">
              <img
                src="/cart-logo.png"
                alt="Cart"
                width={30}
                height={30}
                onClick={() => setShowMessage(false)} // Hide message on cart icon click
              />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                  <span className="visually-hidden">cart items</span>
                </span>
              )}
              {showMessage && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  Item added!
                 
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
