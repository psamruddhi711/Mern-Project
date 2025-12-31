import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/users/signin", {
        email,
        password
      });

      if (res.data.status === "success") {
        const { role, token } = res.data.data;

        localStorage.setItem("token", token);
        localStorage.setItem("email", email);

        role === "ADMIN"
          ? navigate("/admin/dashboard")
          : navigate("/student/profile");
      } else {
        alert("Invalid credentials");
      }
    } catch {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
