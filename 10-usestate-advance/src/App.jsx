import React, { useState } from 'react'

const App = () => {
const [num, setNum] = useState({user:"Manav",age:18});

function ageup(){
  setNum(prev => ({...prev, age: prev.age + 1}));
}

function agedown(){
  setNum(prev => ({...prev, age: prev.age - 1}));
}
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={ageup}>Age Up</button>
      <button onClick={agedown}>Age Down</button>
    </div>
  )
}

export default App
