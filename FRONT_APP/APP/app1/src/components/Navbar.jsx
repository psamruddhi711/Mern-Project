import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 sticky-top">
      <div className="container-fluid">

        {/* Brand */}
        <NavLink className="navbar-brand fw-bold fs-3 text-warning" to="/home">
          🚀 Sunbeam
        </NavLink>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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

            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="ms-auto d-flex gap-2">
            <NavLink to="/signup" className="btn btn-outline-warning">
              <i className="bi bi-person-plus me-1"></i> Sign Up
            </NavLink>

            <NavLink to="/login" className="btn btn-warning">
              <i className="bi bi-box-arrow-in-right me-1"></i> Login
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
