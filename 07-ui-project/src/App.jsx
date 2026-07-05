import React from 'react'
import Section1 from './components/Section1/section1'
import Section2 from './components/Section2/section2'
const App = () => {
  
    const users =[
      {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
      tag:'Satisfied'
    },
    { 
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
     tag:'Underserved'
    },
     { 
     img:'https://images.unsplash.com/photo-1730717652039-4b3ff3952c71?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
     tag:'Underbanked'
    }
  ]

  return (


    <div>
     <Section1 users={users} />
     <Section2 />
    </div>
  )
}

export default App
