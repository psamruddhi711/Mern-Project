import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCurrentCourses();
  }, []);

  const fetchCurrentCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/courses/current-courses"
      );

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

  if (error) {
    return <div className="courses-error">{error}</div>;
  }

  return (
    <div className="courses-container">
      <h2 className="courses-title">Available Courses</h2>

      {courses.length === 0 ? (
        <p className="no-courses">No active courses available</p>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.course_id}>
              <h3>{course.course_name}</h3>

              <p className="course-desc">{course.description}</p>

              <div className="course-info">
                <span>₹{course.fees}</span>
                <span>{course.start_date} → {course.end_date}</span>
              </div>

              <p className="expiry">
                🎥 Video access: {course.video_expiry_days} days
              </p>

              <button className="enroll-btn">View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
