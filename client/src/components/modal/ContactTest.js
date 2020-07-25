import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import styled from 'styled-components';
const ContactTest = ({user}) => (
  <>
    <h1>{user.first_name} {user.last_name}</h1>
    <hr></hr>
    <h2>Contact Info</h2>
    <h3>Email</h3>
    <p>{user.email}</p>
    <h3>Graphica Account:</h3>  
    <a href={`https://graphica_domain/profile/${user.id}`} target="_blank" >
      <p>https://graphica_domain/profile/{user.id}</p>
    </a>
    <h3>Phone #</h3>
    <p>123-123-1234</p>
  </>
)

export default ContactTest;