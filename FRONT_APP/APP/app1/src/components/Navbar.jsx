import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 sticky-top">
      <div className="container-fluid">

        {/* Brand: Logo inside div */}
        <NavLink
          to="/home"
          className="navbar-brand d-flex align-items-center gap-2 fw-bold text-warning fs-4"
        >
          <div className="logo-wrapper">
            <img
              src="/learnsphere-logo.png"
              alt=""
              className="logo-img"
            />
          </div>
          LearnSphere
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* Left Links */}
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/courses">
                Courses
              </NavLink>
            </li>

            {/* ✅ ABOUT US */}
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/about">
                About Us
              </NavLink>
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="ms-auto d-flex gap-2">
            <NavLink to="/signup" className="btn btn-sm btn-outline-warning px-3">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="btn btn-sm btn-warning px-3">
              Login
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
