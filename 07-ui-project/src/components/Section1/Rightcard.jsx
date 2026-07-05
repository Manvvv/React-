import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-75 overflow-hidden relative rounded-4xl shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt='image' />
      
    <Rightcardcontent id={props.id} tag={props.tag} />
    </div>
  )
}

export default Rightcard
