import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/courses.css";

const Courses = () => {
  // STATIC DATA (can be replaced with API later)
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "MERN Stack Development",
      desc: "MongoDB, Express, React, Node.js with real projects",
      fees: 45000,
      duration: "6 Months",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      id: 2,
      name: "Java Full Stack",
      desc: "Core Java, Spring Boot, Hibernate & React",
      fees: 40000,
      duration: "5 Months",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de1cd0a",
    },
    {
      id: 3,
      name: "Python & Data Science",
      desc: "Python, ML, NumPy, Pandas, Data Analysis",
      fees: 50000,
      duration: "6 Months",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      id: 4,
      name: "DevOps with AWS",
      desc: "Docker, Kubernetes, CI/CD & AWS Cloud",
      fees: 55000,
      duration: "4 Months",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ]);

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="courses-hero">
        <h1>Our Courses</h1>
        <p>Choose the right course to build your career</p>
      </section>

      {/* COURSES LIST */}
      <section className="container my-5">
        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-md-6 col-lg-4" key={course.id}>
              <div className="course-card">
                <img src={course.image} alt={course.name} />

                <div className="course-body">
                  <h5>{course.name}</h5>
                  <p>{course.desc}</p>

                  <div className="course-info">
                    <span>⏱ {course.duration}</span>
                    <span>⭐ 4.5</span>
                  </div>

                  <div className="course-footer">
                    <strong>₹{course.fees}</strong>
                    <button className="btn btn-primary btn-sm">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
