import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";

const ContactTest = () => (
  <AuthConsumer>
    {
      values => (
    <>
      <h1>{values.user.first_name} {values.user.last_name}</h1>
      <hr></hr>
      <h2>Contact Info</h2>
      <h3>Email</h3>
      <p>{values.user.email}</p>
      <h3>Graphica Account:</h3>  
      <p>URL GOES HERE</p>
      <h3>Phone #</h3>
      <p>123-123-1234</p>
    </>

      )
    }
  </AuthConsumer>
)

export default ContactTest;