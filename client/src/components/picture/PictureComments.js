import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { AuthConsumer } from '../../providers/AuthProvider';

const PictureComments = (props) => {
  const userId = props.user_id
  const [userName, setUserName] = useState()
  const [userImage, setUserImage] = useState("https://images.unsplash.com/photo-1588948138600-bc75fd417834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80")
  const [editing, setEditing] = useState(false)
  const [body, setBody] = useState(props.body)
  
  useEffect(() => {
    axios.get(`/api/users/${userId}`)
      .then(res => {
          setUserName(res.data.first_name)
          setUserImage(res.data.image) 
      })
      .catch(console.log)
  }, [])

  const toggleEdit = () => {
    setEditing(!editing)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.patch(`/api/picture_comments/${props.id}`, { body: body, user_id: userId, picture_id: props.pictureId })
      .then( res => {
        toggleEdit()
        setBody(res.data.body)
      })
      .catch(console.log)
  }
  
  const handleChange = (event) => {
    setBody(event.target.value)
  }

  const deleteComment = () => {
    axios.delete(`api/picture_comments/${props.id}`)
      .then( res => props.deleteCommentState(props.id))
  }

  return (
    <>
      <UserDiv>
        <StyledUserImage image={userImage} />
        {userName}
      </UserDiv>
      <BodyDiv>
        {editing ?
          <>
            <form onSubmit={handleSubmit}>
              <input name="comment" type="text" value={body} onChange={handleChange}>
              </input>
            </form>
          </>
        :
          <>
            {body}
          </>
        }
      </BodyDiv>
      <>
      {props.authenticated ? 
        <>
          {props.user.id === userId ? 
            <EditDeleteDiv>
                <button onClick={toggleEdit}>Edit</button>
                <button onClick={deleteComment}>Delete</button>
              </EditDeleteDiv>
            : null
          }
        </>
      : null }
      </>
    </>
  )
}
const UserDiv = styled.div`
  height: 45px;
`
const EditDeleteDiv = styled.div`
  display: flex;
  align-items: right;
  justify-content: space-between;
  width: 20rem;
  
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

const ConnectedPictureComments = (props) => (
  <AuthConsumer>
    {(value) => <PictureComments {...props} {...value} />}
  </AuthConsumer>
);

export default ConnectedPictureComments;