import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 sticky-top">
      <div className="container-fluid">
        <NavLink
          to="/home"
          className="navbar-brand fw-bold text-warning fs-4"
        >
          LearnSphere
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            {/* New Video Button Added Here */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/videos">Videos</NavLink>
            </li>
          </ul>

          <div className="ms-auto d-flex gap-2">
            {!token ? (
              <>
                <NavLink to="/signup" className="btn btn-outline-warning btn-sm">
                  Sign Up
                </NavLink>
                <NavLink to="/login" className="btn btn-warning btn-sm">
                  Login
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/profile" className="btn btn-outline-warning btn-sm">
                  Profile
                </NavLink>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/home";
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;