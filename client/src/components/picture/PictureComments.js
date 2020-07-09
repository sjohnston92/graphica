import React, { useState } from 'react';
import axios from 'axios';

const PictureComments = (props) => {
  const userId = props.user_id
  const body = props.body
  const [userName, setUserName] = useState()
  axios.get(`/api/users/${userId}`)
    .then(res => {
      setUserName(res.data.first_name) //this could be refactored into a Provider
    })
    .catch(console.log)
  return (
    <>
    {body} -- {userName}
    </>
  )
}
export default PictureComments;