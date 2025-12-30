import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-1 sticky-top">

      <div className="container-fluid">

        {/* Brand: Logo + Text */}
 <NavLink to="/home" className="navbar-brand d-flex align-items-center gap-2">
  <img
    src="/learnsphere-logo.png"
    alt="LearnSphere Logo"
    style={{ height: "26px", width: "auto" }}
  />
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

          {/* Left links */}
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

          {/* Right buttons */}
          <div className="ms-auto d-flex align-items-center gap-2">
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
