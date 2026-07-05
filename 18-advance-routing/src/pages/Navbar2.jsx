import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const Navigate = useNavigate();
  return (
    <div className='bg-blue-800 text-white p-4 flex justify-between items-center'>
      <button onClick={() => Navigate('/')}>Back to home</button>
      <button onClick={() => Navigate(+1)}>Next</button>
      <button onClick={() => Navigate(-1)}>Previous</button>
    </div>
  )
}

export default Navbar2
