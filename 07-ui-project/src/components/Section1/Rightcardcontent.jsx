import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
           <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ullam autem repellendus quos numquam enim.</p>
           <div className='flex justify-between'>
            <button className='bg-blue-600 text-white py-2 px-8 font-medium rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white py-2 px-3 font-medium rounded-full'><i
            className="ri-arrow-right-line"></i></button>
           </div>
        </div>
      </div>
  )
}

export default Rightcardcontent
