import { useState } from "react";

export default function AuthForm() {
  const [role, setRole] = useState("student"); // student | admin
  const [tab, setTab] = useState("login"); // login | signup

  return (
    <div className="auth-card">
      <h2>Student Portal</h2>

      {/* Role Toggle */}
      <div className="role-toggle">
        <button
          className={role === "student" ? "active" : ""}
          onClick={() => setRole("student")}
        >
          Student
        </button>
        <button
          className={role === "admin" ? "active" : ""}
          onClick={() => setRole("admin")}
        >
          Admin
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <span
          className={tab === "login" ? "active" : ""}
          onClick={() => setTab("login")}
        >
          Login
        </span>
        <span
          className={tab === "signup" ? "active" : ""}
          onClick={() => setTab("signup")}
        >
          Sign Up
        </span>
      </div>

      {/* Forms */}
      {tab === "login" ? <LoginForm role={role} /> : <SignupForm />}
    </div>
  );
}

import api from "../api/api";

function LoginForm({ role }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const url =
        role === "student"
          ? "/student/login"
          : "/admin/login";

      const response = await api.post(url, {
        email,
        password,
      });

      alert("Login Successful ✅");

      // Save token
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", role);

      // Redirect
      if (role === "admin") {
        window.location.href = "/admin-dashboard";
      } else {
        window.location.href = "/student-dashboard";
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed ❌");
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <label>Email address</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">
        Login as {role === "student" ? "Student" : "Admin"}
      </button>
    </form>
  );
}



function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await api.post("/student/signup", form);
      alert("Account created successfully 🎉");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed ❌");
    }
  };

  return (
    <form className="form" onSubmit={handleSignup}>
      <input placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input type="password" placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <input placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <textarea placeholder="Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <button type="submit">Create Account</button>
    </form>
  );
}
