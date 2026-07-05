import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ContactDetails from './pages/ContactDetails' 
import Navbar2 from './pages/navbar2'


const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
