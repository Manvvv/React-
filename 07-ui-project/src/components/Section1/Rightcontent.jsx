import React from 'react'
import Rightcard from './Rightcard'
const Rightcontent = (props) => {
  console.log(props.users);
  return (
    <div id='Right' className='h-full w-2/3 p-6 flex overflow-x-auto flex-nowrap gap-10 rounded-b-4xl'>
    {props.users.map(function(elem,idx){
      return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} />
    })}
    </div>
  )
}

export default Rightcontent
