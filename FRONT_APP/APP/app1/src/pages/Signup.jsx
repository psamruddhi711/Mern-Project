import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await api.post("/users/signup", {
        email,
        password,
        role
      });

      if (res.data.status === "success") {
        alert("Signup Successful");
        navigate("/login");
      } else {
        alert(res.data.error);
      }
    } catch {
      alert("Signup Failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <select onChange={e => setRole(e.target.value)}>
        <option value="STUDENT">Student</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
