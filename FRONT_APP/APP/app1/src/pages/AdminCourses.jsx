import React, { useEffect, useState } from "react";
import courseApi from "../api/courseApi";

/* Convert date to MySQL format */
const toMySQLDate = (d) =>
  d ? new Date(d).toISOString().split("T")[0] : "";

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

  useEffect(() => {
    fetchCourses();
  }, []);

  /* ================= API ================= */

  const fetchCourses = async () => {
    try {
      const res = await courseApi.getAllCourses();
      setCourses(res.data.data || []);
    } catch {
      setMessage("❌ Failed to load courses");
    }
  };

  /* ================= HANDLERS ================= */

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      courseName: formData.courseName,
      description: formData.description,
      fees: formData.fees,
      startDate: toMySQLDate(formData.startDate),
      endDate: toMySQLDate(formData.endDate),
      videoExpireDays: formData.videoExpireDays,
    };

    try {
      if (action === "ADD") {
        await courseApi.addCourse(payload);
        setMessage("✅ Course added successfully");
      }

      if (action === "UPDATE") {
        await courseApi.updateCourse(editingId, payload);
        setMessage("✅ Course updated successfully");
      }

      resetForm();
      fetchCourses();
    } catch (err) {
      console.error(err);
      setMessage("❌ Operation failed");
    }
  };

  const handleEdit = (course) => {
    setAction("UPDATE");
    setEditingId(course.course_id);
    setFormData({
      courseName: course.course_name,
      description: course.description,
      fees: course.fees,
      startDate: course.start_date.split("T")[0],
      endDate: course.end_date.split("T")[0],
      videoExpireDays: course.video_expiry_days,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;
    try {
      await courseApi.deleteCourse(id);
      setMessage("🗑️ Course deleted");
      fetchCourses();
    } catch {
      setMessage("❌ Delete failed");
    }
  };

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

  /* ================= UI ================= */

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Admin Course Management</h2>

      <select
        className="form-select mb-3"
        value={action}
        onChange={(e) => setAction(e.target.value)}
      >
        <option value="VIEW">View Courses</option>
        <option value="ADD">Add Course</option>
        <option value="UPDATE">Update Course</option>
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
            type="number"
            name="fees"
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
            name="videoExpireDays"
            placeholder="Video Expiry Days"
            value={formData.videoExpireDays}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success">
            {action === "ADD" ? "Add Course" : "Update Course"}
          </button>
        </form>
      )}

      {action === "VIEW" && (
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
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(c)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(c.course_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminCourses;