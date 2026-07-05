import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx) {
          return <h3>Hello, {elem.id}: {elem.name}</h3>
        })}
        </div>
    </div>
  )
}

export default App