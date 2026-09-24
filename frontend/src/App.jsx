import { useState } from 'react'
import Calculator from './assets/components/Calculator.jsx'
import Navbar from './assets/components/Navbar.jsx'
import './App.css'
import { Link, Routes, Route} from 'react-router-dom'
import Home from './assets/components/Home.jsx'
import Contact from './assets/components/Contact.jsx'
import Profile from './assets/components/Profile.jsx'







function App() {
  
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
    </div>
  )
}

export default App
