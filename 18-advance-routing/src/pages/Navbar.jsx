import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='bg-blue-500 text-white p-4 flex justify-between items-center'>
        <h2>Manav Classes</h2>
        <div className="nav-items">
            <Link className="text-white hover:text-gray-300 m-2" to="/">
              Home
            </Link>
            <Link className="text-white hover:text-gray-300 m-2" to="/about">
              About
            </Link>
            <Link className="text-white hover:text-gray-300 m-2" to="/contact">
              Contact
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
