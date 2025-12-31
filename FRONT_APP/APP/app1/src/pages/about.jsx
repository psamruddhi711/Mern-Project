import React from "react";
import Navbar from "../components/Navbar";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About LearnSphere</h1>
        <p>Empowering learners with industry-ready skills</p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="container about-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* ✅ IMAGE ADDED HERE */}
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Learning Environment"
              className="about-img"
            />
          </div>

          <div className="col-md-6">
            <h6 className="text-danger">WHO WE ARE</h6>
            <h2>Your Trusted Learning Partner</h2>
            <p>
              LearnSphere is a modern online learning platform designed to help
              students and professionals gain real-world skills through
              practical, hands-on training.
            </p>
            <p>
              Our courses are created by industry experts and focus on career
              growth, real projects, and placement readiness.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="mv-card">
                <h3>🎯 Our Mission</h3>
                <p>
                  To deliver high-quality, affordable education that bridges the
                  gap between academics and industry.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mv-card">
                <h3>🚀 Our Vision</h3>
                <p>
                  To become a global learning platform empowering millions of
                  learners to succeed in their careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us container">
        <h2 className="text-center mb-4">Why Choose LearnSphere?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="why-card">
              <h4>👨‍🏫 Expert Instructors</h4>
              <p>Learn from professionals with real industry experience.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="why-card">
              <h4>💻 Practical Learning</h4>
              <p>Hands-on projects and real-world use cases.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="why-card">
              <h4>🎓 Career Support</h4>
              <p>Guidance, certification, and placement assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h2>120+</h2>
              <p>Courses</p>
            </div>
            <div className="col-md-3">
              <h2>50+</h2>
              <p>Instructors</p>
            </div>
            <div className="col-md-3">
              <h2>10K+</h2>
              <p>Students</p>
            </div>
            <div className="col-md-3">
              <h2>95%</h2>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
