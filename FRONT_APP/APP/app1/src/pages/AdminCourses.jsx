import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [action, setAction] = useState("VIEW"); // VIEW | ADD | UPDATE | DELETE
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    courseName: "",
    description: "",
    fees: "",
    startDate: "",
    endDate: "",
    videoExpireDays: ""
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchAllCourses();
  }, []);

  // 🔹 FETCH COURSES
  const fetchAllCourses = async () => {
    try {
      const res = await axios.get("http://localhost:4000/courses/all-courses");
      if (res.data.status === "success") {
        setCourses(res.data.data);
      }
    } catch (err) {
      setMessage("Failed to load courses");
    }
  };

  // 🔹 HANDLE INPUT
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 SUBMIT (ADD / UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (action === "ADD") {
        await axios.post(
          "http://localhost:4000/courses/add",
          formData,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setMessage("Course added successfully");
      }

      if (action === "UPDATE") {
        await axios.put(
          `http://localhost:4000/courses/update/${editingId}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setMessage("Course updated successfully");
      }

      resetForm();
      fetchAllCourses();
    } catch (err) {
      setMessage("Operation failed");
    }
  };

  // 🔹 EDIT COURSE
  const handleEdit = (course) => {
    setAction("UPDATE");
    setEditingId(course.course_id);
    setFormData({
      courseName: course.course_name,
      description: course.description,
      fees: course.fees,
      startDate: course.start_date,
      endDate: course.end_date,
      videoExpireDays: course.video_expiry_days
    });
  };

  // 🔹 DELETE COURSE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      await axios.delete(
        `http://localhost:4000/courses/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setMessage("Course deleted successfully");
      fetchAllCourses();
    } catch (err) {
      setMessage("Delete failed");
    }
  };

  // 🔹 RESET
  const resetForm = () => {
    setFormData({
      courseName: "",
      description: "",
      fees: "",
      startDate: "",
      endDate: "",
      videoExpireDays: ""
    });
    setEditingId(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Admin Course Management</h2>

      {/* 🔽 ACTION DROPDOWN */}
      <div className="mb-4">
        <select
          className="form-select"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        >
          <option value="VIEW">View All Courses</option>
          <option value="ADD">Add Course</option>
          <option value="UPDATE">Update Course</option>
          <option value="DELETE">Delete Course</option>
        </select>
      </div>

      {message && <div className="alert alert-info">{message}</div>}

      {/* ➕ ADD / ✏️ UPDATE FORM */}
      {(action === "ADD" || action === "UPDATE") && (
        <form className="card p-4 mb-5" onSubmit={handleSubmit}>
          <h5>{action === "ADD" ? "Add Course" : "Update Course"}</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Course Name"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder="Fees"
                name="fees"
                value={formData.fees}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="number"
                min="1"
                className="form-control"
                placeholder="Video Expiry Days"
                name="videoExpireDays"
                value={formData.videoExpireDays}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="btn btn-success mt-3">
            {action === "ADD" ? "Add Course" : "Update Course"}
          </button>
        </form>
      )}

      {/* 📋 COURSES TABLE */}
      {(action === "VIEW" || action === "DELETE" || action === "UPDATE") && (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
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
                    {c.start_date} → {c.end_date}
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
      )}
    </div>
  );
};

export default AdminCourses;
