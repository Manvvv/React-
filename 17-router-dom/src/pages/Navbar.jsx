import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h4> Manavv Classes</h4>
        <div>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/services'>Services</Link>
           <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
