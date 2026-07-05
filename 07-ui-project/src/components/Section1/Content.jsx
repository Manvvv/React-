import React from 'react'
import LeftContent from './Leftcontent'
import RightContent from './Rightcontent'
const Content = (props) => {
  
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 h-[90vh] px-18 bg-white '>
      <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Content
