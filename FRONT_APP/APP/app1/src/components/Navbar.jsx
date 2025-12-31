import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 sticky-top">
      <div className="container-fluid">

        {/* Brand: Logo + Name */}
        <NavLink
          to="/home"
          className="navbar-brand d-flex align-items-center gap-2 fw-bold text-warning fs-4"
        >
          <div>
          <img
            src="C:\Users\ayush\OneDrive\Desktop\SUNBEAM SOLUTION ASS\Mern-Project\FRONT_APP\APP\app1\public\learnsphere-logo.jpg.jpg"
            style={{ height: "90%",width: "90%" }}
          />
          </div>
          LearnSphere
        </NavLink>

        {/* Mobile Toggle */}
=======
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



        {/* Brand */}
        <NavLink className="navbar-brand fw-bold fs-3 text-warning" to="/home">
          🚀 Sunbeam
        </NavLink>

        {/* Mobile toggle */}
>>>>>>> 971fa1e316c018b6f1b5313cf39cbe9c21aeeb15
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

<<<<<<< HEAD
        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Left Links */}
=======
          {/* Left links */}
>>>>>>> 971fa1e316c018b6f1b5313cf39cbe9c21aeeb15
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

<<<<<<< HEAD
          {/* Right Buttons */}
          <div className="ms-auto d-flex gap-2">
            <NavLink
              to="/signup"
              className="btn btn-sm btn-outline-warning px-3"
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/login"
              className="btn btn-sm btn-warning px-3"
            >
=======
          {/* Right buttons */}
          <div className="ms-auto d-flex align-items-center gap-2">
            <NavLink to="/signup" className="btn btn-sm btn-outline-warning px-3">
              Sign Up
            </NavLink>

            <NavLink to="/login" className="btn btn-sm btn-warning px-3">
>>>>>>> 971fa1e316c018b6f1b5313cf39cbe9c21aeeb15
              Login
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
