import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/courses.css";
import { useNavigate } from "react-router";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:4000/course/all-courses")
      .then((res) => {
        if (res.data.status === "success") {
          setCourses(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses", err);
        setLoading(false);
      });
  }, []);

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
        {loading ? (
          <h4 className="text-center">Loading courses...</h4>
        ) : (
          <div className="row g-4">
            {courses.map((course) => (
              <div className="col-md-6 col-lg-4" key={course.course_id}>
                <div className="course-card">
                  {/* Static image (or add image column later) */}
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    alt={course.course_name}
                  />

                  <div className="course-body">
                    <h5>{course.course_name}</h5>
                    <p>{course.description}</p>

                    <div className="course-info">
                      <span>
                        ⏱{" "}
                        {course.start_date} – {course.end_date}
                      </span>
                      <span>⭐ 4.5</span>
                    </div>

                    <div className="course-footer">
                      <strong>₹{course.fees}</strong>
                      <button className="btn btn-primary btn-sm"  onClick={() => navigate(`/register/${course.course_id}`)}>
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Courses;
