import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Courses from "./pages/Courses"
import { Route, Routes } from "react-router"

function App() {
 
  return (
    
<>
<Routes>
<Route path='/home' element={<Home/>} /> 
<Route path='/profile' element={<Profile/>} />
<Route path='/courses' element={<Courses/>} />


  </Routes>


</>
  )
}

export default App
