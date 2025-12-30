import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Courses from "./pages/Courses"
import AdminCourses from "./pages/AdminCourses";
import { Route, Routes } from "react-router"



function App() {
 
  return (
    
<>
<Routes>
<Route path="/admin/courses" element={<AdminCourses />} />
<Route path='/home' element={<Home/>} /> 
<Route path='/profile' element={<Profile/>} />
<Route path='/courses' element={<Courses/>} />
<Route path="*" element={<h2>Page Not Found</h2>} />


  </Routes>


</>
  )
}

export default App
