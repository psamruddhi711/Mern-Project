import { useState } from "react";
import api from "../api/api";

const StudentProfile = () => {
  const [name, setName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [mobile, setMobile] = useState("");

  const email = localStorage.getItem("email");

  const saveProfile = async () => {
    try {
      const res = await api.post("/students/add-profile", {
        name,
        email,
        course_id: courseId,
        mobile_no: mobile
      });

      if (res.data.status === "success") {
        alert("Profile Saved");
      } else {
        alert(res.data.error);
      }
    } catch {
      alert("Error saving profile");
    }
  };

  return (
    <div>
      <h2>Student Profile</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Course ID" onChange={e => setCourseId(e.target.value)} />
      <input placeholder="Mobile" onChange={e => setMobile(e.target.value)} />

      <button onClick={saveProfile}>Save</button>
    </div>
  );
};

export default StudentProfile;
