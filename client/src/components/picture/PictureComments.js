import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CommentBar from './CommentBar';

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
      <UserDiv>
        UserPic {userName}
      </UserDiv>
      <BodyDiv>
        {body}
      </BodyDiv>
    </>
  )
}
const UserDiv = styled.div`
  height: 45px;
`
const BodyDiv = styled.div`
  background: grey;
`

export default PictureComments;