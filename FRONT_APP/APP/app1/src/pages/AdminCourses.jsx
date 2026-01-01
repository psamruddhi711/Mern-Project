import React, { useEffect, useState } from "react";
import courseApi from "../api/courseApi";

/* =========================
   Helper: MySQL Date Format
   Converts any date to YYYY-MM-DD
========================= */
const formatDateForMySQL = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().split("T")[0];
};

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [action, setAction] = useState("VIEW");
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    courseName: "",
    description: "",
    fees: "",
    startDate: "",
    endDate: "",
    videoExpireDays: "",
  });

  /* =========================
     FETCH ALL COURSES
  ========================= */
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    try {
      const res = await courseApi.getAllCourses();
      if (res.data.status === "success") {
        setCourses(res.data.data);
      } else {
        setMessage(res.data.error);
      }
    } catch (err) {
      setMessage("Failed to load courses");
    }
  };

  /* =========================
     INPUT HANDLER
  ========================= */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* =========================
     ADD / UPDATE COURSE
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔥 FIX: Convert dates to MySQL format
      const payload = {
        ...formData,
        startDate: formatDateForMySQL(formData.startDate),
        endDate: formatDateForMySQL(formData.endDate),
      };

      if (action === "ADD") {
        await courseApi.addCourse(payload);
        setMessage("Course added successfully");
      }

      if (action === "UPDATE") {
        await courseApi.updateCourse(editingId, payload);
        setMessage("Course updated successfully");
      }

      resetForm();
      fetchAllCourses();
    } catch (err) {
      console.error(err);
      setMessage("Operation failed (Check date format)");
    }
  };

  /* =========================
     EDIT COURSE
  ========================= */
  const handleEdit = (course) => {
    setAction("UPDATE");
    setEditingId(course.course_id);

    setFormData({
      courseName: course.course_name,
      description: course.description,
      fees: course.fees,
      startDate: course.start_date.split("T")[0], // YYYY-MM-DD
      endDate: course.end_date.split("T")[0],     // YYYY-MM-DD
      videoExpireDays: course.video_expiry_days,
    });
  };

  /* =========================
     DELETE COURSE
  ========================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      await courseApi.deleteCourse(id);
      setMessage("Course deleted successfully");
      fetchAllCourses();
    } catch (err) {
      console.error(err);
      setMessage("Delete failed");
    }
  };

  /* =========================
     RESET FORM
  ========================= */
  const resetForm = () => {
    setFormData({
      courseName: "",
      description: "",
      fees: "",
      startDate: "",
      endDate: "",
      videoExpireDays: "",
    });
    setEditingId(null);
    setAction("VIEW");
  };

  /* =========================
     UI
  ========================= */
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Admin Course Management</h2>

      <select
        className="form-select mb-4"
        value={action}
        onChange={(e) => setAction(e.target.value)}
      >
        <option value="VIEW">View Courses</option>
        <option value="ADD">Add Course</option>
        <option value="UPDATE">Update Course</option>
        <option value="DELETE">Delete Course</option>
      </select>

      {message && <div className="alert alert-info">{message}</div>}

      {(action === "ADD" || action === "UPDATE") && (
        <form className="card p-4 mb-4" onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            name="courseName"
            placeholder="Course Name"
            value={formData.courseName}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            name="fees"
            type="number"
            placeholder="Fees"
            value={formData.fees}
            onChange={handleChange}
            required
          />

          <textarea
            className="form-control mb-2"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="number"
            min="1"
            name="videoExpireDays"
            placeholder="Video Expiry Days"
            value={formData.videoExpireDays}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            {action === "ADD" ? "Add Course" : "Update Course"}
          </button>
        </form>
      )}

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Fees</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.course_id}>
              <td>{c.course_id}</td>
              <td>{c.course_name}</td>
              <td>₹{c.fees}</td>
              <td>
                {c.start_date.split("T")[0]} →{" "}
                {c.end_date.split("T")[0]}
              </td>
              <td>
                {action === "UPDATE" && (
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(c)}
                  >
                    Edit
                  </button>
                )}
                {action === "DELETE" && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(c.course_id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCourses;
