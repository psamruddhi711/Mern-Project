import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import userApi from "../api/userApi";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await userApi.signup({
        email,
        password, // plain password (backend hashes it)
        role,
      });

      if (res.data.status === "success") {
        navigate("/login");
      } else {
        setError(res.data.error);
      }
    } catch {
      setError("Signup failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card p-4 shadow">
              <h3 className="text-center mb-3">Sign Up</h3>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSignup}>
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

                <select
                  className="form-select mb-3"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="STUDENT">Student</option>
                  <option value="ADMIN">Admin</option>
                </select>

                <button className="btn btn-warning w-100">
                  Create Account
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
