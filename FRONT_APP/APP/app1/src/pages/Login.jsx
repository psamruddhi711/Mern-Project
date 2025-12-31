import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import Navbar from "../components/Navbar";
import userApi from "../api/userApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // ✅ hash password (backend expects hashed password)
      const hashedPassword = CryptoJS.SHA256(password).toString();

      const res = await userApi.signin({
        email,
        password: hashedPassword,
      });

      if (res.data.status === "success") {
        const { token, role, email } = res.data.data;

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);

        // role based redirect
        if (role === "ADMIN") {
          navigate("/admin/courses");
        } else {
          navigate("/profile");
        }
      } else {
        setError(res.data.error || "Invalid email or password");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h3 className="text-center mb-3">Login</h3>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button type="submit" className="btn btn-warning w-100">
                  Login
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
