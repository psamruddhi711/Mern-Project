import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

const Register = () => {
  const { courseId } = useParams();      // 👈 from URL
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile_no: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      email: form.email,
      mobile_no: form.mobile_no,
      course_id: Number(courseId)
    };

axios
  .post("http://localhost:4000/students/register-to-course", payload)
  .then((res) => {
    console.log("API response:", res.data);

    if (res.data.status === "success") {
      alert("Registration Successful 🎉");
      navigate("/courses");
    } else {
      alert(res.data.error);
    }
  })
  .catch((err) => {
    console.error(err);
    alert("Server error");
  });

  };

  return (
    <div className="container mt-5">
      <h3 className="mb-3">Register for Course ID: {courseId}</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          className="form-control mb-2"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="mobile_no"
          className="form-control mb-3"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />

        <button className="btn btn-success w-100">
          Register & Enroll
        </button>
      </form>
    </div>
  );
};

export default Register;
