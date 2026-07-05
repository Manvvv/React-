import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {

  const [UserData, setUserData] = useState([])

  const [Index, setIndex] = useState(1)

  const getdata = async() =>{
   const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=10`)
   setUserData(response.data)
  }

  useEffect(() => {
    getdata()
  },[Index])

  let printuserdata = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  
  if(UserData.length > 0){
    printuserdata = UserData.map(function (elem,idx) {


      return <div key={idx}>
      <a href={elem.url} target='_blank'>
<div className='w-44 h-40  overflow-hidden rounded-xl'>
  <img src={elem.download_url} alt="" className='w-full h-full object-cover'/>
  </div>
      <h3 className='font-bold text-lg'>{elem.author}</h3>
      </a>

      </div>
    })
  }
  return (
    <div className='h-screen p-4 bg-black overflow-auto text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>{printuserdata}</div>

      <div className='flex justify-center gap-6 items-center p-4 fixed bottom-0 left-0 right-0 bg-black'>
        <button  className='bg-amber-600 px-4 py-2 text-sm cursor-pointer active:scale-95 text-black rounded font-semibold'
        onClick={() => {
         if( index >1){
         setIndex(Index - 1)
         setUserData([])}}}>
         Prev
         </button>
        <h4 className='text-xl font-semibold'>Page{Index}</h4>
        <button onClick={() => {
          setUserData([])
          setIndex(Index + 1)}} className='bg-amber-600 px-4 py-2 text-sm cursor-pointer active:scale-95 text-black rounded font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App
