import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";

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



      if (response.data.status === "success") {
        setCourses(response.data.data);
      } else {
        setError(response.data.error || "Failed to load courses");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="courses-loader">Loading courses...</div>;
  }

          {/* Left links */}
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/home">
                Home
              </NavLink>
            </li>

      {courses.length === 0 ? (
        <p className="no-courses">No active courses available</p>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.course_id}>
              <h3>{course.course_name}</h3>

              <p className="course-desc">{course.description}</p>

          {/* Right buttons */}
          <div className="ms-auto d-flex align-items-center gap-2">
            <NavLink to="/signup" className="btn btn-sm btn-outline-warning px-3">
              Sign Up
            </NavLink>

            <NavLink to="/login" className="btn btn-sm btn-warning px-3">
              Login
            </NavLink>
          </div>

              <button className="enroll-btn">View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
