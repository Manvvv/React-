import React, { useState } from 'react'

const App = () => {

  const [Title, settitle] = useState('')

  const [Theory, settheory] = useState('')

  const [Notes, setnotes] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const copynotes = [...Notes];
    copynotes.push({Title, Theory})

    setnotes(copynotes)
    console.log(Notes)

    settitle('')
    settheory('')
  }

  const deleteNotes = (idx) => {
    const copynotes = [...Notes]
    copynotes.splice(idx, 1)
    setnotes(copynotes)
  }


  return (
  <div className='bg-black lg:flex h-screen text-white'>
  <form  onSubmit={(e) => {handleSubmit(e)}}className='flex flex-col rounded-md p-10 items-start gap-4 lg:w-1/2'
  >
    <h1 className='text-2xl font-bold mb-4'>
      Add a Note
    </h1>
    
      <input type="text" placeholder='Title' className='border-2 outline-none rounded py-2 h-25 px-5 w-full' value={Title} onChange={(e) =>{settitle(e.target.value)}} />
      <textarea placeholder='Content' className='border-2 outline-none rounded px-5 py-2 font-medium w-full h-32 flex items-start mb-4 flex-row' value={Theory} onChange={(e) => {settheory(e.target.value)}}></textarea>
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Note</button>
    
  </form>
  <div className='lg:w-1/2 lg:border-l-2 p-10'>
    <h1 className='text-4xl font-bold'>Your Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
        {Notes.map(function(elem, idx) {

          return <div key={idx} className='flex justify-between flex-col h-52 items-start relative w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url(https://tse3.mm.bing.net/th/id/OIP.2mzA164Mmrphy51_xHaqAQHaHx?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3)]'>
          <div>
            <h3 className='text-xl leading-tight font-bold '>{elem.Title}</h3>
            <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.Theory}</p>
          </div>

          <button onClick={() => {deleteNotes(idx)}} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
         </div>
          })}
      </div>
    </div>
  </div>
  )
}

export default App
