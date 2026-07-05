import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  function onchangingA(){
    console.log('A ki value change ho gyi')
  }

  function onchangingB(){
    console.log('B ki value change ho gyi')
  }

  useEffect(() => {
    onchangingA()
  },[count])

  useEffect(() => {
    onchangingB()
  },[count2])
  return (

    <div>
      <button onClick={() => setCount(count + 1)}>button 1</button>
      <h2>{count}</h2>

      <button onClick={() => setCount2(count2 + 1)}>button 2</button>
      <h2>{count2}</h2>
    </div>
  )
}

export default App
