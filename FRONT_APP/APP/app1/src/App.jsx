import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StudentProfile from "./pages/StudentProfile";
import AdminDashboard from "./pages/AdminDashboard";

// optional auth form (if you want)
// import AuthForm from "./components/AuthForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Student routes */}
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* General pages */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
