import React from 'react'

const App = () => {
function btnclick(elem){
  console.log(elem.del)
}

  return (
    <>
    <div >
      <button onClick={btnclick}>Click here</button>
    </div>
    <div>
      <input type="text" onChange={btnclick} />
    </div>
    <div onWheel={btnclick}>
    <div className="page1"></div>
        <div className="page2"></div>
            <div className="page3"></div>
            </div>
    </>
  )
}

export default App
