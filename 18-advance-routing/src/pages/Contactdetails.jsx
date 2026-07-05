import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {

    const params = useParams();

  return (

    

    <div>
      <h1>{params.id}'s Contact Details</h1>
      <p>This is the contact details page.</p>
    </div>
  )
}

export default ContactDetails
