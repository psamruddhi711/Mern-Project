import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import AdminCourses from "./pages/AdminCourses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import VideoPage from "./pages/Videos";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin/courses" element={<AdminCourses />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register/:courseId" element={<Register />} />
      <Route path="/Videos" element={<VideoPage />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}
// 


export default App;
