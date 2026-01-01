import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h5>Learn From Home</h5>
          <h1>Education Courses</h1>

          <div className="search-box">
            <select>
              <option>Courses</option>
              <option>MERN Stack</option>
              <option>Java Full Stack</option>
              <option>Python</option>
            </select>
            <input type="text" placeholder="Keyword" />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
              alt="about"
            />
          </div>

          <div className="col-md-6">
            <h6 className="text-danger">ABOUT US</h6>
            <h2>First Choice For Online Education Anywhere</h2>
            <p>
              LearnSphere provides industry-ready courses with expert mentors,
              hands-on training, and placement support.
            </p>

            <div className="stats">
              <div className="stat green">123<br />Subjects</div>
              <div className="stat blue">1234<br />Courses</div>
              <div className="stat red">123<br />Instructors</div>
              <div className="stat yellow">1234<br />Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h6 className="text-danger">WHY CHOOSE US?</h6>
              <h2>Why You Should Start Learning with Us?</h2>
              <p>
                LearnSphere focuses on real-world skills, certifications, and
                career growth.
              </p>
              <ul>
                <li>✔ Skilled Instructors</li>
                <li>✔ International Certification</li>
                <li>✔ Online Classes</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="why"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer">
        <h2>30% Off For New Students</h2>

        <div className="offer-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <select>
            <option>Select a course</option>
            <option>MERN Stack</option>
            <option>Java Full Stack</option>
            <option>Python</option>
          </select>
          <button>Sign Up Now</button>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses">
        <h6 className="text-danger">OUR COURSES</h6>
        <h2>Checkout New Releases Of Our Courses</h2>

        <div className="course-grid">
          <CourseCard title="Web Design & Development" />
          <CourseCard title="MERN Stack Development" />
          <CourseCard title="Java Full Stack" />
          <CourseCard title="Python & Data Science" />
        </div>
      </section>
    </>
  );
}

function CourseCard({ title }) {
  return (
    <div className="course-card">
      <div className="course-overlay">
        <h4>{title}</h4>
        <p>Courses for beginners</p>
        <span>⭐ 4.5 (250)</span>
      </div>
    </div>
  );
}
