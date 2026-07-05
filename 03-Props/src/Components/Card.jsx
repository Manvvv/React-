import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="manav" /> 
        <h1>{props.User},{props.age}</h1>
        <p>I am currently persuing my btech degree from IIT Laalkuan. </p>
        
      </div>
    </div>
  )
}

export default Card
