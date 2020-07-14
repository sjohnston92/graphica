import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CommentBar from './CommentBar';

const PictureComments = (props) => {
  const userId = props.user_id
  const body = props.body
  const [userName, setUserName] = useState()
  const [userImage, setUserImage] = useState("https://images.unsplash.com/photo-1588948138600-bc75fd417834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80")
  axios.get(`/api/users/${userId}`)
    .then(res => {
      setUserName(res.data.first_name)//this could be refactored into a Provider
      setUserImage(res.data.image) 
    })
    .catch(console.log)
  return (
    <>
      <UserDiv>
        <StyledUserImage image={userImage} />
        {/* <StyledUserImage src={userImage} /> */}

        {userName}
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
const StyledUserImage = styled.div `
background-image: url(${props => props.image});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
border-radius: 100%;
height: 30px;
width: 30px;  
  
`
const BodyDiv = styled.div`
  background: grey;
  padding-botton: 2rem;
`

export default PictureComments;