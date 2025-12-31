import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-1 sticky-top">
      <div className="container-fluid">

        {/* Brand with Logo */}
        <NavLink
          to="/home"
          className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-warning"
        >
          <img
            src="https://repository-images.githubusercontent.com/768333093/426b5f49-eb99-4eec-887c-b4bc06ca1e41"
            alt="Logo"
            style={{
              height: "32px",
              width: "auto",
              objectFit: "contain"
            }}
          />
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

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* LEFT LINKS */}
          <ul className="navbar-nav">
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

          {/* RIGHT ACCOUNT */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button
                className="btn btn-warning btn-sm dropdown-toggle px-3"
                data-bs-toggle="dropdown"
              >
                Account
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li>
                  <NavLink className="dropdown-item" to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;