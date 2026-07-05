import React from 'react'

const App = () => {


  const user = {
    name: 'Manav Choudhary',
    age: 30,
    email: 'manavch135@gmail.com'
  }
  localStorage.setItem('user', JSON.stringify(user))

  const storedUser = JSON.parse(localStorage.getItem('user'))
  console.log(storedUser)

  return (
    <div>
      App
    </div>
  )
}

export default App
