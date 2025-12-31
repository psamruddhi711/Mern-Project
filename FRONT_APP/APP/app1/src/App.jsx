import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import AdminCourses from "./pages/AdminCourses";
import About from "./pages/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* HOME */}
        <Route path="/home" element={<Home />} />

        {/* COURSES */}
        <Route path="/courses" element={<Courses />} />

        {/* ABOUT US */}
        <Route path="/about" element={<About />} />

        {/* PROFILE */}
        <Route path="/profile" element={<Profile />} />

        {/* ADMIN */}
        <Route path="/admin/courses" element={<AdminCourses />} />

        {/* FALLBACK */}
        <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
